import { useEffect, useRef, useState } from "react";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
  </svg>
);

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
      clip-rule="evenodd"
    />
  </svg>
);

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
          <span className="menu-icon">
            <MenuIcon />
          </span>
          <p>Home</p>
        </div>
        <div
          className={`sidebar-item ${
            activeItem === "my-files" ? "active" : ""
          }`}
          onClick={() => setActiveItem("my-files")}
        >
          <span className="menu-icon">
            <MenuIcon />
          </span>{" "}
          <p>My Files</p>
        </div>
        <div
          className={`sidebar-item ${
            activeItem === "recent-files" ? "active" : ""
          }`}
          onClick={() => setActiveItem("recent-files")}
        >
          <span className="menu-icon">
            <MenuIcon />
          </span>{" "}
          <p>Recent Files</p>
        </div>
        <div
          className={`sidebar-item ${
            activeItem === "shared-files" ? "active" : ""
          }`}
          onClick={() => setActiveItem("shared-files")}
        >
          <span className="menu-icon">
            <MenuIcon />
          </span>{" "}
          <p>Shared Filed</p>
        </div>
        <div
          className={`sidebar-item ${
            activeItem === "files-request" ? "active" : ""
          }`}
          onClick={() => setActiveItem("files-request")}
        >
          <span className="menu-icon">
            <MenuIcon />
          </span>{" "}
          <p>File Request</p>
        </div>
        <div
          className={`sidebar-item ${activeItem === "trash" ? "active" : ""}`}
          onClick={() => setActiveItem("trash")}
        >
          <span className="menu-icon">
            <TrashIcon />
          </span>{" "}
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
