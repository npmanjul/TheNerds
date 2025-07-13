import React from "react";

const events = [
  {
    title: "Google Hackathon Event",
    desc: "Collaborate with nerds across India to solve real-world problems using Google tools. Top teams win swag, mentorship, and bragging rights.",
    icon: "🟡",
  },
  {
    title: "Thenerds × Microsoft Hackfest",
    desc: "A 24-hour code sprint hosted by Thenerds in partnership with Microsoft. Ship bold ideas, win internships, and showcase your talent.",
    icon: "🟣",
  },
];

const Events = () => {
  return (
    <>
      <div className="font-bold text-sm mb-2">Events</div>
      <ul className="text-xs space-y-2">
        {events.map((e, i) => (
          <li key={i}>
            <span className="font-bold">
              {e.icon} {e.title}
            </span>
            <div className="text-xs text-gray-700">{e.desc}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Events;
