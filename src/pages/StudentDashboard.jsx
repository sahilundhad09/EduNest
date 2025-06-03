// "use client"

// import { Link } from "react-router-dom"
// import {
//   BookOpen,
//   ClipboardList,
//   Trophy,
//   CreditCard,
//   GraduationCap,
//   FileText,
//   LogOut,
//   Search,
//   Bell,
//   User,TrendingUp
// } from "lucide-react"
// import WeeklyTimetable from "../components/dashboard/WeeklyTimetable"
// import Achievements from "../components/dashboard/Achievements"
// import PopularCourses from "../components/dashboard/PopularCourses"
// import EnrolledCourses from "../components/dashboard/EnrolledCourses"
// import LogoutButton from "../components/LogoutButton"
// import "../assets/styles/Dashboard.css"

// const StudentDashboard = () => {
//   return (
//     <div className="dashboard-layout">
//       {/* Sidebar */}
//       <aside className="sidebar">
//       <div className="logo">
//           <span className="logo-icon">🎓</span>
//           <span className="logo-text">EduNest</span>
//         </div>

//         <nav className="sidebar-nav">
//         <Link to="/student-dashboard" className="nav-item">
//             <TrendingUp size={20} />
//             Dashboard
//           </Link>
//           <Link to="/my-courses" className="nav-item">
//             <BookOpen className="w-5 h-5" />
//             <span>My Courses</span>
//           </Link>
//           <Link to="/quizzes" className="nav-item">
//             <ClipboardList className="w-5 h-5" />
//             <span>Take Quiz</span>
//           </Link>
//           <Link to="/my-points" className="nav-item">
//             <Trophy className="w-5 h-5" />
//             <span>My Points</span>
//           </Link>
//           <Link to="/payment-history" className="nav-item">
//             <CreditCard className="w-5 h-5" />
//             <span>Payment History</span>
//           </Link>
//           <Link to="/view-courses" className="nav-item">
//             <GraduationCap className="w-5 h-5" />
//             <span>View Courses</span>
//           </Link>
//           <Link to="/quiz-results" className="nav-item">
//             <FileText className="w-5 h-5" />
//             <span>Quiz Results</span>
//           </Link>
//         </nav>

//         <div className="sidebar-footer">
//           <Link to="/profile" className="nav-item">
//             <User className="w-5 h-5" />
//             <span>Profile</span>
//           </Link>
//           {/* <Link to="/" className="nav-item">
//             <LogOut className="w-5 h-5" />
//             <span>Logout</span>
//           </Link> */}
//            <LogoutButton className="nav-item" variant="ghost" />
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         {/* Top Navigation */}
//         <nav className="top-nav">
//           <div className="search-container">
//             <Search className="search-icon" />
//             <input type="text" placeholder="Search..." className="search-input" />
//           </div>

//           <div className="nav-actions">
//             <button className="nav-button">
//               <Bell className="w-5 h-5" />
//               <span className="notification-badge">3</span>
//             </button>
//             <Link to="/profile" className="profile-button">
//               <img
//                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60"
//                 alt="Profile"
//                 className="profile-photo"
//               />
//               <span>Emily Johnson</span>
//             </Link>
//           </div>
//         </nav>

//         {/* Dashboard Content */}
//         <div className="dashboard-content">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <WeeklyTimetable />
//             <Achievements />
//           </div>
//           <div className="mb-6">
//             <PopularCourses />
//           </div>
//           <div>
//             <EnrolledCourses />
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default StudentDashboard

// "use client"

// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import {
//   BookOpen,
//   ClipboardList,
//   Trophy,
//   CreditCard,
//   GraduationCap,
//   FileText,
//   Search,
//   Bell,
//   User,
//   TrendingUp,
// } from "lucide-react"
// import WeeklyTimetable from "../components/dashboard/WeeklyTimetable"
// import Achievements from "../components/dashboard/Achievements"
// import PopularCourses from "../components/dashboard/PopularCourses"
// import EnrolledCourses from "../components/dashboard/EnrolledCourses"
// import LogoutButton from "../components/LogoutButton"
// import api from "../utils/api"
// import Loader from "../components/Loader"
// import "../assets/styles/Dashboard.css"

// const StudentDashboard = () => {
//   const [studentData, setStudentData] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchStudentData = async () => {
//       try {
//         setLoading(true)
//         const response = await api.get("/student/profile")
//         console.log("API Response:", JSON.stringify(response.data, null, 2));
//         setStudentData(response.data)
//       } catch (error) {
//         console.error("Error fetching student data:", error)
//         setError("Failed to load student data")

//         // Fallback to local storage data if API fails
//         const userData = localStorage.getItem("userData")
//         if (userData) {
//           setStudentData(JSON.parse(userData))
//         }
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchStudentData()
//   }, [])

//   if (loading) {
//     return <Loader fullScreen />
//   }

//   return (
//     <div className="dashboard-layout">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="logo">
//           <span className="logo-icon">🎓</span>
//           <span className="logo-text">EduNest</span>
//         </div>

//         <nav className="sidebar-nav">
//           <Link to="/student-dashboard" className="nav-item ">
//             <TrendingUp size={20} />
//             Dashboard
//           </Link>
//           <Link to="/my-courses" className="nav-item">
//             <BookOpen className="w-5 h-5" />
//             <span>My Courses</span>
//           </Link>
//           <Link to="/quizzes" className="nav-item">
//             <ClipboardList className="w-5 h-5" />
//             <span>Take Quiz</span>
//           </Link>
//           <Link to="/my-points" className="nav-item">
//             <Trophy className="w-5 h-5" />
//             <span>My Points</span>
//           </Link>
//           <Link to="/payment-history" className="nav-item">
//             <CreditCard className="w-5 h-5" />
//             <span>Payment History</span>
//           </Link>
//           <Link to="/view-courses" className="nav-item">
//             <GraduationCap className="w-5 h-5" />
//             <span>View Courses</span>
//           </Link>
//           <Link to="/quiz-results" className="nav-item">
//             <FileText className="w-5 h-5" />
//             <span>Quiz Results</span>
//           </Link>
//         </nav>

