import React, { useState } from "react";
import {
  Calendar,
  Users,
  BookOpen,
  ClipboardCheck,
  Bell,
  FileText,
  BarChart3,
  Upload,
  Send,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedClass, setSelectedClass] = useState("10-A");
  const [attendanceDate, setAttendanceDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const teacherInfo = {
    name: "Prof. Sarah Johnson",
    employeeId: "TCH001",
    subject: "Mathematics",
    classes: ["10-A", "10-B", "9-A"],
  };

  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      rollNo: "101",
      present: true,
      parentEmail: "rahul.parent@email.com",
      performance: 85,
    },
    {
      id: 2,
      name: "Priya Patel",
      rollNo: "102",
      present: true,
      parentEmail: "priya.parent@email.com",
      performance: 92,
    },
    {
      id: 3,
      name: "Amit Kumar",
      rollNo: "103",
      present: false,
      parentEmail: "amit.parent@email.com",
      performance: 78,
    },
    {
      id: 4,
      name: "Sneha Reddy",
      rollNo: "104",
      present: true,
      parentEmail: "sneha.parent@email.com",
      performance: 88,
    },
    {
      id: 5,
      name: "Arjun Singh",
      rollNo: "105",
      present: true,
      parentEmail: "arjun.parent@email.com",
      performance: 75,
    },
    {
      id: 6,
      name: "Ananya Gupta",
      rollNo: "106",
      present: false,
      parentEmail: "ananya.parent@email.com",
      performance: 90,
    },
  ];

  const [attendance, setAttendance] = useState(students);

  const statsData = [
    {
      label: "Total Students",
      value: "156",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Present Today",
      value: "142",
      icon: CheckCircle,
      color: "bg-green-500",
    },
    { label: "Absent Today", value: "14", icon: XCircle, color: "bg-red-500" },
    {
      label: "Avg. Attendance",
      value: "91%",
      icon: TrendingUp,
      color: "bg-purple-500",
    },
  ];

  const upcomingClasses = [
    { time: "09:00 AM", class: "10-A", subject: "Algebra", room: "101" },
    { time: "11:00 AM", class: "10-B", subject: "Geometry", room: "102" },
    { time: "02:00 PM", class: "9-A", subject: "Statistics", room: "103" },
  ];

  const recentAssignments = [
    {
      title: "Quadratic Equations",
      class: "10-A",
      dueDate: "2025-01-05",
      submitted: 28,
      total: 32,
    },
    {
      title: "Trigonometry Problems",
      class: "10-B",
      dueDate: "2025-01-08",
      submitted: 15,
      total: 30,
    },
    {
      title: "Probability Quiz",
      class: "9-A",
      dueDate: "2025-01-10",
      submitted: 25,
      total: 28,
    },
  ];

  const classSubjectMap = {
    1: [
      "English",
      "Mathematics",
      "Environmental Studies (EVS)",
      "Marathi",
      "Art & Craft",
      "Physical Education",
    ],
    2: [
      "English",
      "Mathematics",
      "EVS",
      "Marathi",
      "Computer Basics",
      "Physical Education",
    ],
    9: ["English", "Mathematics", "Science", "Social Science", "Marathi"],
    10: ["English", "Mathematics", "Science", "History", "Geography"],
  };

  const calculateGrade = (marks, subjects) => {
    const validMarks = subjects
      .map((sub) => marks[sub])
      .filter((m) => m !== "-" && m !== "");

    if (validMarks.length === 0) return "-";

    const avg = validMarks.reduce((a, b) => a + Number(b), 0) / subjects.length;

    if (avg >= 85) return "A";
    if (avg >= 70) return "B";
    if (avg >= 55) return "C";
    if (avg >= 40) return "D";
    return "F";
  };

  const toggleAttendance = (studentId) => {
    setAttendance((prev) =>
      prev.map((student) =>
        student.id === studentId
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const submitAttendance = () => {
    const absentStudents = attendance.filter((s) => !s.present);
    alert(
      `Attendance submitted! Notifications sent to ${absentStudents.length} parents via Email & SMS.`
    );
  };

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} p-4 rounded-xl`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold text-gray-800">
              Today's Schedule
            </h3>
          </div>
          <div className="space-y-3">
            {upcomingClasses.map((cls, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
              >
                <div className="text-blue-600 font-bold text-lg min-w-[80px]">
                  {cls.time}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{cls.subject}</p>
                  <p className="text-sm text-gray-600">
                    Class {cls.class} - Room {cls.room}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Assignments */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-bold text-gray-800">
              Recent Assignments
            </h3>
          </div>
          <div className="space-y-3">
            {recentAssignments.map((assignment, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">
                    {assignment.title}
                  </h4>
                  <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">
                    {assignment.class}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">
                    Due: {assignment.dueDate}
                  </span>
                  <span className="font-medium text-purple-600">
                    {assignment.submitted}/{assignment.total} submitted
                  </span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{
                      width: `${
                        (assignment.submitted / assignment.total) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-md p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => setActiveTab("attendance")}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center transition-all"
          >
            <ClipboardCheck className="w-8 h-8 mx-auto mb-2" />
            <span className="text-sm font-medium">Mark Attendance</span>
          </button>
          <button
            onClick={() => setActiveTab("marks")}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center transition-all"
          >
            <Award className="w-8 h-8 mx-auto mb-2" />
            <span className="text-sm font-medium">Upload Marks</span>
          </button>
          <button
            onClick={() => setActiveTab("assignments")}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center transition-all"
          >
            <FileText className="w-8 h-8 mx-auto mb-2" />
            <span className="text-sm font-medium">Create Assignment</span>
          </button>
          <button
            onClick={() => setActiveTab("performance")}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center transition-all"
          >
            <BarChart3 className="w-8 h-8 mx-auto mb-2" />
            <span className="text-sm font-medium">View Analytics</span>
          </button>
        </div>
      </div>
    </div>
  );

  const AttendanceTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Mark Attendance</h3>
          <div className="flex gap-4">
            <input
              type="date"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {teacherInfo.classes.map((cls) => (
                <option key={cls} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Roll No
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Student Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Parent Email
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((student, idx) => (
                <tr
                  key={student.id}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {student.rollNo}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.parentEmail}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.present
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {student.present ? "Present" : "Absent"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleAttendance(student.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        student.present
                          ? "bg-red-500 hover:bg-red-600 text-white"
                          : "bg-green-500 hover:bg-green-600 text-white"
                      }`}
                    >
                      Mark {student.present ? "Absent" : "Present"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center p-4 bg-blue-50 rounded-lg">
          <div className="text-sm text-gray-700">
            <span className="font-semibold">Present:</span>{" "}
            {attendance.filter((s) => s.present).length} |
            <span className="font-semibold ml-4">Absent:</span>{" "}
            {attendance.filter((s) => !s.present).length}
          </div>
          <button
            onClick={submitAttendance}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Submit & Notify Parents
          </button>
        </div>
      </div>

      {/* Notification Info */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Bell className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Auto-Notification System
            </h4>
            <p className="text-sm text-gray-700">
              When you submit attendance, parents of absent students will
              automatically receive notifications via both Email and SMS. The
              notification includes student name, date, class, and subject
              details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const MarksTab = () => {
    const [selectedClass, setSelectedClass] = useState("");
    const [examType, setExamType] = useState("");
    const [year, setYear] = useState("");

    const subjects = classSubjectMap[selectedClass] || [];

    const [marksData, setMarksData] = useState(
      students.map((student) => ({
        ...student,
        marks: {},
      }))
    );

    const handleMarksChange = (studentId, subject, value) => {
      setMarksData((prev) =>
        prev.map((student) =>
          student.id === studentId
            ? {
                ...student,
                marks: { ...student.marks, [subject]: value },
              }
            : student
        )
      );
    };

    const calculateGrade = (marks) => {
      const values = Object.values(marks).filter((v) => v !== "-" && v !== "");
      if (values.length === 0) return "-";

      const avg = values.reduce((sum, m) => sum + Number(m), 0) / values.length;

      if (avg >= 90) return "A+";
      if (avg >= 80) return "A";
      if (avg >= 70) return "B";
      if (avg >= 60) return "C";
      if (avg >= 50) return "D";
      return "F";
    };

    return (
      <div className="bg-white rounded-2xl p-6 shadow-xl space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">
          Student Marks Entry
        </h3>

        {/* CONTROLS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* CLASS */}
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Class</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
          </select>

          {/* EXAM TYPE */}
          <select
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select Exam Type</option>
            <option>Unit Test</option>
            <option>Mid-Term</option>
            <option>Final Exam</option>
            <option>Quiz</option>
          </select>

          {/* YEAR */}
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select Year</option>
            <option>2023-24</option>
            <option>2024-25</option>
            <option>2025-26</option>
          </select>
        </div>

        {/* TABLE */}
        {selectedClass && (
          <div className="overflow-x-auto rounded-xl border shadow-md">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Roll No</th>
                  <th className="px-4 py-3 text-left">Student Name</th>

                  {subjects.map((subject) => (
                    <th key={subject} className="px-4 py-3 text-center">
                      {subject}
                    </th>
                  ))}

                  <th className="px-4 py-3 text-center">Grade</th>
                </tr>
              </thead>

              <tbody>
                {marksData.map((student, idx) => (
                  <tr
                    key={student.id}
                    className={`${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-purple-50 transition`}
                  >
                    <td className="px-4 py-3 font-medium">{student.rollNo}</td>
                    <td className="px-4 py-3">{student.name}</td>

                    {subjects.map((subject) => (
                      <td key={subject} className="px-4 py-3 text-center">
                        <input
                          type="number"
                          placeholder="-"
                          className="w-20 px-2 py-1 border rounded-lg text-center focus:ring-2 focus:ring-purple-500"
                          value={student.marks[subject] ?? "-"}
                          onChange={(e) =>
                            handleMarksChange(
                              student.id,
                              subject,
                              e.target.value
                            )
                          }
                        />
                      </td>
                    ))}

                    <td className="px-4 py-3 text-center font-bold text-indigo-700">
                      {calculateGrade(student.marks)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ACTION */}
        <div className="flex gap-4">
          <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all">
            Submit Marks
          </button>

          <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition">
            Save Draft
          </button>
        </div>
      </div>
    );
  };

  const PerformanceTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            AI Performance Analytics
          </h3>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Generate AI Report
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-500 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-600">
                Top Performers
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-800">12</p>
            <p className="text-xs text-gray-600 mt-1">Above 85%</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-yellow-500 rounded-lg">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-600">
                Need Attention
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-800">8</p>
            <p className="text-xs text-gray-600 mt-1">Below 60%</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500 rounded-lg">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-600">
                Class Average
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-800">76%</p>
            <p className="text-xs text-gray-600 mt-1">+5% from last month</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Student
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  Performance
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  Trend
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  AI Insights
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr
                  key={student.id}
                  className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {student.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Roll: {student.rollNo}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-800">
                          {student.performance}%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.performance >= 85
                          ? "bg-green-100 text-green-800"
                          : student.performance >= 70
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {student.performance >= 85
                        ? "↑ Excellent"
                        : student.performance >= 70
                        ? "→ Average"
                        : "↓ Needs Focus"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs text-gray-600">
                      {student.performance >= 85
                        ? "Strong grasp of concepts. Consider advanced problems."
                        : student.performance >= 70
                        ? "Good understanding. Practice more complex questions."
                        : "Requires additional support. Schedule one-on-one sessions."}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const AssignmentsTab = () => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Assignment
      </h3>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Assignment Title
            </label>
            <input
              type="text"
              placeholder="e.g., Quadratic Equations Practice"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Class
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              {teacherInfo.classes.map((cls) => (
                <option key={cls}>{cls}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              value={teacherInfo.subject}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Due Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            placeholder="Assignment instructions and details..."
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Study Material (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500 mt-1">
              PDF, DOC, PPT (Max 10MB)
            </p>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            Create & Notify Students
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all">
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-blue-100 mt-1">
                Welcome back, {teacherInfo.name}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-100">
                Employee ID: {teacherInfo.employeeId}
              </p>
              <p className="text-sm text-blue-100">
                Subject: {teacherInfo.subject}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "attendance", label: "Attendance", icon: ClipboardCheck },
              { id: "marks", label: "Marks", icon: Award },
              { id: "assignments", label: "Assignments", icon: FileText },
              { id: "performance", label: "Performance", icon: TrendingUp },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-4 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "attendance" && <AttendanceTab />}
        {activeTab === "marks" && <MarksTab />}
        {activeTab === "assignments" && <AssignmentsTab />}
        {activeTab === "performance" && <PerformanceTab />}
      </div>
    </div>
  );
};

export default TeacherDashboard;
