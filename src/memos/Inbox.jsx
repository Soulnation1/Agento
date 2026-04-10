import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pencil, Search } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";
import { getInboxMemos } from "../api";

const Inbox = () => {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const fetchInbox = async () => {
      try {
        const res = await getInboxMemos();

        let result = res.data?.data?.result || [];

        // Add temporary memo if inbox is empty
        if (result.length === 0) {
          result = [
            {
              _id: "temp-inbox-1",
              title: "Welcome to Memo Manager",
              content:
                "This is a temporary memo to demonstrate the Inbox functionality. You can view, read, and manage your incoming memos here.",
              createdAt: new Date(),
            },
          ];
        }

        const formatted = result.map((memo) => ({
          id: memo._id,
          sender: "Unknown",
          title: memo.title,
          message: memo.content,
          time: new Date(memo.createdAt).toLocaleString(),
          unread: false,
        }));

        setMemos(formatted);
      } catch (err) {
        console.error("Inbox fetch error:", err.response?.data || err.message);
      }
    };

    fetchInbox();
  }, []);

  const handleMemoClick = (id) => {
    setMemos((prev) =>
      prev.map((m) => (m.id === id ? { ...m, unread: false } : m)),
    );
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
              onClick={() => handleMemoClick(memo.id)}
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
