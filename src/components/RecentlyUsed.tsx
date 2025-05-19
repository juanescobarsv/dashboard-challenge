import React from "react";
import CircleIcon from "./circle";

const RecentlyUsed = () => {
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
        <div className="card">
          <div className="inline-items">
            <div className="card-icon"></div>
            <div className="circles-area short">
              <CircleIcon strokeColor="var(--gray)" radius={9} />
              <CircleIcon strokeColor="var(--gray)" radius={9} />
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
          <div className="card-title">App Project</div>
          <div className="card-date">Created: 20.02.2020</div>
        </div>

        <div className="card">
          <div className="inline-items">
            <div className="card-icon"></div>
            <div className="circles-area short">
              <CircleIcon strokeColor="var(--gray)" radius={9} />
              <CircleIcon strokeColor="var(--gray)" radius={9} />
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
          <div className="card-title">Project: fitbit</div>
          <div className="card-date">Created: 28.02.2020</div>
        </div>

        <div className="card">
          <div className="inline-items">
            <div className="card-icon"></div>
            <div className="circles-area short">
              <CircleIcon strokeColor="var(--gray)" radius={9} />
              <CircleIcon strokeColor="var(--gray)" radius={9} />
              <CircleIcon
                strokeColor="var(--gray)"
                radius={10}
                number={4}
                textColor="var(--gray-dark3)"
              />
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
          </div>{" "}
          <div className="card-title">Client Documents</div>
          <div className="card-date">Created: 4.03.2020</div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyUsed;
