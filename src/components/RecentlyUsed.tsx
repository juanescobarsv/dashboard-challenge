import CircleIcon from "./circle";

type RecentlyUsedItem = {
  title: string;
  date: string;
  memberCount?: number;
};

interface RecentlyUsedProps {
  recentlyUsedData: RecentlyUsedItem[];
}

const RecentlyUsed = ({ recentlyUsedData }: RecentlyUsedProps) => {
  return (
    <section className="recently-used">
      <div className="inline-header">
        <h2>Recently Used</h2>

        <div className="inline-items2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="var(--gray-dark)"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="0"
            width="20"
            style={{ marginRight: "10px" }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="var(--gray-dark)"
            width="20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
            />
          </svg>
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
