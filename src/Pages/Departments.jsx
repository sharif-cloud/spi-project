import React, { useState } from "react";

const departments = [
  {
    id: 1,
    name: "Computer Technology",
    short: "CMT",
    students: [
      { id: 1, name: "Rakib Hasan", roll: "CMT-101" },
      { id: 2, name: "Sabbir Ahmed", roll: "CMT-102" },
      { id: 3, name: "Nusrat Jahan", roll: "CMT-103" },
    ],
  },
  {
    id: 2,
    name: "Civil Technology",
    short: "CT",
    students: [
      { id: 1, name: "Arif Hossain", roll: "CT-201" },
      { id: 2, name: "Tanvir Rahman", roll: "CT-202" },
    ],
  },
  {
    id: 3,
    name: "Electrical Technology",
    short: "ET",
    students: [
      { id: 1, name: "Imran Khan", roll: "ET-301" },
      { id: 2, name: "Saima Akter", roll: "ET-302" },
    ],
  },
  {
    id: 4,
    name: "Electronics Technology",
    short: "ENT",
    students: [
      { id: 1, name: "Shuvo Das", roll: "ENT-401" },
    ],
  },
];

const Departments = () => {
  const [search, setSearch] = useState("");
  const [openDept, setOpenDept] = useState(null);

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Departments</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 mb-6 bg-zinc-800 text-white px-4 py-2 rounded outline-none"
      />

      {/* Department List */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredDepartments.length > 0 ? (
          filteredDepartments.map((dept) => (
            <div
              key={dept.id}
              className="bg-zinc-800 p-5 rounded-xl shadow"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">{dept.name}</h3>
                  <span className="text-sm text-blue-400">
                    {dept.short}
                  </span>
                </div>

                <button
                  onClick={() =>
                    setOpenDept(openDept === dept.id ? null : dept.id)
                  }
                  className="text-sm bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                >
                  {openDept === dept.id ? "Hide" : "View"} Students
                </button>
              </div>

              {/* Student List */}
              {openDept === dept.id && (
                <div className="mt-4 border-t border-zinc-700 pt-3">
                  {dept.students.length > 0 ? (
                    dept.students.map((student) => (
                      <div
                        key={student.id}
                        className="flex justify-between text-sm text-gray-300 py-1"
                      >
                        <span>{student.name}</span>
                        <span className="text-gray-400">
                          {student.roll}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">
                      No students found.
                    </p>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-400">No departments found.</p>
        )}
      </div>
    </div>
  );
};

export default Departments;
