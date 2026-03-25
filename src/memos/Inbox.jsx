import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Pencil, Search } from "lucide-react";
import Input from "../components/Input";

const Inbox = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[#1a1a2e] font-bold ">Inbox</h1>
          <p className="text-sm text-[#8080a0]">3 unread.14 Total</p>
        </div>
        <div>
          <Link to="/compose">
            <Button
              types="common"
              size="x-small"
              className={"bg-[#f0f0fc] border border-[#ddddf8] py-[6px]  "}
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
      <div className="flex flex-col bg-[#ffffff] rounded-md p-4"></div>
    </div>
  );
};

export default Inbox;
