import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Pencil, PencilLine } from "lucide-react";
import { getDraftMemos } from "../api"; 

const Drafts = () => {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        const res = await getDraftMemos();
        const result = res.data?.data?.result || [];

        const formatted = result.map((draft) => ({
          id: draft._id,
          title: draft.title,
          message: draft.content,
          time: new Date(draft.updatedAt || draft.createdAt).toLocaleString(),
        }));

        setDrafts(formatted);
      } catch (err) {
        console.error("Drafts fetch error:", err.response?.data || err.message);
      }
    };

    fetchDrafts();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[#1a1a2e] font-bold ">Drafts</h1>
          <p className="text-sm text-[#8080a0]">
            {drafts.length} unsent draft{drafts.length <= 1 ? "" : "s"}
          </p>
        </div>
        <div>
          <Link to="/dashboard/compose">
            <Button
              type="common"
              size="x-small"
              className={"bg-[#f0f0fc] border border-[#ddddf8] py-[6px]"}
              title={
                <>
                  <PencilLine
                    className="inline-block text-[#f3b000] mr-1"
                    size={15}
                  />
                  <span className="text-[#9263ff] text-[13px] ">New Draft</span>
                </>
              }
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-[#ffffff] rounded-md p-4">
        {drafts.length === 0 ? (
          <p className="text-sm text-[#8080a0] text-center">
            No drafts available.
          </p>
        ) : (
          drafts.map((draft) => (
            <Link
              to={`/dashboard/drafts/${draft.id}`}
              state={{ memo: draft }}
              key={draft.id}
              className="block p-3 border-b last:border-b-0 hover:bg-[#f7f8ff] transition"
            >
              <h3 className="font-semibold text-[#1a1a2e]">{draft.title}</h3>
              <p className="text-[#606080] text-sm truncate">{draft.message}</p>
              <span className="text-xs text-[#9090b0]">{draft.time}</span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Drafts;