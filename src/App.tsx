import React, { useState } from "react";
import "../src/styles/Dashboard.css";
import "../src/styles/Colors.css";

const Dashboard: React.FC = () => {
  const [activeItem, setActiveItem] = useState("home");

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

      <main className="main-content">
        <input type="text" name="search" id="search" placeholder="Search" />
        <section className="recently-used">
          <h2>Recently Used</h2>
          <div className="cards">
            <div className="card">
              <div className="card-icon orange"></div>
              <div className="card-title">App Project</div>
              <div className="card-date">Created: 20.02.2020</div>
            </div>
            <div className="card">
              <div className="card-icon orange"></div>
              <div className="card-title">Project: fitbit</div>
              <div className="card-date">Created: 28.02.2020</div>
            </div>
            <div className="card">
              <div className="card-icon orange"></div>
              <div className="card-title">Client Documents</div>
              <div className="card-date">Created: 4.03.2020</div>
            </div>
          </div>
        </section>

        <section className="recent-files">
          <h2>Recent Files</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Members</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="dot orange"></span>Travel Landing Page
                </td>
                <td>5 members</td>
                <td>Mar 8, 2020</td>
              </tr>
              <tr>
                <td>
                  <span className="dot green"></span>True Photos
                </td>
                <td>12 members</td>
                <td>Mar 8, 2020</td>
              </tr>
              <tr>
                <td>
                  <span className="dot red"></span>Dashboard Structure
                </td>
                <td>10 members</td>
                <td>Mar 9, 2020</td>
              </tr>
              <tr>
                <td>
                  <span className="dot orange"></span>Character Illustration
                </td>
                <td>3 members</td>
                <td>Mar 10, 2020</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="shared-files">
          <h2>Share with me</h2>
          <div className="cards">
            <div className="card">
              <div className="card-icon orange"></div>
              <div className="card-title">Landing Page</div>
              <div className="card-date">Created: 20.02.2020</div>
            </div>
            <div className="card">
              <div className="card-icon orange"></div>
              <div className="card-title">Illustration Pack</div>
              <div className="card-date">Created: 20.02.2020</div>
            </div>
            <div className="card">
              <div className="card-icon orange"></div>
              <div className="card-title">CV Design</div>
              <div className="card-date">Created: 20.02.2020</div>
            </div>
          </div>
        </section>
      </main>

      <aside className="right-sidebar">
        <div className="user">
          <div>Name</div>
        </div>
        <div className="storage">
          <h3>Storage</h3>
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
