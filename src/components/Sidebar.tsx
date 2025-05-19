import React from "react";

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
