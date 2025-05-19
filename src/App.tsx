import React from "react";
import "../src/styles/Dashboard.css";
import "../src/styles/Colors.css";
import Menu from "./components/Menu";
import RecentlyUsed from "./components/RecentlyUsed";
import RecentFiles from "./components/RecentFiles";
import SharedFiles from "./components/SharedFiles";
import type { SharedFileMemberColor } from "./components/SharedFiles"; // Import the type
import Sidebar from "./components/Sidebar";

const Dashboard: React.FC = () => {
  type RecentlyUsedItem = {
    title: string;
    date: string;
    memberCount?: number;
  };

  const recentlyUsedData: RecentlyUsedItem[] = [
    { title: "App Project", date: "Created: 20.02.2020", memberCount: 2 },
    { title: "Project: fitbit", date: "Created: 28.02.2020", memberCount: 2 },
    { title: "Client Documents", date: "Created: 4.03.2020", memberCount: 4 },
  ];

  type RecentUploads = {
    id: number;
    name: string;
    members: string;
    modified: string;
    color: string;
  };

  const recentFilesData: RecentUploads[] = [
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

  type SharedFileItem = {
    title: string;
    date: string;
    memberColor: SharedFileMemberColor[];
  };

  const sharedFilesData: SharedFileItem[] = [
    {
      title: "Landing Page",
      date: "Created: 20.02.2020",
      memberColor: ["var(--green)", "var(--red)"],
    },
    {
      title: "Illustration Pack",
      date: "Created: 20.02.2020",
      memberColor: ["var(--green)", "var(--red)", "var(--orange)"],
    },
    {
      title: "CV Design",
      date: "Created: 20.02.2020",
      memberColor: ["var(--green)", "var(--red)", "var(--orange)"],
    },
  ];

  return (
    <div className="dashboard-container">
      <Menu />
      <div className="white gap" />
      <main className="main-content">
        <input type="text" name="search" id="search" placeholder="Search" />
        <RecentlyUsed recentlyUsedData={recentlyUsedData} />
        <RecentFiles recentUploadsData={recentFilesData} />
        <SharedFiles sharedFilesData={sharedFilesData} />
      </main>
      <div className="white gap" />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
