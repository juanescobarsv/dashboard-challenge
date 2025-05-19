import React from "react";

type Files = {
  id: number;
  name: string;
  members: string;
  modified: string;
  color: string;
};

interface RecentFilesProps {
  files: Files[];
}

const RecentFiles: React.FC<RecentFilesProps> = ({ files }) => {
  return (
    <section className="recent-files">
      <div className="inline-header">
        <h2>Recent Files</h2>
        <span className="view-all">View all</span>
      </div>

      <div className="files-table">
        <div className="files-header">
          <span>Name</span>
          <span>Members</span>
          <span>Last Modified</span>
          <span>{""}</span>
        </div>

        {files.map((file) => (
          <div className="files-row" key={file.id}>
            <div className="files-name">
              <span
                className="files-icon"
                style={{ backgroundColor: file.color }}
              />
              {file.name}
            </div>
            <span>{file.members}</span>
            <span>{file.modified}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              // class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentFiles;
