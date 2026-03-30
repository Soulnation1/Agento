import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import { Pencil, Search } from "lucide-react";
import Input from "../components/Input";

const Inbox = () => {
  const [memos, setMemos] = useState([

      {
      id: 1,
      sender: "steven Job",
      title: "Project Update",
      message: "The new dashboard UI has been completed...",
      time: "2 mins ago",
      unread: true,
    },
    {
      id: 2,
      sender: "john Doe",
      title: "Meeting Reminder",
      message: "Don't forget the team meeting at 3PM...",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      sender: "jane Smith",
      title: "Welcome 🎉",
      message: "Thanks for signing up to MemoApp...",
      time: "Yesterday",
      unread: true,
    },

   
    {
      id: 4,
      sender: "john kennedy",
      title: "Meeting Reminder",
      message: "Don't forget the drink when coming...",
      time: "2 hour ago",
      unread: false,
    },
    {
      id: 5,
      sender: "john kennedy",
      title: "Meeting Reminder",
      message: "Don't forget the drink when coming...",
      time: "2 hour ago",
      unread: false,
    },
 
  ]);

  const handleMemoClick = (id) => {
  setMemos((prev) =>
    prev.map((memo) =>
      memo.id === id ? { ...memo, unread: false } : memo
    )
  );
};

  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[#1a1a2e] font-bold ">Inbox</h1>
          <p className="text-sm text-[#8080a0]">3 unread.14 Total</p>
        </div>

        <div>
          <Link to="/compose">
            <Button
              type="compose"
              size="x-small"
              className={"bg-[#f0f0fc] border border-[#ddddf8] text-lg font-bold py-[6px]"}
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

      <div>
        <Input
          size={"full"}
          placeholder="Search memos..."
          leftIcon={Search}
          className="placeholder:text-[12px]"
        />
      </div>

      <div className="flex flex-col bg-[#ffffff] rounded-md p-2 divide-y">
        {memos.map((memo) => (
          <Link
           to={`/dashboard/inbox/${memo.id}`}
            key={memo.id}
             onClick={() => handleMemoClick(memo.id)}
            className={`flex justify-between items-start p-3  cursor-pointer transition ${
              memo.unread ? "bg-[#f7f8ff]" : "bg-white text-[#606080] text-[10px]"
            } hover:bg-[#f1f2ff]`}
          >
            <div className="flex flex-col ">
              <span
                className={`text-sm ${
                  memo.unread
                    ? "font-bold text-[#1a1a2e] text-[15px]"
                    :"font-medium text-[#8080a0] text-[13px]"
                }`}
              >
                {memo.sender}
              </span>
              <h3
                className={`text-sm ${
                  memo.unread
                    ? "font-semibold text-[#1a1a2e]"
                    :"font-normal text-[#9090b0]"
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
              {memo.unread ? (
                <span className="w-2 h-2 bg-[#7f63ff] rounded-full"></span>
              ) : (
                <span className="w-2 h-2 bg-white border border-[#cccccc] rounded-full"></span>
              )}

              <span className="text-[11px] text-[#9090b0]">{memo.time}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
