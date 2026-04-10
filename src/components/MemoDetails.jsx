import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, Edit2, Trash2 } from "lucide-react";
import Button from "../components/Button";

const MemoDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const memoData = location.state?.memo ||
    location.state?.draft || {
      id,
      sender: "Unknown",
      recipient: "All",
      title: "Q4 Budget Review — Action Required",
      message:
        "Please review the attached figures and respond by Friday with your department's allocation request.",
      time: "2 mins ago",
      date: "April 7, 2026",
    };

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

  const handleEdit = () => {
    navigate(`/dashboard/compose`, {
      state: { draft: memoData, memo: memoData },
    });
  };

  const handleDelete = () => {
    navigate(`/dashboard/${currentCategory}`);
  };

  const handleNavigate = (category) => {
    navigate(`/dashboard/${category}`);
  };

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
               <div className="flex mt-2">
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
                title="Edit"
                icon={<Edit2 size={16} />}
                onClick={handleEdit}
                type="common"
                size="x-small"
                                className="py-[8px] px-[20px]"

              />

              <Button
                title="Delete"
                icon={<Trash2 size={16} />}
                onClick={handleDelete}
                type="danger"
                size="x-small"
                className="py-[8px]  px-[14px]"
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
