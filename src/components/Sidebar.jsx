import { ExternalLink, Inbox, NotebookPen, PencilLine } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex  flex-col  max-w-full ">
      <div className="flex items-center ml-8 border-b border-[#2a2a3d] py-6 w-64 ">
        <NotebookPen className="text-[#c7a787] mr-2" size={36} />
        <h1 className="text-[#6f2984] font-bold">
          Memo<span className="text-[#a78bfa]">App</span>
        </h1>
      </div>
      <div className="border-b border-[#2a2a3d]  pb-10 mb-4 ">
        <ul className="">
          <div className="flex items-center hover:bg-purple-900/20 py-2  ">
            <Inbox className="text-[#3a96dd] ml-10 mr-3 " size={16} />
            <li>
              <Link to="/dashboard/inbox" className=" text-[#9a8bdb] text-sm  ">
                Inbox
              </Link>
            </li>
          </div>
          <div className="flex items-center hover:bg-purple-900/20 py-2  ">
            <ExternalLink className="text-[#b3dbf2] ml-10 mr-3 " size={16} />
            <li>
              <Link to="/dashboard/sent" className=" text-[#9a8bdb] text-sm  ">
                Sent
              </Link>
            </li>
          </div>
          <div className="flex items-center hover:bg-purple-900/20 py-2  ">
            <NotebookPen className="text-[#ffffff] ml-10 mr-3 " size={16} />
            <li>
              <Link
                to="/dashboard/drafts"
                className=" text-[#9a8bdb] text-sm  "
              >
                Drafts
              </Link>
            </li>
          </div>
          <div className="flex items-center hover:bg-purple-900/20 py-2  ">
            <PencilLine className="text-[#ffb900] ml-10 mr-3 " size={16} />
            <li>
              <Link
                to="/dashboard/compose"
                className=" text-[#9a8bdb] text-sm  "
              >
                Compose
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <div>
        <li>
          <Link to="/dashboard/profile" className=" text-[#9a8bdb]  ">
            <div className="flex gap-1 mt-[230px] ">
              <div className="flex justify-center ml-8 items-center  ">
                <h1 className=" p-4 bg-[#8f7bfc] text-[#ffffff]   rounded-full font-bold  ">
                  JD
                </h1>
              </div>
              <div className="flex flex-col px-2   justify-center">
                <h3 className=" font-semibold text-sm ">John Doe</h3>
                <h6 className="text-[10px] ">john.doe@example.com</h6>
              </div>
            </div>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
