<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Award, Clock, Bell, TrendingUp, User, Phone, Mail } from 'lucide-react';
import { supabase, fetchHomework, fetchAttendance, fetchGrades, Student } from '../lib/supabase';
import LoadingSpinner from './ui/LoadingSpinner';
import ModernCard from './ui/ModernCard';
import toast from 'react-hot-toast';

interface StudentData extends Student {
  loggedAs?: string;
=======
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface StudentData {
  name: string;
  dob: string;
  admissionId: string;
  bloodGroup: string;
  className: string;
  section: string;
  profilePhoto: string;
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
}

const StudentDashboard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
<<<<<<< HEAD
  const [student, setStudent] = useState<StudentData | null>(null);
  const [homework, setHomework] = useState<any[]>([]);
  const [attendance, setAttendance] = useState<any[]>([]);
  const [grades, setGrades] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get student data from route state or localStorage
    let studentData: StudentData | undefined = location.state?.user;
    
    if (!studentData) {
      try {
        const raw = localStorage.getItem('loggedUser');
        if (raw) {
          const loggedUser = JSON.parse(raw);
          if (loggedUser.loggedAs === 'student') {
            studentData = loggedUser;
          }
        }
      } catch (e) {
        console.error('Error parsing logged user:', e);
      }
    }

    if (!studentData) {
      navigate('/');
      return;
    }

