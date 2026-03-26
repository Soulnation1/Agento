import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
  return (
    <div className="flex w-100%">
      <div  className="flex min-h-screen bg-[#1a1a2e] w-1/5 " >
        <Sidebar/>
      </div>{" "}
      <div className="flex-1 p-6 bg-[#f7f8fc] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
