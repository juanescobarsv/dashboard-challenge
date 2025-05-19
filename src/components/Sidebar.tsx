import CircleIcon from "./circle";
import StorageProgress from "./storageProgress";

const Sidebar = () => {
  return (
    <aside className="right-sidebar">
      <div className="user">
        <div className="inline-squares">
          <span style={{ marginRight: "13px", display: "inline-block" }}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="100" fill="var(--gray-light)" />
            </svg>
          </span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100" height="100" fill="var(--gray-light)" />
          </svg>
        </div>
        <div className="name-box">
          <p className="name">Name</p>
          <CircleIcon
            fillColor="var(--gray-light)"
            strokeColor="none"
            radius={16}
          />
        </div>
      </div>

      <StorageProgress />

      <div className="space-box">
        <div className="logo-box gradient" />
        <p className="space-main">Buy more space now!</p>
        <p className="space-side">Upgrade to cloud premium</p>
        <button>Upgrade Account!</button>
      </div>
    </aside>
  );
};

export default Sidebar;
