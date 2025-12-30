import React, { useState } from "react";

const events = [
  {
    id: 1,
    title: "Semester Final Exam",
    date: "2026-01-04",
    description: "Final examination for all departments.",
  },
  {
    id: 2,
    title: "Freshers Orientation",
    date: "2025-01-15",
    description: "Orientation program for new students.",
  },
  {
    id: 3,
    title: "Tech Seminar",
    date: "2024-12-28",
    description: "Seminar on modern web technologies.",
  },
  {
    id: 4,
    title: "Sports Week",
    date: "2025-03-10",
    description: "Annual sports week events.",
  },
  {
    id: 5,
    title: "Cultural Program",
    date: "2024-11-25",
    description: "Cultural night and performances.",
  },
  { id: 6,
    title: "Industrial Tour", 
    date: "2025-02-20" 

  },
  { id: 7, title: "Workshop on AI", date: "2025-01-25" },
  { id: 8, title: "Job Fair", date: "2025-12-25" },
];

const Events = () => {
  const today = new Date();

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  /* 🔹 Countdown */
  const getCountdown = (date) => {
    const diff = new Date(date) - today;
    if (diff <= 0) return null;
    return `${Math.floor(diff / (1000 * 60 * 60 * 24))} days left`;
  };

  /* 🔹 Filtered Events */
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const isUpcoming = eventDate >= today;

    if (filter === "upcoming" && !isUpcoming) return false;
    if (filter === "past" && isUpcoming) return false;
    if (!event.title.toLowerCase().includes(search.toLowerCase()))
      return false;

    return true;
  });

  /* 🔹 Calendar Logic */
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const eventDates = events.map((e) => e.date);

  const eventsOnSelectedDate = events.filter(
    (e) => e.date === selectedDate
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Events</h2>

      {/* 🔹 Calendar View */}
      <div className="bg-zinc-800 p-4 rounded-xl mb-8">
        <h3 className="text-center font-semibold mb-4">
          {today.toLocaleString("default", { month: "long" })} {year}
        </h3>

        <div className="grid grid-cols-7 gap-2 text-center text-sm">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
            <div key={d} className="text-gray-400">{d}</div>
          ))}

          {[...Array(firstDay)].map((_, i) => (
            <div key={i}></div>
          ))}

          {[...Array(daysInMonth)].map((_, day) => {
            const dateStr = `${year}-${String(month + 1).padStart(2,"0")}-${String(day + 1).padStart(2,"0")}`;
            const hasEvent = eventDates.includes(dateStr);

            return (
              <div
                key={day}
                onClick={() => setSelectedDate(dateStr)}
                className={`cursor-pointer p-2 rounded
                  ${
                    hasEvent
                      ? "bg-blue-500/30 font-semibold"
                      : "hover:bg-zinc-700"
                  }
                  ${
                    selectedDate === dateStr
                      ? "ring-2 ring-blue-400"
                      : ""
                  }`}
              >
                {day + 1}
              </div>
            );
          })}
        </div>
      </div>

      {/* 🔹 Selected Date Events */}
      {selectedDate && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">
            Events on {selectedDate}
          </h3>

          {eventsOnSelectedDate.length > 0 ? (
            <div className="space-y-3">
              {eventsOnSelectedDate.map((e) => (
                <div
                  key={e.id}
                  className="bg-zinc-800 p-4 rounded-lg"
                >
                  <h4 className="font-bold">{e.title}</h4>
                  <p className="text-gray-400 text-sm">{e.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No events on this date.</p>
          )}
        </div>
      )}

      {/* 🔹 Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search event..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-zinc-800 text-white px-4 py-2 rounded outline-none"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-zinc-800 text-white px-4 py-2 rounded outline-none"
        >
          <option value="all">All Events</option>
          <option value="upcoming">Upcoming</option>
          <option value="past">Past</option>
        </select>
      </div>

      {/* 🔹 Event List */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredEvents.map((event) => {
          const eventDate = new Date(event.date);
          const isUpcoming = eventDate >= today;
          const countdown = getCountdown(event.date);

          return (
            <div
              key={event.id}
              className={`p-5 rounded-xl shadow
                ${
                  isUpcoming
                    ? "bg-blue-600/20 border border-blue-500"
                    : "bg-zinc-800"
                }`}
            >
              <h3 className="text-lg font-bold">
                {event.title}
                {isUpcoming && (
                  <span className="ml-2 text-xs bg-blue-500 px-2 py-1 rounded">
                    Upcoming
                  </span>
                )}
              </h3>

              <p className="text-sm text-gray-400">📅 {event.date}</p>

              {countdown && (
                <p className="text-sm text-blue-400">⏳ {countdown}</p>
              )}

              <p className="text-gray-300 mt-2">{event.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
