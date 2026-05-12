import { useSearchParams } from "react-router-dom";

const Tabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") || "profile";

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <div className="text-center ">
      <h1 className=" font-bold mb-4 underline">Assignment 2</h1>
      <div className="flex gap-3 justify-center mb-4">
        <button
      className="bg-blue-500 rounded-md p-2  hover:bg-green-200"
      onClick={() => handleTabChange("profile")}>
        Profile
      </button>
      <button 
            className="bg-green-500 rounded-md p-2  hover:bg-blue-200"

      onClick={() => handleTabChange("settings")}>
        Settings
      </button>
      </div>

      {activeTab === "profile" &&
       <div>
        <h1 className=" font-bold">Profile Content</h1>
        <p>this is the profile Tab</p>
        </div>}
      {activeTab === "settings" && 
      <div>
        <h1 className=" font-bold">Settings Content</h1>
        <p>this is the settings Tab</p>
      </div>}
    </div>
  );
};
export default Tabs;