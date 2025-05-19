import React from "react";
import "../src/styles/Dashboard.css";
import "../src/styles/Colors.css";
import Menu from "./components/Menu";
import RecentlyUsed from "./components/RecentlyUsed";
import RecentFiles from "./components/RecentFiles";
import SharedFiles from "./components/SharedFiles";
import Sidebar from "./components/Sidebar";

const Dashboard: React.FC = () => {
  type Files = {
    id: number;
    name: string;
    members: string;
    modified: string;
    color: string;
  };

  const files: Files[] = [
    {
      id: 1,
      name: "Travel Landing Page",
      members: "5 members",
      modified: "Mar 8, 2020",
      color: "var(--orange)",
    },
    {
      id: 2,
      name: "True Photos",
      members: "12 members",
      modified: "Mar 8, 2020",
      color: "var(--green)",
    },
    {
      id: 3,
      name: "Dashboard Structure",
      members: "10 members",
      modified: "Mar 9, 2020",
      color: "var(--red)",
    },
    {
      id: 4,
      name: "Character Illustration",
      members: "3 members",
      modified: "Mar 10, 2020",
      color: "var(--orange)",
    },
  ];

  return (
    <div className="dashboard-container">
      <Menu />
      <div className="white gap" />
      <main className="main-content">
        <input type="text" name="search" id="search" placeholder="Search" />
        <RecentlyUsed />
        <RecentFiles files={files} />
        <SharedFiles />
      </main>
      <div className="white gap" />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
