import React from "react";
import CircleIcon from "./circle";

const SharedFiles = () => {
  return (
    <section className="shared-files">
      <div className="inline-header">
        <h2>Share with me</h2>
        <span className="view-all">View all</span>
      </div>
      <div className="cards2">
        <div className="card2">
          <div className="inline-items2">
            <div className="card-icon2"></div>
            <div className="circles-area long">
              <CircleIcon strokeColor="var(--green)" radius={9} />
              <CircleIcon strokeColor="var(--red)" radius={9} />
            </div>
          </div>
          <div className="card-title">Landing Page</div>
          <div className="card-date2">Created: 20.02.2020</div>
        </div>

        <div className="card2">
          <div className="inline-items2">
            <div className="card-icon2"></div>
            <div className="circles-area long">
              <CircleIcon strokeColor="var(--green)" radius={9} />
              <CircleIcon strokeColor="var(--red)" radius={9} />
              <CircleIcon strokeColor="var(--orange)" radius={9} />
            </div>
          </div>
          <div className="card-title">Illustration Pack</div>
          <div className="card-date2">Created: 20.02.2020</div>
        </div>

        <div className="card2">
          <div className="inline-items2">
            <div className="card-icon2"></div>
            <div className="circles-area long">
              <CircleIcon strokeColor="var(--green)" radius={9} />
              <CircleIcon strokeColor="var(--red)" radius={9} />
              <CircleIcon strokeColor="var(--orange)" radius={9} />
            </div>
          </div>
          <div className="card-title">CV Design</div>
          <div className="card-date2">Created: 20.02.2020</div>
        </div>
      </div>
    </section>
  );
};

export default SharedFiles;
