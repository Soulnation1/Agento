import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Check,
  ExternalLink,
  Inbox,
  LogOut,
  PencilLine,
  Save,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { getInboxMemos, getSentMemos, getDraftMemos } from "../api";
import Input from "../components/Input";

const Profile = () => {
  const { user: authUser, isLoading, signOut } = useAuth();
  const navigate = useNavigate();

  const [sentCount, setSentCount] = useState(0);
  const [receivedCount, setReceivedCount] = useState(0);
  const [draftCount, setDraftCount] = useState(0);

  const getMemoCount = (res) => {
    const result = res?.data?.data?.result || [];
    return result.length > 0 ? result.length : 1;
  };

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const sent = await getSentMemos();
        setSentCount(getMemoCount(sent));
        const received = await getInboxMemos();
        setReceivedCount(getMemoCount(received));
        const drafts = await getDraftMemos();
        setDraftCount(getMemoCount(drafts));
      } catch (error) {
        console.error("Error fetching memo counts:", error);
      }
    };
    fetchCounts();
  }, []);

  const user =
    authUser && (authUser.name || authUser.email)
      ? authUser
      : {
          name: "TEMIDIRE JOHNSON",
          email: "alex.johnson@example.com",

          role: "Premium Member",
          status: "verified",
          Joined: new Date("2024-01-15"),
        };

  if (isLoading) {
    return (
      <div className="rounded-xl bg-[#ffffff] p-8 shadow-sm">
        <p className="text-[#8080a0]">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="rounded-xl bg-[#ffffff] p-8 shadow-sm">
        <p className="text-[#8080a0]">No profile information available.</p>
      </div>
    );
  }

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase()
    : user?.email?.charAt(0)?.toUpperCase() || "U";

  const handleSaveChanges = () => {
    alert("Changes saved successfully!");
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/signin");
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[12px] bg-[#ffffff] text-center md:text-left p-8 shadow-sm border border-[#eef0fb]">
        <div className="flex flex-col  sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col md:flex-row items-center md:gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#ece8ff] text-3xl font-bold text-[#6c63ff]">
              {initials}
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-[#1a1a2e]">
                {user.name || user.username || "User"}
              </h1>
              <p className="md:text-sm text-md text-[#7a7aa0]">
                {user.email || "No email available"}
              </p>
              <p className="md:text-sm text-md text-[#7a7aa0] mx-auto md:mx-0 rounded-2xl max-w-max px-2 justify-center items-center  bg-[#e8f5e9]">
                <Check
                  className="inline my-1 rounded-full bg-green-500 text-white"
                  size={14}
                />
                {user.status}
              </p>
            </div>
          </div>
          <div className="rounded-3xl flex flex-col justify center items-center md:justify-end  md:items-end px-4 py-3 text-sm font-semibold text-[#6c63ff]">
            <p className="font-bold md:text-[10px] text-[14px] text-[#9090b0]">
              Role
            </p>
            <p className="mb-2 md:text-[10px] text-[14px] ">{user.role}</p>
            <p className="font-bold md:text-[10px] text-[14px] text-[#9090b0]">
              member since
            </p>
            <p className="text-[#555570] md:text-[10px] text-[14px]">
              {user.Joined ? user.Joined.toLocaleDateString() : "-"}
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1  gap-6">
        <div className="flex flex-col md:justify-between p-10 justify-center  md:gap-0  bg-white p-4 rounded-lg shadow-sm border border-[#eef0fb]">
          <h3 className="text-md font-medium justify-between pb-4 pt-2 flex text-[#1a1a2e]">Received Memos 
                      <Inbox className="inline text-[#c4dff5]  " size={35} />

          </h3>

          <p className="text-4xl  font-bold text-black">{receivedCount}</p>
        </div>
       <div className="flex flex-col md:justify-between p-10 justify-center  md:gap-0  bg-white p-4 rounded-lg shadow-sm border border-[#eef0fb]">
          <h3 className="text-md font-medium justify-between pb-4 pt-2 flex text-[#1a1a2e]">Sent Memos 
                      <ExternalLink className="inline text-[#c4dff5]  " size={35} />

          </h3>

          <p className="text-4xl  font-bold text-black">{sentCount}</p>
        </div>
        <div className="flex flex-col md:justify-between p-10 justify-center  md:gap-0  bg-white p-4 rounded-lg shadow-sm border border-[#eef0fb]">
          <h3 className="text-md font-medium justify-between pb-4 pt-2 flex text-[#1a1a2e]">Drafts 
                      <PencilLine className="inline text-[#c4dff5]  " size={35} />

          </h3>

          <p className="text-4xl  font-bold text-black">{draftCount}</p>
        </div>
      </div>

      <div className="rounded-[12px] bg-[#ffffff] w-full p-8 shadow-sm border border-[#eef0fb]">
        <h2 className="text-[18px] font-bold text-[#1a1a2e]">
          Edit profile
        </h2>
        <div className="mt-2 mb-4">
          <p className="text-[12px] font-medium text-[#756090]">FULL NAME</p>
          <Input size={"full"} className={"py-0.5"} />
        </div>
        <p className="text-[12px] font-medium text-[#756090] ">EMAIL ADDRESS</p>
        <Input className={"py-0.5 mb-2"} size={"full"} />

        <button
          onClick={handleSaveChanges}
          className="flex  gap-2 rounded-lg justify-center items-center bg-[#6c63ff] px-6 py-3 w-full md:max-w-max text-sm mt-4  font-semibold text-white hover:bg-[#5a52d5] transition-colors shadow-sm  "
        >
          <Save size={18} />
          Save Changes
        </button>
      </div>

      <div className="flex flex-col  gap-4">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 rounded-lg justify-center items-center bg-[#ff6b6b] md:ml-8 mx-8  md:max-w-max  px-10 py-3 text-sm font-semibold text-white hover:bg-[#ee5a52] transition-colors shadow-sm"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
