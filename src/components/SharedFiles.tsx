import CircleIcon from "./circle";

interface SharedFileItem {
  title: string;
  date: string;
  memberColor: SharedFileMemberColor[];
}

export type SharedFileMemberColor =
  | "var(--green)"
  | "var(--red)"
  | "var(--orange)"
  | string;

interface SharedFilesProps {
  sharedFilesData: SharedFileItem[];
}

const SharedFiles = ({ sharedFilesData }: SharedFilesProps) => {
  return (
    <section className="shared-files">
      <div className="inline-header">
        <h2>Share with me</h2>
        <span className="view-all">View all</span>
      </div>
      <div className="cards2">
        {sharedFilesData.map((item, index) => (
          <div className="card2" key={index}>
            <div className="inline-items2">
              <div className="card-icon2"></div>
              <div className="circles-area long">
                {item.memberColor.map((color, colorIndex) => (
                  <CircleIcon key={colorIndex} strokeColor={color} radius={9} />
                ))}
              </div>
            </div>
            <div className="card-title">{item.title}</div>
            <div className="card-date2">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SharedFiles;