//         <div className="sidebar-footer">
//           <Link to="/profile" className="nav-item">
//             <User className="w-5 h-5" />
//             <span>Profile</span>
//           </Link>
//           <LogoutButton className="nav-item" variant="ghost" />
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         {/* Top Navigation */}
//         <nav className="top-nav">
//           <div className="search-container">
//             <Search className="search-icon" />
//             <input type="text" placeholder="Search..." className="search-input" />
//           </div>

//           <div className="nav-actions">
//             <button className="nav-button">
//               <Bell className="w-5 h-5" />
//               <span className="notification-badge">3</span>
//             </button>
//             <Link to="/profile" className="profile-button">
//               <img
//                 src={
//                   studentData?.profilepicURL ||
//                   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60"
//                 }
//                 alt="Profile"
//                 className="profile-photo"
//               />
//               <span>{studentData?.name || "Student"}</span>
//             </Link>
//           </div>
//         </nav>

//         {/* Dashboard Content */}
//         <div className="dashboard-content">
//           {error && <div className="error-message">{error}. Some data may not be up to date.</div>}

//           <div className="welcome-section">
//             <h1>Welcome back, {studentData?.name || "Student"}!</h1>
//             <p>You have {studentData?.rewardPoints || 0} reward points</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <WeeklyTimetable />
//             <Achievements achievements={studentData?.recent_achievement || []} />
//           </div>
//           <div className="mb-6">
//             <PopularCourses />
//           </div>
//           <div>
//             <EnrolledCourses enrolledCount={studentData?.courses_enrolled || 0} />
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default StudentDashboard

"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  BookOpen,
  ClipboardList,
  Trophy,
  CreditCard,
  GraduationCap,
  FileText,
  Search,
  Bell,
  User,
  TrendingUp,
} from "lucide-react"
import WeeklyTimetable from "../components/dashboard/WeeklyTimetable"
import Achievements from "../components/dashboard/Achievements"
import PopularCourses from "../components/dashboard/PopularCourses"
import EnrolledCourses from "../components/dashboard/EnrolledCourses"
import LogoutButton from "../components/LogoutButton"
import api from "../utils/api"
import Loader from "../components/Loader"
import "../assets/styles/Dashboard.css"

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null)
  const [studentId,setStudentId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        setLoading(true)
        const data = await api.get("/student/profile")
        console.log("API Response:", JSON.stringify(data, null, 2))
        setStudentData(data)
        setStudentId(data._id)
      } catch (error) {
        console.error("Error fetching student data:", error)
        setError("Failed to load student data")

        // Fallback to local storage data if API fails
        const userData = localStorage.getItem("userData")
        if (userData) {
          setStudentData(JSON.parse(userData))
        }
      } finally {
        setLoading(false)
      }
    }

    fetchStudentData()
  }, [])

  if (loading) {
    return <Loader fullScreen />
  }

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">EduNest</span>
        </div>

        <nav className="sidebar-nav">
          <Link to="/student-dashboard" className="nav-item active">
            <TrendingUp size={20} />
            Dashboard
          </Link>
          <Link to = {`/my-courses/${studentId}`} className="nav-item">
            <BookOpen className="w-5 h-5" />
            <span>My Courses</span>
          </Link>
          <Link to="/quizzes" className="nav-item">
            <ClipboardList className="w-5 h-5" />
            <span>Take Quiz</span>
          </Link>
          <Link to="/my-points" className="nav-item">
            <Trophy className="w-5 h-5" />
            <span>My Points</span>
          </Link>
          <Link to="/course-payment" className="nav-item">
            <CreditCard className="w-5 h-5" />
            <span>Perchase Points</span>
          </Link>
          <Link to="/view-courses" className="nav-item">
            <GraduationCap className="w-5 h-5" />
            <span>View Courses</span>
          </Link>
          <Link to="/attempted-quiz" className="nav-item">
            <FileText className="w-5 h-5" />
            <span>Quiz Results</span>
          </Link>
        </nav>

        <div className="sidebar-footer">
          <Link to="/profile" className="nav-item">
            <User className="w-5 h-5" />
            <span>Profile</span>
          </Link>
          <LogoutButton className="nav-item" variant="ghost" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Navigation */}
        <nav className="top-nav">
          <div className="search-container">
            {/* <Search className="search-icon" />
            <input type="text" placeholder="Search..." className="search-input" /> */}
          </div>

          <div className="nav-actions">
          <Link to="/leaderboard" className="nav-button">
              <Trophy />
              <span>Leaderboard</span>
            </Link>
            <Link to="/profile" className="profile-button">
              <img
                src={
                  studentData?.profilepicURL ||
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60" ||
                  "/placeholder.svg"
                }
                alt="Profile"
                className="profile-photo"
              />
              <span>{studentData?.name || "Student"}</span>
            </Link>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="dashboard-content">
           {error && <div className="error-message">{error}. Some data may not be up to date.</div>}
        
          <div className="welcome-section">
            <h1>Welcome back, {studentData?.name || "Student"}!</h1>
            <p>You have {studentData?.rewardPoints || 0}  points</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <WeeklyTimetable />
          </div>
          <div className="mb-6">
            <PopularCourses />
          </div>
          {/* <div>
            <EnrolledCourses enrolledCount={studentData?.courses_enrolled || 0} />
          </div> */}
        </div>
      </main>
    </div>
  )
}

export default StudentDashboard

