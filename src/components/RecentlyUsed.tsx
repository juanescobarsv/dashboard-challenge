import React from "react";
import CircleIcon from "./circle";

type RecentlyUsedItem = {
  title: string;
  date: string;
  memberCount?: number;
};

interface RecentlyUsedProps {
  recentlyUsedData: RecentlyUsedItem[];
}

const RecentlyUsed: React.FC<RecentlyUsedProps> = ({ recentlyUsedData }) => {
  return (
    <section className="recently-used">
      <div className="inline-header">
        <h2>Recently Used</h2>

        <div>
          <span className="rectangle-top1" />
          <span className="rectangle-top2" />
        </div>
      </div>
      <div className="cards">
        {recentlyUsedData.map((item, index) => (
          <div className="card" key={index}>
            <div className="inline-items">
              <div className="card-icon"></div>
              <div className="circles-area short">
                {item.memberCount && item.memberCount > 3 && (
                  <>
                    <CircleIcon strokeColor="var(--gray)" radius={9} />
                    <CircleIcon strokeColor="var(--gray)" radius={9} />
                    <CircleIcon
                      strokeColor="var(--gray)"
                      radius={9}
                      number={item.memberCount}
                      textColor="var(--gray-dark3)"
                    />
                  </>
                )}
                {item.memberCount === 3 && (
                  <>
                    <CircleIcon strokeColor="var(--gray)" radius={9} />
                    <CircleIcon strokeColor="var(--gray)" radius={9} />
                    <CircleIcon strokeColor="var(--gray)" radius={9} />
                  </>
                )}
                {item.memberCount === 2 && (
                  <>
                    <CircleIcon strokeColor="var(--gray)" radius={9} />
                    <CircleIcon strokeColor="var(--gray)" radius={9} />
                  </>
                )}
                {item.memberCount === 1 && (
                  <CircleIcon strokeColor="var(--gray)" radius={9} />
                )}
                {!item.memberCount && <></>}
              </div>

              <svg
                className="vertical-ellipsis"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="var(--gray)"
                height="23px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div>
            <div className="card-title">{item.title}</div>
            <div className="card-date">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentlyUsed;