    setStudent(studentData);
    loadStudentData(studentData);
  }, [location.state, navigate]);

  const loadStudentData = async (studentData: StudentData) => {
    try {
      setLoading(true);
      
      // Load homework for student's class and section
      const { data: homeworkData } = await fetchHomework(studentData.class_name, studentData.section);
      setHomework(homeworkData || []);

      // Load attendance (if student ID is available)
      if (studentData.id) {
        const { data: attendanceData } = await fetchAttendance(studentData.id);
        setAttendance(attendanceData || []);

        // Load grades
        const { data: gradesData } = await fetchGrades(studentData.id);
        setGrades(gradesData || []);
      }
    } catch (error) {
      console.error('Error loading student data:', error);
      toast.error('Failed to load some data');
    } finally {
      setLoading(false);
    }
  };

  const calculateAttendancePercentage = () => {
    if (attendance.length === 0) return 96; // Default fallback
    const presentDays = attendance.filter(a => a.status === 'present').length;
    return Math.round((presentDays / attendance.length) * 100);
  };

  const getLatestGrade = () => {
    if (grades.length === 0) return '88%'; // Default fallback
    const latest = grades[0];
    return `${Math.round((latest.marks_obtained / latest.total_marks) * 100)}%`;
  };

  if (!student) {
=======
  // Prefer route state, otherwise fall back to localStorage session
  let student: StudentData | undefined = location.state?.user;
  let loggedUser: any = null;
  try {
    const raw = localStorage.getItem('loggedUser');
    if (raw) loggedUser = JSON.parse(raw);
  } catch (e) {
    loggedUser = null;
  }
  if (!student && loggedUser && loggedUser.loggedAs === 'student') {
    student = loggedUser as StudentData;
  }

  if (!student) {
    // If someone is logged in but as a teacher, show a specific message
    if (loggedUser && loggedUser.loggedAs === 'teacher') {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">You are logged in as a teacher</h2>
            <p className="text-gray-600 mb-4">Use the Teacher Portal to access teacher features.</p>
            <button
              onClick={() => navigate('/teacher-dashboard')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Go to Teacher Portal
            </button>
          </div>
        </div>
      );
    }

>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-4">Please login to access your student dashboard</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

<<<<<<< HEAD
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const attendancePercentage = calculateAttendancePercentage();
  const latestGrade = getLatestGrade();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <ModernCard className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <img
                  src={student.profile_photo || '/assest/logo.png'}
                  alt={`${student.name} profile`}
                  className="w-24 h-28 object-cover rounded-2xl border-4 border-white shadow-lg"
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{student.name}</h1>
                <div className="flex flex-col md:flex-row gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Class: {student.class_name} • Section: {student.section}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>ID: {student.admission_id}</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-green-50 px-4 py-2 rounded-xl border border-green-200">
                    <div className="text-sm text-green-600 font-medium">Attendance</div>
                    <div className="text-2xl font-bold text-green-700">{attendancePercentage}%</div>
                  </div>
                  <div className="bg-blue-50 px-4 py-2 rounded-xl border border-blue-200">
                    <div className="text-sm text-blue-600 font-medium">Latest Score</div>
                    <div className="text-2xl font-bold text-blue-700">{latestGrade}</div>
                  </div>
                  <div className="bg-purple-50 px-4 py-2 rounded-xl border border-purple-200">
                    <div className="text-sm text-purple-600 font-medium">Status</div>
                    <div className="text-lg font-bold text-purple-700">Active</div>
                  </div>
                </div>
              </div>
            </div>
          </ModernCard>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Student Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <ModernCard className="p-6" gradient="blue">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Details
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium">{student.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Admission ID:</span>
                  <span className="font-medium">{student.admission_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date of Birth:</span>
                  <span className="font-medium">{student.dob}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Blood Group:</span>
                  <span className="font-medium">{student.blood_group}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Class:</span>
                  <span className="font-medium">{student.class_name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Section:</span>
                  <span className="font-medium">{student.section}</span>
                </div>
                {student.father_name && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Father's Name:</span>
                    <span className="font-medium">{student.father_name}</span>
                  </div>
                )}
                {student.email && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{student.email}</span>
                  </div>
                )}
                {student.phone && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium">{student.phone}</span>
                  </div>
                )}
              </div>
            </ModernCard>

            {/* Quick Stats */}
            <ModernCard className="p-6" gradient="yellow">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Quick Stats
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{attendancePercentage}%</div>
                  <div className="text-sm text-gray-600">Attendance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{latestGrade}</div>
                  <div className="text-sm text-gray-600">Latest Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{homework.length}</div>
                  <div className="text-sm text-gray-600">Assignments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{grades.length}</div>
                  <div className="text-sm text-gray-600">Exams</div>
                </div>
              </div>
            </ModernCard>
          </motion.div>

          {/* Right Column - Homework and Activities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Homework Section */}
            <ModernCard className="p-6" gradient="purple">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Recent Homework
              </h2>
              {homework.length === 0 ? (
                <div className="text-center py-8">
                  <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No homework assigned yet.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {homework.slice(0, 5).map((hw, index) => (
                    <motion.div
                      key={hw.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/50 rounded-xl p-4 border border-white/20"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{hw.title}</h3>
                        {hw.submission_date && (
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{new Date(hw.submission_date).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-700 text-sm mb-2">{hw.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Subject: {hw.subject}</span>
                        <span>By: {hw.teacher_name || 'Teacher'}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </ModernCard>

            {/* Recent Grades */}
            <ModernCard className="p-6" gradient="green">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Recent Grades
              </h2>
              {grades.length === 0 ? (
                <div className="text-center py-8">
                  <Award className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No grades available yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {grades.slice(0, 5).map((grade, index) => (
                    <motion.div
                      key={grade.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/50 rounded-xl p-4 border border-white/20"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{grade.subject}</h3>
                          <p className="text-sm text-gray-600">{grade.exam_type}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            {Math.round((grade.marks_obtained / grade.total_marks) * 100)}%
                          </div>
                          <div className="text-sm text-gray-500">
                            {grade.marks_obtained}/{grade.total_marks}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </ModernCard>
          </motion.div>
=======
  // Small helper fallbacks
  const photoSrc = student.profilePhoto || '/assest/logo.png';
  const attendance = '96%'; // placeholder - replace with real data when available
  const lastExam = '88%'; // placeholder - replace with real data when available
  const [homeworks, setHomeworks] = React.useState<any[]>([]);
  const [teacherMap, setTeacherMap] = React.useState<Record<string, string>>({});

  // Load teachers and homeworks together so we can migrate legacy homework objects
  React.useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/data/teachers.json');
        const map: Record<string,string> = {};
        if (res.ok) {
          const list = await res.json();
          if (Array.isArray(list)) {
            list.forEach((t: any) => {
              if (t.teacherId) map[String(t.teacherId)] = t.name || String(t.teacherId);
              if (t.email) map[String(t.email)] = t.name || String(t.email);
            });
          }
        }
        setTeacherMap(map);

        // Read homeworks and migrate legacy fields (dueDate -> submissionDate) and resolve createdBy
        try {
          const raw = localStorage.getItem('homeworks');
          if (!raw) return;
          const list = JSON.parse(raw);
          if (!Array.isArray(list)) return;

          let changed = false;
          const migrated = list.map((h: any) => {
            const copy = { ...h };
            // normalize submissionDate
            if (!copy.submissionDate && copy.dueDate) {
              copy.submissionDate = copy.dueDate;
              // keep dueDate for backward-compat but prefer submissionDate
              changed = true;
            }
            // resolve createdBy id/email -> teacher full name when possible
            if (copy.createdBy && map[String(copy.createdBy)]) {
              if (copy.createdBy !== map[String(copy.createdBy)]) {
                copy.createdBy = map[String(copy.createdBy)];
                changed = true;
              }
            }
            return copy;
          });

          // If migration changed any object, persist back to localStorage
          if (changed) {
            try {
              localStorage.setItem('homeworks', JSON.stringify(migrated));
            } catch (e) {
              // ignore write failures
            }
          }

          // Filter for this student
          const filtered = migrated.filter((h: any) => String(h.className).trim() === String(student.className).trim() && String(h.section).trim().toLowerCase() === String(student.section).trim().toLowerCase());
          setHomeworks(filtered);
        } catch (e) {
          // ignore homework parse errors
        }
      } catch (e) {
        // ignore teacher fetch errors
      }
    })();
  }, [student.className, student.section]);

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-yellow-50 to-white min-h-screen px-4 py-8">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-2xl border border-yellow-300 overflow-hidden flex flex-col">
        {/* Header: passport image + ID + quick stats */}
        <div className="px-6 py-4 border-b bg-blue-50">
          <div className="flex items-center gap-6">
            <img
              src={photoSrc}
              alt={`${student.name} profile`}
              className="w-28 h-32 object-cover rounded-md border-2 border-gray-200 shadow-sm"
            />

            <div>
              <h2 className="text-2xl font-bold text-blue-800">{student.name}</h2>
              <div className="mt-1 text-sm text-gray-600">Class: {student.className} • Section: {student.section}</div>
              <div className="mt-3 inline-flex items-baseline gap-3">
                <span className="text-xs text-gray-500">Admission ID</span>
                <span className="text-xl font-semibold text-blue-700">{student.admissionId}</span>
              </div>
            </div>

            <div className="ml-auto flex gap-4">
              <div className="bg-white p-3 rounded-lg shadow text-center">
                <div className="text-xs text-gray-500">Attendance</div>
                <div className="text-lg font-bold text-green-600">{attendance}</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow text-center">
                <div className="text-xs text-gray-500">Last Exam</div>
                <div className="text-lg font-bold text-indigo-600">{lastExam}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column: details */}
          <div className="md:w-1/3 p-6 bg-yellow-100">
            <div className="text-center">
              <img
                src={photoSrc}
                alt="passport"
                className="w-32 h-36 object-cover rounded-md border-4 border-yellow-400 shadow-md mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">{student.name}</h3>
              <p className="text-sm text-gray-700 mt-2">DOB: {student.dob}</p>
            </div>

            <div className="mt-6 space-y-2 text-gray-700 text-sm">
              <div><span className="font-semibold">Admission No:</span> {student.admissionId}</div>
              <div><span className="font-semibold">Blood Group:</span> {student.bloodGroup}</div>
              <div><span className="font-semibold">Class:</span> {student.className}</div>
              <div><span className="font-semibold">Section:</span> {student.section}</div>
            </div>
          </div>

          {/* Right Column: stats and actions */}
          <div className="md:w-2/3 p-6 bg-gray-50">
            <h4 className="text-lg font-semibold text-blue-700 mb-4">Recent Stats</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500">Attendance (This Term)</div>
                <div className="text-2xl font-bold text-green-600">{attendance}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500">Last Exam Score</div>
                <div className="text-2xl font-bold text-indigo-600">{lastExam}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500">Profile Status</div>
                <div className="text-lg font-semibold text-gray-800">Active</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500">Remarks</div>
                <div className="text-lg font-semibold text-gray-800">Good Progress</div>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-md font-medium text-blue-700 mb-2">Student Details</h5>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                <div><span className="font-medium">Admission No:</span> {student.admissionId}</div>
                <div><span className="font-medium">Name:</span> {student.name}</div>
                <div><span className="font-medium">Date of Birth:</span> {student.dob}</div>
                <div><span className="font-medium">Blood Group:</span> {student.bloodGroup}</div>
                <div><span className="font-medium">Class:</span> {student.className}</div>
                <div><span className="font-medium">Section:</span> {student.section}</div>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-md font-medium text-blue-700 mb-2">Homeworks for your class</h5>
              {homeworks.length === 0 ? (
                <div className="text-sm text-gray-500">No homework assigned.</div>
              ) : (
                <ul className="space-y-2">
                  {homeworks.map(hw => (
                    <li key={hw.id} className="p-3 bg-white rounded shadow-sm border">
                      <div className="text-sm text-gray-500">
                        {hw.title} {hw.subject && <span className="ml-2 text-xs">• {hw.subject}</span>} { (hw.submissionDate || hw.dueDate) && <span className="ml-2 text-xs">(Submission: {hw.submissionDate || hw.dueDate})</span> }
                      </div>
                      <div className="text-sm text-gray-700">{hw.description}</div>
                      <div className="text-xs text-gray-400 mt-1">Assigned by {teacherMap[hw.createdBy] || hw.createdBy}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;