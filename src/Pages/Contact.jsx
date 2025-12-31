import React, { useState } from "react";

const contacts = [ 
    { id: 1, name: "SPI Office", phone: "+880 1711-000000", email: "info@spi.edu.bd" },
    { id: 2, name: "Computer Department", phone: "+880 1811-111111", email: "cmt@spi.edu.bd" }, 
    { id: 3, name: "Admin Office", phone: "+880 1911-222222", email: "admin@spi.edu.bd" }, 
    { id: 4, name: "Student Affairs", phone: "+880 1611-333333", email: "students@spi.edu.bd" }, 
    { id: 5, name: "Library", phone: "+880 1611-444444", email: "library@spi.edu.bd" }, 
    { id: 6, name: "Civil Department", phone: "+880 1611-555555", email: "civil@spi.edu.bd" }, 
    { id: 7, name: "Electrical Department", phone: "+880 1611-666666", email: "electrical@spi.edu.bd" }, 
    { id: 8, name: "Electronic Department", phone: "+880 1611-777777", email: "electronics@spi.edu.bd" }, 
    { id: 9, name: "Register Office", phone: "+880 1611-888888", email: "register@spi.edu.bd" }, 
    { id: 10, name: "Exam Controller", phone: "+880 1611-999999", email: "exam@spi.edu.bd" }, 
    { id: 11, name: "Md. Mainul Islam", designation: "Chief Instructor (Civil Tech)", department: "Civil Technology", shift: "1st Shift", email: "mynul99@gmail.com", phone: "01718001456" }, 
    { id: 12, name: "Jasim Uddin", designation: "Instructor & HOD (Civil Tech)", department: "Civil Technology", shift: "2nd Shift", email: "smzuplabon@gmail.com", phone: "01914952971" }, 
    { id: 13, name: "Zakia Ferdousi", designation: "Junior Instructor (Civil)", department: "Civil Technology", shift: "1st Shift", email: "jakiaferdousy@gmail.com", phone: "01740773005" }, 
    { id: 14, name: "Sakhawat Hossen", designation: "Junior Instructor (Civil)", department: "Civil Technology", shift: "1st Shift", email: "shakhawathossen023@gmail.com", phone: "01922347804" }, 
    { id: 15, name: "Jakaria Mahmud", designation: "Junior Instructor (Civil)", department: "Civil Technology", shift: "2nd Shift", email: "jakariamahmud19@gmail.com", phone: "01740956785" }, 
    { id: 16, name: "Arif", designation: "Junior Instructor (Civil)", department: "Civil Technology", shift: "2nd Shift", email: "civilarif206@gmail.com", phone: "01725062710" }, 
    { id: 17, name: "Srijon Sarkar", designation: "Instructor (Electrical) & HOD", department: "Electrical Technology", shift: "2nd Shift", email: "example1@sherpur.polytech.gov.bd", phone: "01717702610" }, 
    { id: 18, name: "Md. Nazmul Ahsan", designation: "Instructor (Electrical)", department: "Electrical Technology", shift: "1st Shift", email: "ahassannazmul@gmail.com", phone: "01741272718" }, 
    { id: 19, name: "Abdullah Al Mamun", designation: "Junior Instructor (Electrical)", department: "Electrical Technology", shift: "1st Shift", email: "example2@sherpur.polytech.gov.bd", phone: "01713510085" }, 
    { id: 20, name: "Abdullah", designation: "Junior Instructor (Electrical)", department: "Electrical Technology", shift: "2nd Shift", email: "example3@sherpur.polytech.gov.bd", phone: "01911817166" }, 
    { id: 21, name: "Protap Sarkar", designation: "Junior Instructor (Electrical)", department: "Electrical Technology", shift: "2nd Shift", email: "example4@sherpur.polytech.gov.bd", phone: "01631091164" }, 
    { id: 22, name: "Md. Firoz Ahmed", designation: "Junior Instructor (Electrical)", department: "Electrical Technology", shift: "1st Shift", email: "firozahmedeee123@gmail.com", phone: "01932202397" }, 
    { id: 23, name: "Nadim Al Said Khan", designation: "Instructor & HOD (Electronics)", department: "Electronics Technology", shift: "1st Shift", email: "", phone: "01721380199" }, 
    { id: 24, name: "Mosharaf Hossen", designation: "Junior Instructor (Electronics)", department: "Electronics Technology", shift: "1st Shift", email: "mosharafspi@gmail.com", phone: "01714464240" }, 
    { id: 25, name: "Md. Mehedi Hasan", designation: "Instructor (Computer Sci)", department: "Computer Science & Tech", shift: "2nd Shift", email: "example5@sherpur.polytech.gov.bd", phone: "017717175277" }, 
    { id: 26, name: "Mohammad Ujjal Mia", designation: "Instructor (Computer)", department: "Computer Science & Tech", shift: "1st Shift", email: "example6@sherpur.polytech.gov.bd", phone: "01723277913" }, 
    { id: 27, name: "Md. Obaidullah Al Noman", designation: "Junior Instructor (Computer)", department: "Computer Science & Tech", shift: "1st Shift", email: "example7@sherpur.polytech.gov.bd", phone: "01715938729" }, 
    { id: 28, name: "Rashedul Islam", designation: "Junior Instructor (Computer)", department: "Computer Science & Tech", shift: "2nd Shift", email: "example8@sherpur.polytech.gov.bd", phone: "01568768354" }, 
    { id: 29, name: "Md. Rukunuzzaman", designation: "Junior Instructor (Computer)", department: "Computer Science & Tech", shift: "2nd Shift", email: "example9@sherpur.polytech.gov.bd", phone: "01309089129" }, 
    { id: 30, name: "Touhidul Islam", designation: "Junior Instructor (Computer)", department: "Computer Science & Tech", shift: "1st Shift", email: "example10@sherpur.polytech.gov.bd", phone: "01754695510" }, 
    { id: 31, name: "Md. Ruman Ali", designation: "Junior Instructor (Computer)", department: "Computer Science & Tech", shift: "2nd Shift", email: "example11@sherpur.polytech.gov.bd", phone: "01962469354" }, 
    { id: 32, name: "Parimal Chandra Dey", designation: "Chief Instructor & HOD (Non-Tech)", department: "Non-Tech", shift: "2nd Shift", email: "example12@sherpur.polytech.gov.bd", phone: "01716796999" }, 
    { id: 33, name: "Md. Shahjahan", designation: "Instructor & HOD (Non-Tech)", department: "Non-Tech", shift: "1st Shift", email: "example13@sherpur.polytech.gov.bd", phone: "01711223877" }, 
    { id: 34, name: "A. K. M. Mostafizur Rahman", designation: "Instructor (Non-Tech)", department: "Non-Tech", shift: "2nd Shift", email: "example14@sherpur.polytech.gov.bd", phone: "01711987924" }, 
    { id: 35, name: "Md. Rafiqul Islam", designation: "Instructor (Non-Tech)", department: "Non-Tech", shift: "2nd Shift", email: "example15@sherpur.polytech.gov.bd", phone: "01722917107" }, 
    { id: 36, name: "Kamaruzzaman", designation: "Junior Instructor (Non-Tech)", department: "Non-Tech", shift: "2nd Shift", email: "example16@sherpur.polytech.gov.bd", phone: "01948221327" }, 
    { id: 37, name: "Md. Saiful Abedin", designation: "Junior Instructor (Non-Tech)", department: "Non-Tech", shift: "1st Shift", email: "example17@sherpur.polytech.gov.bd", phone: "01647360838" }, 
    { id: 38, name: "Shuvo Sen", designation: "Instructor (Environmental)", department: "Environmental Technology", shift: "1st Shift", email: "example18@sherpur.polytech.gov.bd", phone: "01851849052" }, 
    { id: 39, name: "Hasibul Hossen", designation: "Junior Instructor & Registrar", department: "Environmental Technology", shift: "N/A", email: "example19@sherpur.polytech.gov.bd", phone: "01735759224" }, 
    { id: 40, name: "Md. Amir Hamza", designation: "Junior Instructor (Environmental)", department: "Environmental Technology", shift: "N/A", email: "example20@sherpur.polytech.gov.bd", phone: "01717736181" } 
];


