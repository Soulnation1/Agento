import { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../contexts/AuthContext";
import { getInboxMemos, getSentMemos, getDraftMemos } from "../api";
import { ExternalLink, Inbox, LogOut, Pencil, SquareCheck } from "lucide-react";

const Profile = () => {
  const { user, isLoading, signOut } = useAuth();
  const [profile, setProfile] = useState({
    name: "Shevatar Jimoh",
    email: "shevatar.jimoh@gmail.com",
    phone: "+2349082534677",
    role: "Team Lead",
    status: "Verified",
    bio: "Always learning and improving memo workflows on a daily basis.",
    address: "Bola Ashiru street, Lagos, Nigeria",
    memosReceived: 0,
    memosSent: 0,
    draft: 0,
    joinedDate: "2023-01-01",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setProfile((prev) => ({
      ...prev,
      name: user?.name || prev.name,
      email: user?.email || prev.email,
      role: user?.role || prev.role,
      status: user?.isVerified ? "Verified" : prev.status,
    }));
  }, [user]);

  useEffect(() => {
    const loadCounts = async () => {
      try {
        const [inboxRes, sentRes, draftsRes] = await Promise.all([
          getInboxMemos(),
          getSentMemos(),
          getDraftMemos(),
        ]);
        const inboxCount = inboxRes.data?.data?.result?.length || 0;
        const sentCount = sentRes.data?.data?.result?.length || 0;
        const draftsCount = draftsRes.data?.data?.result?.length || 0;
        setProfile((prev) => ({
          ...prev,
          memosReceived: inboxCount,
          memosSent: sentCount,
          draft: draftsCount,
        }));
      } catch (err) {
        console.error(
          "Profile counts error:",
          err.response?.data || err.message,
        );
      }
    };

    loadCounts();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  if (isLoading) {
    return (
      <div className="rounded-xl bg-[#ffffff] p-8 shadow-sm">
        <p className="text-[#8080a0]">Loading profile...</p>
      </div>
    );
  }

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="space-y-6">
     <div>
      <p className="text-2xl font-semibold">My Profile</p>
      </div>
      <div className="rounded-[10px] flex flex-col md:flex-row justify-between bg-[#ffffff] p-8 shadow-sm border border-[#eef0fb]">
        <div className="flex flex-col  gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#907bfc] text-3xl font-bold text-white">
              {initials}
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-[#1a1a2e]">
                {profile.name}
              </h1>
              <p className="text-sm text-[#7a7aa0]">{profile.email}</p>

              <p className="mt-2 text-sm font-medium md:mr-[100px] px-2 text-center text-[#2e7d32] bg-[#e8f5e9] rounded-[16px]">
                <SquareCheck className="text-[#16c60c] inline pr-1" />
                {profile.status}
              </p>
            </div>
          </div>
        </div>
        <div className="flex  flex-col justify-center items-center md:justify-end mt-4 md:items-end">
          <p className="text-[#7a7aa0] text-[20px] md:text-[12px] ">Role</p>
          <p className="text-[#6c63ff] font-bold text-lg md:text-sm mb-2 ">
            {profile.role}
          </p>
          <p className="text-[#7a7aa0] text-[20px] md:text-[12px]">Member since</p>
          <p className="text-[#555570] text-[20px] md:text-[13px]">{profile.joinedDate}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-[10px] flex justify-between bg-white p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#9090b0]">
              Memos received
            </p>
            <p className="mt-2 text-3xl  font-bold text-[#1a1a2e]">
              {profile.memosReceived}
            </p>
          </div>
          <Inbox className="text-[#c4dff5]" size={30} />
        </div>

        <div className="rounded-[10px] flex justify-between bg-white p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#9090b0]">
              Memos sent
            </p>
            <p className="mt-2 text-3xl  font-bold text-[#1a1a2e]">
              {profile.memosSent}
            </p>
          </div>

          <ExternalLink className="text-[#c4dff5]" size={30} />
        </div>
        <div className="rounded-[10px] flex justify-between bg-white p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#9090b0]">
              drafts
            </p>
            <p className="mt-2 text-3xl  font-bold text-[#1a1a2e]">
              {profile.draft}
            </p>
          </div>
          <Pencil className="text-[#c4dff5]" size={30} />{" "}
        </div>
      </div>

      <form onSubmit={handleSave}>
        <div className=" rounded-[10px] bg-[#ffffff] p-4 shadow-sm border border-[#eef0fb]">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Edit Profile</p>
            <Input
              label="Full Name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              size="lg"
            />
            <Input
              label="Email Address"
              name="email"
              value={profile.email}
              onChange={handleChange}
              size="lg"
            />
            <Button
              htmlType="submit"
              type="common"
              size="md"
              title="Save Changes"
              className={"w-full md:w-auto"}
            />
          </div>

          {saved && (
            <p className="mt-4 text-sm text-[#2b7a0b]">
              Profile changes saved locally.
            </p>
          )}
        </div>
        <div className="mt-2 bg-red-100 py-2 px-4 border border-red-200 rounded-md">
          <Button
            htmlType="button"
            type="danger"
            size="md"
            onClick={signOut}
            title={
              <>
                <LogOut className="inline mr-2" size={18} />
                Sign Out
              </>
            }
            className={
              "text-lg font-semibold px-[40px] w-full md:w-auto rounded-xl border border-red-300 hover:bg-red-200 "
            }
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
