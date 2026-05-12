import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, Edit2, Trash2 } from "lucide-react";
import Button from "./Button";
import { fetchMemoById, deleteMemo } from "../Api";
import { showToast } from "./ShowToast";
const MemoDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [memoData, setMemoData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getCurrentCategory = () => {
    if (location.pathname.includes("/inbox/")) return "inbox";
    if (location.pathname.includes("/sent/")) return "sent";
    if (location.pathname.includes("/drafts/")) return "drafts";
    return "inbox";
  };

  const currentCategory = getCurrentCategory();

  const handleNavigate = (category) => {
    navigate(`/dashboard/${category}`);
  };

  useEffect(() => {
    const loadMemo = async () => {
      try {
        const data = await fetchMemoById(id);
        setMemoData({
          id: data.id,
          sender: `User ${data.userId}`,
          recipient: "Team",
          title: data.title,
          message: data.body,
          date: "Today",
          time: "Now",
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadMemo();
  }, [id]);

  const handleEdit = () => {
    if (!memoData) return;
    showToast(`Navigating to compose with memo ${memoData.id}`, "info");
    navigate("/dashboard/compose", {
      state: { memo: memoData },
    });
  };

  const handleDelete = async () => {
    const memoId = memoData?.id || id;
    try {
      await deleteMemo(memoId);
      showToast(`Memo ${memoId} deleted successfully`,{
  className: "rounded-xl text-blue-500 shadow-lg font-semibold",
}, "success");
      navigate(`/dashboard/${currentCategory}`);
    } catch (err) {
      showToast(`Failed to delete memo: ${err.message}`, "error");
      console.log(err);
    }
  };

  if (loading) return <p className="p-4">Loading memo...</p>;
  if (!memoData) return <p className="p-4">Memo not found</p>;

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="bg-white rounded-md p-6 flex flex-col gap-4 flex-1 border border-[#eef0fb]">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate(currentCategory)}
            className="flex items-center gap-2 text-[#6c63ff] hover:text-[#5a52d5] transition"
          >
            <ChevronLeft size={20} />
            Back to {currentCategory}
          </button>
        </div>

        <h1 className="text-2xl font-semibold text-[#1a1a2e]">
          {memoData.title}
        </h1>

        {memoData.sender && (
          <div className="flex items-start justify-between w-full gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full font-bold bg-[#7f70fd] flex justify-center items-center text-white">
                {getInitials(memoData.sender)}
              </div>

              <div className="flex flex-col">
                <p className="text-sm font-bold text-black">
                  {memoData.sender}
                </p>
                <div className="flex mt-2 gap-2">
                  <p className="text-sm text-[#7a7aa0]">
                    To: {memoData.recipient}
                  </p>
                  <p className="text-sm text-[#7a7aa0]">
                    Date: {memoData.date} • {memoData.time}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                icon={<Edit2 size={25} />}
                onClick={handleEdit}
                type="common"
                size="x-small"
                className="py-[8px] px-[14px]"
              />

              <Button
                icon={<Trash2 size={25} />}
                onClick={handleDelete}
                type="danger"
                size="x-small"
                className="py-[8px] px-[14px]"
              />
            </div>
          </div>
        )}

        <div className="border-t border-[#eef0fb] pt-4">
          <p className="text-sm text-[#404060] leading-relaxed whitespace-pre-wrap">
            {memoData.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemoDetails;
