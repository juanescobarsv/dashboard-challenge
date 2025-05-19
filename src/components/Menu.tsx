import React, { useState } from "react";

const Menu = () => {
  const [activeItem, setActiveItem] = useState("home");

  return (
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
  );
};

export default Menu;
