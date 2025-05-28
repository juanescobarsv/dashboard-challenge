import { useEffect, useRef, useState } from "react";
import { MenuIcon, CreateIcon, TrashIcon } from "./custom-icons";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const Menu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isListVisible, setIsListVisible] = useState(false);
  const createNewContainerRef = useRef<HTMLDivElement>(null);

  const toggleListVisibility = () => {
    setIsListVisible((prev) => !prev);
  };

  const menuItems: MenuItem[] = [
    { id: "home", label: "Home", icon: MenuIcon },
    { id: "my-files", label: "My Files", icon: MenuIcon },
    { id: "recent-files", label: "Recent Files", icon: MenuIcon },
    { id: "shared-files", label: "Shared Files", icon: MenuIcon },
    { id: "files-request", label: "File Request", icon: MenuIcon },
    { id: "trash", label: "Trash", icon: TrashIcon },
  ];

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
      <nav className="sidebar-menu">
        <div className="logo gradient"></div>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`sidebar-item ${
                activeItem === item.id ? "active" : ""
              }`}
              onClick={() => setActiveItem(item.id)}
            >
              <a href={`#${item.id}`}>
                <span className="menu-icon">
                  <item.icon />
                </span>
                <p>{item.label}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="create-new" ref={createNewContainerRef}>
        {isListVisible && (
          <ul className={`create-new-list ${!isListVisible ? "hidden" : ""}`}>
            <li
              className="create-new-item"
              onClick={() => {
                console.log("Upload files - clicked");
                setIsListVisible(false);
              }}
            >
              <span className="create-icon">
                <CreateIcon />
              </span>
              <p>Upload files</p>
            </li>
            <li
              className="create-new-item"
              onClick={() => {
                console.log("Upload folder - clicked");
                setIsListVisible(false);
              }}
            >
              <span className="create-icon">
                <CreateIcon />
              </span>
              <p>Upload folder</p>
            </li>
            <li
              className="create-new-item"
              onClick={() => {
                console.log("New folder - clicked");
                setIsListVisible(false);
              }}
            >
              <span className="create-icon">
                <CreateIcon />
              </span>
              <p>New folder</p>
            </li>
            <li
              className="create-new-item"
              onClick={() => {
                console.log("More - clicked");
                setIsListVisible(false);
              }}
            >
              <span className="create-icon">
                <CreateIcon />
              </span>
              <p>More</p>
            </li>
          </ul>
        )}

        <button onClick={toggleListVisibility}>
          Create New <span className="plus">+</span>
        </button>
      </div>
    </aside>
  );
};

export default Menu;
