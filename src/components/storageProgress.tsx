import piechart from "../assets/pie-chart.png";

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
    { name: "Documents", fileCount: 720, sizeGB: 200, color: "var(--orange)" },
    { name: "Documents", fileCount: 720, sizeGB: 125, color: "var(--blue)" },
    { name: "Documents", fileCount: 720, sizeGB: 75, color: "var(--green)" },
    { name: "Documents", fileCount: 720, sizeGB: 50, color: "var(--gray)" },
  ],
};

const StorageProgress = () => {
  return (
    <div className="storage-container">
      <h2>Storage</h2>
      <div className="circular-progress-container">
        <img src={piechart} alt="Pie Chart" className="pie-chart-image" />
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