const Contact = () => {
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");
  const [filterShift, setFilterShift] = useState("All");

  const departments = [
    "All",
    "Civil Technology",
    "Electrical Technology",
    "Electronics Technology",
    "Computer Science & Tech",
    "Non-Tech",
    "Environmental Technology",
  ];

  const shifts = ["All", "1st Shift", "2nd Shift", "N/A"];

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = contact.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesDept =
      filterDept === "All" || contact.department === filterDept;
    const matchesShift =
      filterShift === "All" || contact.shift === filterShift;

    return matchesSearch && matchesDept && matchesShift;
  });

  return (
    <div className="px-4 sm:px-6 py-6 bg-zinc-900 min-h-screen text-white">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Contact List
      </h2>

      {/* Search */}
      <div className="flex justify-center mb-5">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-2/3 lg:w-1/2 px-4 py-2 rounded-lg bg-zinc-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />
      </div>

      {/* Department Filter (Scrollable on mobile) */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setFilterDept(dept)}
            className={`whitespace-nowrap px-4 py-1 rounded-full text-sm border transition ${
              filterDept === dept
                ? "bg-blue-600 border-blue-600"
                : "bg-zinc-800 border-gray-600 hover:bg-blue-700"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Shift Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {shifts.map((shift) => (
          <button
            key={shift}
            onClick={() => setFilterShift(shift)}
            className={`whitespace-nowrap px-4 py-1 rounded-full text-sm border transition ${
              filterShift === shift
                ? "bg-green-600 border-green-600"
                : "bg-zinc-800 border-gray-600 hover:bg-green-700"
            }`}
          >
            {shift}
          </button>
        ))}
      </div>

      {/* Contact Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-zinc-800 rounded-xl p-4 sm:p-5 shadow hover:shadow-xl transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-1 break-words">
                {contact.name}
              </h3>

              {contact.designation && (
                <p className="text-sm text-gray-300 mb-1">
                  {contact.designation}
                </p>
              )}

              {contact.department && (
                <p className="text-xs sm:text-sm text-gray-400 mb-2">
                  {contact.department}{" "}
                  {contact.shift && `| ${contact.shift}`}
                </p>
              )}

              {contact.email && (
                <p className="text-sm text-blue-400 break-all mb-1">
                  📧{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:underline"
                  >
                    {contact.email}
                  </a>
                </p>
              )}

              {contact.phone && (
                <p className="text-sm text-blue-400">
                  📞{" "}
                  <a
                    href={`tel:${contact.phone}`}
                    className="hover:underline"
                  >
                    {contact.phone}
                  </a>
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">
            No contacts found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;