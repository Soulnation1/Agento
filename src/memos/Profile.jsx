import { useEffect, useState } from "react";
import { fetchMemos } from "../Api";
import { showToast } from "../components/ShowToast";
const Profile = () => {
  const [user] = useState({
    name: "User",
    username: "user",
    email: "user@example.com",
    id: "1",
    role: "Member",
    isVerified: true,
    bio: "Welcome to your profile page.",
  });
  const [counts] = useState({
    sent: 0,
    inbox: 0,
    drafts: 0,
  });

  const initials = (user.name || user.username || "U")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  useEffect(() => {
    const loadCounts = async () => {
      try {
        const data = await fetchMemos();
        console.log("Total memos:", data.length);
      } catch (err) {
        showToast(err.message, "error");
      }
    };

    loadCounts();
  }, []);

  const displayCounts = counts;

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-[#ffffff] p-8 shadow-sm border border-[#eef0fb]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#ece8ff] text-3xl font-bold text-[#6c63ff]">
              {initials}
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-[#1a1a2e]">
                {user.name || user.username || "User"}
              </h1>
              <p className="text-sm text-[#7a7aa0]">
                {user.email || "No email available"}
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-[#f3f0ff] px-4 py-3 text-sm font-semibold text-[#6c63ff]">
            Profile
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-[#fafaff] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9a8bdb]">
              Account ID
            </p>
            <p className="mt-2 text-sm font-medium text-[#1a1a2e]">
              {user._id || user.id || "-"}
            </p>
          </div>
          <div className="rounded-3xl bg-[#fafaff] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9a8bdb]">
              Joined
            </p>
            <p className="mt-2 text-sm font-medium text-[#1a1a2e]">
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "-"}
            </p>
          </div>
          <div className="rounded-3xl bg-[#fafaff] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9a8bdb]">
              Role
            </p>
            <p className="mt-2 text-sm font-medium text-[#1a1a2e]">
              {user.role || "Member"}
            </p>
          </div>
          <div className="rounded-3xl bg-[#fafaff] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9a8bdb]">
              Status
            </p>
            <p className="mt-2 text-sm font-medium text-[#1a1a2e]">
              {user.isVerified ? "Verified" : "Unverified"}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[32px] bg-[#ffffff] p-8 shadow-sm border border-[#eef0fb]">
        <h2 className="text-xl font-semibold text-[#1a1a2e]">Memo Stats</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-[#f3f0ff] p-4">
            <p className="text-xs text-[#9a8bdb]">Sent</p>
            <p className="mt-2 text-2xl font-bold text-[#6c63ff]">
              {displayCounts.sent}
            </p>
          </div>
          <div className="rounded-2xl bg-[#f3f0ff] p-4">
            <p className="text-xs text-[#9a8bdb]">Inbox</p>
            <p className="mt-2 text-2xl font-bold text-[#6c63ff]">
              {displayCounts.inbox}
            </p>
          </div>
          <div className="rounded-2xl bg-[#f3f0ff] p-4">
            <p className="text-xs text-[#9a8bdb]">Drafts</p>
            <p className="mt-2 text-2xl font-bold text-[#6c63ff]">
              {displayCounts.drafts}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
