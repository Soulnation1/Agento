import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { createMemo } from "../Api";
import { ArrowRight } from "lucide-react";
import { showToast } from "../components/ShowToast";

const handleSubmit = async (title, content) => {
  try {
    const result = await createMemo({
      title,
      body: content,
      userId: 1,
    });
    showToast("Memo sent successfully", "success");
    console.log("Created:", result);
  } catch (err) {
    showToast("Failed to send memo", "error");
    console.log(err);
  }
};

const Compose = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const memo = location.state?.memo;
    if (memo) {
      setTitle(memo.title || "");
      setContent(memo.message || memo.body || "");
    }
  }, [location.state]);

  const memo = location.state?.memo;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-[#1a1a2e] font-bold text-2xl">
            {memo ? "Edit Memo" : "New Memo"}
          </h1>
          <p className="text-sm text-[#8080a0] mt-1">
            {memo
              ? "Update the memo contents before sending or saving."
              : "Compose and send a new memo to your team."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button
            className="w-full sm:w-auto"
            type="compose"
            size="md"
            title={
              <span className="font-semibold text-[16px] text-[#6c63ff]">
                Save Draft
              </span>
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
            onClick={() => handleSubmit(title, content)}
          />
        </div>
      </div>

      <div className="bg-[#ffffff] rounded-[28px] border border-[#eef0fb] p-6 shadow-sm">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-[#606080]">
              To — Recipients
            </label>
            <Input
              size="full"
              placeholder="Search users to add…"
              className="placeholder:text-[12px] bg-[#f9f9fd] py-3"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-[#606080]">
              Subject / Title
            </label>
            <Input
              size="full"
              className="bg-[#f9f9fd] py-3"
              placeholder="Memo subject"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-[#606080]">
              CONTENT
            </label>
            <textarea
              name=""
              id=""
              placeholder="Write your memo here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[220px] resize-none rounded-xl border border-[#e0e0ec] bg-[#f9f9fd] px-4 py-4 text-[14px] leading-relaxed text-[#404060]"
            ></textarea>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-[#60658c]">
              TAGS
              <span className="text-[#b7cce9] text-[12px] font-normal ml-2">
                (COMMA-SEPARATED)
              </span>
            </label>
            <Input
              size="full"
              className="bg-[#f9f9fd] py-3"
              placeholder="project, update, team"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="saveDraft"
              id="saveDraft"
              className="h-4 w-4 text-[#6c63ff] border-[#d1d5f9] rounded"
            />
            <label htmlFor="saveDraft" className="text-[13px] text-[#555570]">
              Save as draft (do not send yet)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compose;
