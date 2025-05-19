import { useEffect, useRef, useState } from "react";

const CreateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const Menu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isListVisible, setIsListVisible] = useState(false);
  const createNewContainerRef = useRef<HTMLDivElement>(null);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        isListVisible &&
        createNewContainerRef.current &&
        !createNewContainerRef.current.contains(event.target as Node)
      ) {
        setIsListVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isListVisible]);

  return (
    <aside className="sidebar">
      <nav className="sidebar-menu ">
        <div className="logo gradient"></div>

        <div
          className={`sidebar-item ${activeItem === "home" ? "active" : ""}`}
          onClick={() => setActiveItem("home")}
        >
          <span className="menu-icon" />
          <p>Home</p>
        </div>
        <div
          className={`sidebar-item ${
            activeItem === "my-files" ? "active" : ""
          }`}
          onClick={() => setActiveItem("my-files")}
        >
          <span className="menu-icon" />
          <p>My Files</p>
        </div>
        <div
          className={`sidebar-item ${
            activeItem === "recent-files" ? "active" : ""
          }`}
          onClick={() => setActiveItem("recent-files")}
        >
          <span className="menu-icon" />
          <p>Recent Files</p>
        </div>
        <div
          className={`sidebar-item ${
            activeItem === "shared-files" ? "active" : ""
          }`}
          onClick={() => setActiveItem("shared-files")}
        >
          <span className="menu-icon" />
          <p>Shared Filed</p>
        </div>
        <div
          className={`sidebar-item ${
            activeItem === "files-request" ? "active" : ""
          }`}
          onClick={() => setActiveItem("files-request")}
        >
          <span className="menu-icon" />
          <p>File Request</p>
        </div>
        <div
          className={`sidebar-item ${activeItem === "trash" ? "active" : ""}`}
          onClick={() => setActiveItem("trash")}
        >
          <span className="menu-icon" />
          <p>Trash</p>
        </div>
      </nav>

      <div className="create-new" ref={createNewContainerRef}>
        {isListVisible && (
          <div className={`create-new-list ${!isListVisible ? "hidden" : ""}`}>
            <div className="create-new-file">
              <span className="create-icon">
                <CreateIcon />
              </span>
              <p>Upload files</p>
            </div>
            <div className="create-new-file">
              <span className="create-icon">
                <CreateIcon />
              </span>{" "}
              <p>Upload folder</p>
            </div>
            <div className="create-new-file">
              <span className="create-icon">
                <CreateIcon />
              </span>{" "}
              <p>New folder</p>
            </div>
            <div className="create-new-file">
              <span className="create-icon">
                <CreateIcon />
              </span>{" "}
              <p> More</p>
            </div>
          </div>
        )}

        <button onClick={toggleListVisibility}>
          Create New <span className="plus">+</span>
        </button>
      </div>
    </aside>
  );
};

export default Menu;
