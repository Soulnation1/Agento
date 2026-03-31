import { useParams } from "react-router-dom";

const MemoDetails = () => {
  const { id } = useParams();

  const memo = {
    id,
    sender: "Bob Smith",
    title: "Q4 Budget Review — Action Required",
    message:
      "Please review the attached figures and respond by Friday with your department's allocation request.",
    time: "2 mins ago",
  };

  return (
    <div className="bg-white rounded-md p-6 flex flex-col gap-4">
      <p className="text-sm text-[#7a7aa0]">{memo.sender}</p>

      <h1 className="text-lg font-semibold text-[#1a1a2e]">{memo.title}</h1>

      <span className="text-xs text-[#9090b0]">{memo.time}</span>

      <p className="text-sm text-[#404060] leading-relaxed">{memo.message}</p>
    </div>
  );
};

export default MemoDetails;
