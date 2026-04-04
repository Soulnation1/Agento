import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDraftMemos, getInboxMemos, getSentMemos } from "../api";
import { Link } from "react-router-dom";
import { MoveLeft, PencilLine, TrashIcon } from "lucide-react";
import Button from "./Button";

const MemoDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const memoFromState = location.state?.memo;
  const [memo, setMemo] = useState(memoFromState || null);
  const [loading, setLoading] = useState(false);

  const category = location.pathname.includes("/sent/")
    ? "Sent"
    : location.pathname.includes("/drafts/")
      ? "Drafts"
      : "Inbox";

  useEffect(() => {
    if (memo) return;

    const fetchMemo = async () => {
      setLoading(true);
      try {
        const fetcher =
          category === "Sent"
            ? getSentMemos
            : category === "Drafts"
              ? getDraftMemos
              : getInboxMemos;
        const res = await fetcher();
        const result = res.data?.data?.result || [];
        const found = result.find((item) => item._id === id);
        if (found) {
          setMemo(found);
        }
      } catch (err) {
        console.error("Memo details error:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMemo();
  }, [category, id, memo]);

  if (loading) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-sm border border-[#eef0fb]">
        <p className="text-[#8080a0]">Loading memo...</p>
      </div>
    );
  }

  if (!memo) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-sm border border-[#eef0fb]">
        <p className="text-[#8080a0]">Memo not found.</p>
      </div>
    );
  }

  const displaySender =
    memo.sender || (category === "Sent" ? "You" : "Unknown sender");
  const displayTime =
    memo.createdAt || memo.updatedAt
      ? new Date(memo.createdAt || memo.updatedAt).toLocaleString()
      : "Unknown time";
  const content = memo.content || memo.message || "No content available.";

  const initials =
    (displaySender || "")
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  return (
    <>
      <div className="mb-4">
        <Link to={`/dashboard/${category.toLowerCase()}`}>
          <span className="text-[#7d7bff] text-sm hover:text-blue-900">
            <MoveLeft className="inline pr-1" size={25} />
            Back to {category}
          </span>
        </Link>
      </div>
      <div className="rounded-[10px] bg-white p-8 shadow-sm border border-[#eef0fb]">
        <div className="flex flex-col gap-4 mb-6 ">
          <div>
            <h1 className="mt-2 text-2xl font-bold text-[#1a1a2e]">
              {memo.title || "Untitled memo"}
            </h1>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex items-center gap-6 ">
              <div className="w-10 h-10 bg-[#9780fb] justify-center items-center flex font-bold text-sm rounded-full">
                {initials}
              </div>
              <div className="">
                <p className="font-bold text-[13px]">{displaySender}</p>
                <p className="text-[#9090b0] text-sm">
                  To: {memo.recipient || "Unknown recipient"} . {displayTime}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                type="compose"
                size="x-small"
                title={
                  <span className="flex items-center gap-1">
                    <PencilLine className="inline " size={14} />
                    Edit
                  </span>
                }
                className="font-bold px-3 py-0.5"
              />

              <Button
                type="danger"
                size="x-small"
                title={
                  <span className="flex items-center gap-1">
                    <TrashIcon className="inline " size={14} />
                    Delete
                  </span>
                }
                className="px-3 py-0.5 self-center"
              />
            </div>
          </div>
        </div>

        <hr />

        <div className="  p-6 text-sm leading-relaxed text-[#404060]">
          {content}
        </div>
      </div>
    </>
  );
};

export default MemoDetails;
