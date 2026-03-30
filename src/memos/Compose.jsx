import Button from "../components/Button";
import { ArrowRight } from "lucide-react";
import Input from "../components/Input";

const Compose = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row  justify-between  gap-4">
        <div className="flex justify-center items-center">
          <h1 className="text-[#1a1a2e]   font-bold text-2xl">New Memo</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Button
            className="w-full sm:w-auto"
            type="compose"
            size="md"
            title={
              <>
                <p className="font-semibold text-[16px] text-[#6c63ff]">
                  save Drafts
                </p>
              </>
            }
          />

          <Button
            className="w-full sm:w-auto"
            type="common"
            size="md"
            title={
              <>
              <span className="text-[13px] px-3">Send</span>
              <ArrowRight className="inline-block mr-1" size={15} />
              </>
            }
          />
        </div>
      </div>

      <div className="flex flex-col bg-[#ffffff] rounded-md p-4">
        <div>
          <label htmlFor="" className="text-sm font-semibold text-[#606080] ">
            To — Recipients
          </label>
          <Input
            size={"full"}
            placeholder="Search users to add…
"
            className="placeholder:text-[12px] bg-[#f9f9fd] py-[8px] mb-10 "
          />
        </div>
        <div>
          <label htmlFor="" className="text-sm font-semibold text-[#606080] ">
            Subject / Title
          </label>
          <Input size={"full"} className=" bg-[#f9f9fd] py-[6px] mb-5 " />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm font-semibold text-[#606080] ">
            CONTENT
          </label>
          <textarea
            name=""
            id=""
            className="bg-[#f9f9fd] py-[6px] mb-5  border-[1px] rounded-md border-[#e0e0ec] px-3 text-[13px]  "
          ></textarea>
        </div>
        <div>
          <label htmlFor="" className="text-sm font-semibold text-[#60658c] ">
            TAGS{" "}
            <span className="text-[#b7cce9] text-[12px] font-normal ">
              (COMMA-SEPERATED)
            </span>
          </label>
          <Input size={"full"} className=" bg-[#f9f9fd] py-[6px] mb-3 " />
        </div>
        <div className="flex flex-row">
          <input type="checkbox" name="" id="" className="mr-2" />
          <p className="text-[13px] text-[#555570]">
            Save as drafts (do not send yet)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Compose;
