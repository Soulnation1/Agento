import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#1a1a2e]">
      <div className="w-full md:w-auto">
        <Sidebar />
      </div>
      <div className="flex-1 bg-[#f7f8fc] px-4 py-6 md:px-10 md:py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
