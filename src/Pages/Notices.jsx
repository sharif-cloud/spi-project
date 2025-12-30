// Notices.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const notices = [
  {
    id: 1,
    title: "Semester Final Exam Routine Published",
    category: "Exam",
    date: "2025-11-05",
    description:
      "Final exam routine for all departments has been published. Please check the notice board.",
    isUrgent: true,
    attachment: "/files/final_exam_routine.pdf",
  },
  {
    id: 2,
    title: "Class Suspension Notice",
    category: "Academic",
    date: "2024-12-20",
    description:
      "All classes will remain suspended due to unavoidable circumstances.",
    isUrgent: false,
    attachment: null,
  },
  {
    id: 3,
    title: "Scholarship Application Deadline",
    category: "General",
    date: "2024-12-28",
    description:
      "Last date for submitting scholarship applications is 28 December.",
    isUrgent: true,
    attachment: "/files/scholarship_form.pdf",
  },
  {
    id: 4,
    title: "Library Timing Update",
    category: "General",
    date: "2024-11-30",
    description:
      "Library will remain open from 9 AM to 6 PM on working days.",
    isUrgent: false,
    attachment: null,
  },
];

const Notices = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();

  const filteredNotices = notices.filter((notice) => {
    if (!notice.title.toLowerCase().includes(search.toLowerCase()))
      return false;
    if (category !== "all" && notice.category !== category) return false;
    return true;
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Notice Board</h2>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search notice..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-zinc-800 text-white px-4 py-2 rounded outline-none"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-zinc-800 text-white px-4 py-2 rounded outline-none"
        >
          <option value="all">All Categories</option>
          <option value="Exam">Exam</option>
          <option value="Academic">Academic</option>
          <option value="General">General</option>
        </select>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice) => (
            <div
              key={notice.id}
              onClick={() => navigate(`/notice/${notice.id}`)}
              className={`p-5 rounded-xl border cursor-pointer transition
                ${
                  notice.isUrgent
                    ? "bg-red-500/10 border-red-500"
                    : "bg-zinc-800 border-zinc-700"
                } hover:scale-105`}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold">
                  {notice.title}
                  {notice.isUrgent && (
                    <span className="ml-2 text-xs bg-red-600 text-white px-2 py-1 rounded">
                      Urgent
                    </span>
                  )}
                </h3>
                <span className="text-sm text-gray-400">{notice.date}</span>
              </div>

              <p className="text-sm text-blue-400 mt-1">{notice.category}</p>
              <p className="text-gray-300 mt-2">{notice.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No notices found.</p>
        )}
      </div>
    </div>
  );
};

export default Notices;
