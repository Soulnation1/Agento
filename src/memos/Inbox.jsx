import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { Pencil, Search, Edit2, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchMemos, deleteMemo } from "../Api";
import { showToast } from "../components/ShowToast";

const Inbox = () => {
  const [memos, setMemos] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentCategory = () => {
    if (location.pathname.includes("/inbox/")) return "inbox";
    return "inbox";
  };

  const currentCategory = getCurrentCategory();

  useEffect(() => {
    const loadInbox = async () => {
      try {
        const data = await fetchMemos();
        const formatted = data.slice(0, 10).map((memo, index) => ({
          id: memo.id,
          sender: `User ${memo.userId}`,
          title: memo.title,
          message: memo.body,
          time: "Received recently",
          unread: index % 2 === 0,
        }));
        setMemos(formatted);
      } catch (err) {
        showToast(err.message, "error");
      }
    };

    loadInbox();
  }, []);
  const handleEdit = (memo) => {
    showToast(`Navigating to compose with memo ${memo.id}`, "info");
    navigate("/dashboard/compose", {
      state: { memo },
    });
  };
  const handleDelete = async (memoId) => {
    try {
      await deleteMemo(memoId);
      showToast(`Memo ${memoId} deleted successfully`, "success");
      navigate(`/dashboard/${currentCategory}`);
    } catch (err) {
      showToast(`Failed to delete memo: ${err.message}`, "error");
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[#1a1a2e] font-bold">Inbox</h1>
          <p className="text-sm text-[#8080a0]">
            {memos.filter((m) => m.unread).length} unread. {memos.length} total
          </p>
        </div>

        <div>
          <Link to="/dashboard/compose">
            <Button
              type="compose"
              size="x-small"
              className="bg-[#f0f0fc] border border-[#ddddf8] text-lg font-bold py-[6px]"
              title={
                <>
                  <Pencil
                    className="inline-block text-[#f3b000] mr-1"
                    size={15}
                  />
                  <span className="text-[#9263ff] text-[13px]">Compose</span>
                </>
              }
            />
          </Link>
        </div>
      </div>

      <Input
        size="full"
        placeholder="Search memos..."
        leftIcon={Search}
        className="placeholder:text-[12px]"
      />

      <div className="flex flex-col bg-[#ffffff] rounded-md p-2 divide-y">
        {memos.length === 0 ? (
          <div className="p-6 text-center text-sm text-[#8080a0]">
            No memos available yet.
          </div>
        ) : (
          memos.map((memo) => (
            <Link
              to={`/dashboard/inbox/${memo.id}`}
              key={memo.id}
              className={`flex justify-between items-start p-3 cursor-pointer transition ${
                memo.unread ? "bg-[#f7f8ff]" : "bg-white text-[#606080]"
              } hover:bg-[#f1f2ff`}
            >
              <div className="flex flex-col">
                <span
                  className={`${
                    memo.unread
                      ? "font-bold text-[#1a1a2e]"
                      : "font-medium text-[#8080a0]"
                  }`}
                >
                  {memo.sender}
                </span>
                <h3
                  className={`${
                    memo.unread
                      ? "font-semibold text-[#1a1a2e]"
                      : "font-normal text-[#9090b0]"
                  }`}
                >
                  {memo.title}
                </h3>
                <p
                  className={`text-xs truncate max-w-[250px] ${
                    memo.unread ? "text-[#9090b0]" : "text-[#b0b0c0]"
                  }`}
                >
                  {memo.message}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
               
                <div className="flex flex-col gap-2">
                  <Button
                    icon={<Edit2 size={15} />}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleEdit(memo);
                    }}
                    type="common"
                    size="x-small"
                    className="py-[8px] px-[14px]"
                  />

                  <Button
                    icon={<Trash2 size={15} />}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDelete(memo.id);
                    }}
                    type="danger"
                    size="x-small"
                    className="py-[8px] px-[14px]"
                  />
                </div>
                 <span
                  className={`w-2 h-2 rounded-full ${
                    memo.unread
                      ? "bg-[#7f63ff]"
                      : "bg-white border border-[#cccccc]"
                  }`}
                ></span>
                  <span className="text-[11px] text-[#9090b0]">{memo.time}</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Inbox;
