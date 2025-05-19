import { useEffect, useRef, useState } from "react";

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

      <div className="create-new" ref={createNewContainerRef}>
        {isListVisible && (
          <div className={`create-new-list ${!isListVisible ? "hidden" : ""}`}>
            <div className="create-new-file">
              <span className="rectangle2" />
              <p>Upload files</p>
            </div>
            <div className="create-new-file">
              <span className="rectangle2" />
              <p>Upload folder</p>
            </div>
            <div className="create-new-file">
              <span className="rectangle2" />
              <p>New folder</p>
            </div>
            <div className="create-new-file">
              <span className="rectangle2" />
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
