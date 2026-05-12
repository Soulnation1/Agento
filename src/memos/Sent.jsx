import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchMemos } from "../Api";
import { showToast } from "../components/ShowToast";

const Sent = () => {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const loadSent = async () => {
      try {
        const data = await fetchMemos();
        const formatted = data.slice(0, 10).map((memo) => ({
          id: memo.id,
          title: memo.title,
          message: memo.body,
          time: "Sent recently",
        }));
        setMemos(formatted);
      } catch (err) {
        showToast(err.message, "error");
      }
    };

    loadSent();
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
                  <Pencil
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
          <p className="text-sm text-[#8080a0] text-center">
            No sent memos yet.
          </p>
        ) : (
          memos.map((memo) => (
            <div key={memo.id} className="p-2 border-b last:border-b-0">
              <h3 className="font-semibold text-[#1a1a2e]">{memo.title}</h3>
              <p className="text-[#606080] text-sm truncate">{memo.message}</p>
              <span className="text-xs text-[#9090b0]">{memo.time}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sent;
