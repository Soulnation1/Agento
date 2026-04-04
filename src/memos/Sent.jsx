import { Link } from "react-router-dom";
import Button from "../components/Button";
import { PencilLine } from "lucide-react";
import { useEffect, useState } from "react";
import { getSentMemos } from "../api";

const Sent = () => {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const fetchSent = async () => {
      try {
        const res = await getSentMemos();

        const result = res.data?.data?.result || [];

        const formatted = result.map((memo) => ({
          id: memo._id,
          title: memo.title,
          message: memo.content,
          time: new Date(memo.createdAt).toLocaleString(),
        }));

        setMemos(formatted);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    };

    fetchSent();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[#1a1a2e] font-bold ">Sent</h1>
          <p className="text-sm text-[#8080a0]">{memos.length} memos sent</p>
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
                  <span className="text-[#9263ff] text-[13px] ">Compose</span>
                </>
              }
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-[#ffffff] rounded-md p-4">
        {memos.length === 0 ? (
          <p className="text-sm text-[#8080a0] text-center">No sent memos yet.</p>
        ) : (
          memos.map((memo) => (
            <Link
              to={`/dashboard/sent/${memo.id}`}
              state={{ memo }}
              key={memo.id}
              className="block p-3 border-b last:border-b-0 hover:bg-[#f7f8ff] transition"
            >
              <h3 className="font-semibold text-[#1a1a2e]">{memo.title}</h3>
              <p className="text-[#606080] text-sm truncate">{memo.message}</p>
              <span className="text-xs text-[#9090b0]">{memo.time}</span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Sent;