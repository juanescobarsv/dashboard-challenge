import React, { useState } from "react";
import "../src/styles/Dashboard.css";
import "../src/styles/Colors.css";

const Dashboard: React.FC = () => {
  const [activeItem, setActiveItem] = useState("home");

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
      <aside className="sidebar">
        <div className="logo gradient"></div>
        <nav className="sidebar-menu ">
          <div
            className={`sidebar-item ${activeItem === "home" ? "active" : ""}`}
            onClick={() => setActiveItem("home")}
          >
            <span className="rectangle1" />
            <p>Home</p>
          </div>
          <div
            className={`sidebar-item ${
              activeItem === "my-files" ? "active" : ""
            }`}
            onClick={() => setActiveItem("my-files")}
          >
            <span className="rectangle1" />
            <p>My Files</p>
          </div>
          <div
            className={`sidebar-item ${
              activeItem === "recent-files" ? "active" : ""
            }`}
            onClick={() => setActiveItem("recent-files")}
          >
            <span className="rectangle1" />
            <p>Recent Files</p>
          </div>
          <div
            className={`sidebar-item ${
              activeItem === "shared-files" ? "active" : ""
            }`}
            onClick={() => setActiveItem("shared-files")}
          >
            <span className="rectangle1" />
            <p>Shared Filed</p>
          </div>
          <div
            className={`sidebar-item ${
              activeItem === "files-request" ? "active" : ""
            }`}
            onClick={() => setActiveItem("files-request")}
          >
            <span className="rectangle1" />
            <p>File Request</p>
          </div>
          <div
            className={`sidebar-item ${activeItem === "trash" ? "active" : ""}`}
            onClick={() => setActiveItem("trash")}
          >
            <span className="rectangle1" />
            <p>Trash</p>
          </div>
        </nav>
        <div className="sidebar-divider"></div>

        <div className="create-new">
          <div className="create-new-list">
            <div>
              <span className="rectangle2" />
              <p>Upload files</p>
            </div>
            <div>
              <span className="rectangle2" />
              <p>Upload folder</p>
            </div>
            <div>
              <span className="rectangle2" />
              <p>New folder</p>
            </div>
            <div>
              <span className="rectangle2" />
              <p> More</p>
            </div>
          </div>
          <button>
            Create New <span className="plus">+</span>
          </button>
        </div>
      </aside>

      <div className="white gap" />

      <main className="main-content">
        <input type="text" name="search" id="search" placeholder="Search" />

        <section className="recently-used">
          <div className="inline-header">
            <h2>Recently Used</h2>
            <div>
              <span className="rectangle-top1" />
              <span className="rectangle-top2" />
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-icon"></div>
              <div className="card-title">App Project</div>
              <div className="card-date">Created: 20.02.2020</div>
            </div>
            <div className="card">
              <div className="card-icon"></div>
              <div className="card-title">Project: fitbit</div>
              <div className="card-date">Created: 28.02.2020</div>
            </div>
            <div className="card">
              <div className="card-icon"></div>
              <div className="card-title">Client Documents</div>
              <div className="card-date">Created: 4.03.2020</div>
            </div>
          </div>
        </section>

        <section className="recent-files">
          <div className="inline-header">
            <h2>Recent Files</h2>
            <span className="view-all">View all</span>
          </div>

          <div className="files-table">
            <div className="files-header">
              <span>Name</span>
              <span>Members</span>
              <span>Last Modified</span>
              <span>{""}</span>
            </div>

            {files.map((file) => (
              <div className="files-row" key={file.id}>
                <div className="files-name">
                  <span
                    className="files-icon"
                    style={{ backgroundColor: file.color }}
                  />
                  {file.name}
                </div>
                <span>{file.members}</span>
                <span>{file.modified}</span>
                <span className="see-more">...</span>
              </div>
            ))}
          </div>
        </section>

        <section className="shared-files">
          <div className="inline-header">
            <h2>Share with me</h2>
            <span className="view-all">View all</span>
          </div>
          <div className="cards2">
            <div className="card2">
              <div className="card-icon2"></div>
              <div className="card-title">Landing Page</div>
              <div className="card-date2">Created: 20.02.2020</div>
            </div>
            <div className="card2">
              <div className="card-icon2"></div>
              <div className="card-title">Illustration Pack</div>
              <div className="card-date2">Created: 20.02.2020</div>
            </div>
            <div className="card2">
              <div className="card-icon2"></div>
              <div className="card-title">CV Design</div>
              <div className="card-date2">Created: 20.02.2020</div>
            </div>
          </div>
        </section>
      </main>

      <div className="white gap" />

      <aside className="right-sidebar">
        <div className="user">
          <div>Name</div>
        </div>
        <div className="storage">
          <h2>Storage</h2>
          <div className="circle">85%</div>
          <p>420.2 GB of 500 GB used</p>
          <div className="storage-breakdown custom-list">
            <div>
              <span className="dot orange"></span> Documents - 200 GB
            </div>
            <div>
              <span className="dot blue"></span> Documents - 125 GB
            </div>
            <div>
              <span className="dot green"></span> Documents - 75 GB
            </div>
            <div>
              <span className="dot gray"></span> Documents - 50 GB
            </div>
          </div>
        </div>
        <div className="upgrade-box">
          <div className="upgrade-box gradient"></div>
          <p>
            Buy more space now!
            <br />
            <strong>Upgrade to cloud premium</strong>
          </p>
          <button>Upgrade Account!</button>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
