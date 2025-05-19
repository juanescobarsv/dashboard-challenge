import { CircleProgress } from "./circleProgress";

interface StorageData {
  usedPercentage: number;
  usedGB: number;
  totalGB: number;
  categories: {
    name: string;
    fileCount: number;
    sizeGB: number;
    color: string;
  }[];
}

const storageData: StorageData = {
  usedPercentage: 85,
  usedGB: 420.2,
  totalGB: 500,
  categories: [
    { name: "Documents", fileCount: 720, sizeGB: 200, color: "#F0AD4E" },
    { name: "Documents", fileCount: 720, sizeGB: 125, color: "#5CACE3" },
    { name: "Documents", fileCount: 720, sizeGB: 75, color: "#5CB85C" },
    { name: "Documents", fileCount: 720, sizeGB: 50, color: "#D3D3D3" },
  ],
};

const StorageProgress: React.FC = () => {
  return (
    <div className="storage-container">
      <h2>Storage</h2>
      <div className="circular-progress-container">
        <CircleProgress
          percentage={storageData.usedPercentage}
          used={storageData.usedGB}
          total={storageData.totalGB}
        />
        <p className="usage-text">
          {storageData.usedGB} GB of {storageData.totalGB} GB used
        </p>
      </div>
      <ul className="storage-categories">
        {storageData.categories.map((category, index) => (
          <li key={index} className="category-item">
            <div
              className="color-indicator"
              style={{ backgroundColor: category.color }}
            ></div>
            <div className="category-details">
              <p className="category-name">{category.name}</p>
              <p className="category-files">{category.fileCount} files</p>
            </div>
            <p className="category-size">{category.sizeGB} GB</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StorageProgress;
