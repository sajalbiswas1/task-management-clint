import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import DashboardNav from "./DashboardNav/DashboardNav";

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 max-w-7xl m-auto">
            <DashboardNav></DashboardNav>
            <Outlet></Outlet>
            </div>
            
            
        </div>
    );
};

export default Dashboard;