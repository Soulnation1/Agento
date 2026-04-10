import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row bg-[#1a1a2e] overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-full md:w-[250px] md:h-full bg-[#1a1a2e] flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 h-full overflow-y-auto bg-[#f7f8fc] px-4 py-6 md:px-10 md:py-8">
        <Outlet />
      </div>

    </div>
  );
};

export default Dashboard;