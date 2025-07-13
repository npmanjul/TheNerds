import React from "react";

const applications = [
  "Marketplace",
  "Groups",
  "Events",
  "Notes",
  "Study Circles",
  "Campus Chat",
  "Library Hub",
  "Tools",
  "Startup Board",
  "Co-Founder Matchmaking",
];

const Applications = () => {
  return (
    <>
      <div className="font-bold text-sm mb-2">Applications</div>
      <ul className="text-xs space-y-1">
        {applications.map((app, i) => (
          <li key={i} className="flex items-center gap-1">
            <span>🗂️</span> {app}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Applications;
