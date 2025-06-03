// "use client"
// import { Link } from "react-router-dom"
// import { BookOpen, DollarSign, Users, Plus, LogOut, Search, User,Wallet } from "lucide-react"
// import "../assets/styles/TeacherDashboard.css"
// import LogoutButton from "../components/LogoutButton"


// const TeacherDashboard = () => {
//   const teacherInfo = {
//     name: "Dr. Jane Smith",
//     coursesCreated: 5,
//     totalStudents: 1234,
//     totalEarnings: 15000,
//     totalBalance:3000
//     }

 


//   return (
//     <div className="dashboard-layout">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="logo">
//           <span className="logo-icon">🎓</span>
//           <span className="logo-text">EduNest</span>
//         </div>
//         <nav className="sidebar-nav">
//           <Link to="/teacher-dashboard" className="nav-item">
//             <BookOpen size={20} /> Dashboard
//           </Link>
//           <Link to="/teacher/courses" className="nav-item">
//             <BookOpen size={20} /> My Courses
//           </Link>
//           <Link to="/teacher/create-course" className="nav-item">
//             <Plus size={20} /> Create Course
//           </Link>
//           <Link to="/teacher/earnings" className="nav-item">
//             <DollarSign size={20} /> Earnings
//           </Link>
//           <Link to="/teacher/students" className="nav-item">
//             <Users size={20} /> My Students
//           </Link>
//         </nav>
//         <div className="sidebar-footer">
//           <Link to="/teacher/profile" className="nav-item">
//             <User size={20} /> Profile
//           </Link>
//           <LogoutButton className="nav-item" variant="ghost" />
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         {/* Top Navigation */}
//         <nav className="top-nav">
//           <div className="nav-left">
//             <div className="search-container">
//               <Search className="search-icon" />
//               <input type="text" placeholder="Search..." className="search-input" />
//             </div>
//           </div>
//           <div className="nav-right">
//             <Link to="/teacher/profile" className="profile-button">
//               <img
//                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
//                 alt="Profile"
//                 className="profile-photo"
//               />
//               <span>{teacherInfo.name}</span>
//             </Link>
//           </div>
//         </nav>

//         {/* Dashboard Content */}
//         <div className="dashboard-content">
//           <h1>Welcome back, {teacherInfo.name}!</h1>
//           <div className="stats-grid">
//             <div className="stat-card">
//               <BookOpen size={24} />
//               <div className="stat-info">
//                 <h3>Courses Created</h3>
//                 <p>{teacherInfo.coursesCreated}</p>
//               </div>
//             </div>
//             <div className="stat-card">
//               <Users size={24} />
//               <div className="stat-info">
//                 <h3>Total Students</h3>
//                 <p>{teacherInfo.totalStudents}</p>
//               </div>
//             </div>
//             <div className="stat-card">
//               <DollarSign size={24} />
//               <div className="stat-info">
//                 <h3>Total Earnings</h3>
//                 <p>${teacherInfo.totalEarnings.toLocaleString()}</p>
//               </div>
//             </div>
//             <div className="stat-card">
//               <Wallet size={24} />
//               <div className="stat-info">
//                 <h3>Total Balance</h3>
//                 <p>${teacherInfo.totalBalance.toLocaleString()}</p>
//               </div>
//             </div>
//           </div>
//           {/* Add more dashboard widgets here */}
//         </div>
//       </main>
//     </div>
//   )
// }

// export default TeacherDashboard

// "use client"

// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { BookOpen, DollarSign, Users, Plus, Search, User, Wallet } from "lucide-react"
// import api from "../utils/api"
// import Loader from "../components/Loader"
// import LogoutButton from "../components/LogoutButton"
// import "../assets/styles/TeacherDashboard.css"

// const TeacherDashboard = () => {
//   const [teacherInfo, setTeacherInfo] = useState(null)
//   const [courses, setCourses] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchTeacherData = async () => {
//       try {
//         setLoading(true)

//         // Fetch teacher profile
//         const profileResponse = await api.get("/teacher/profile")
//         setTeacherInfo(profileResponse.data)

//         // Fetch teacher courses
//         const coursesResponse = await api.get("/course/teacher")
//         setCourses(coursesResponse.data)
//       } catch (error) {
//         console.error("Error fetching teacher data:", error)
//         setError("Failed to load teacher data")

//         // Fallback to local storage data if API fails
//         const userData = localStorage.getItem("userData")
//         if (userData) {
//           setTeacherInfo(JSON.parse(userData))
//         }
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchTeacherData()
//   }, [])

//   if (loading) {
//     return <Loader fullScreen />
//   }

//   // Calculate total students (in a real app, this would come from the API)
//   const totalStudents = courses.reduce((total, course) => total + (course.totalSell || 0), 0)

//   return (
//     <div className="dashboard-layout">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="logo">
//           <span className="logo-icon">🎓</span>
//           <span className="logo-text">EduNest</span>
//         </div>
//         <nav className="sidebar-nav">
//           <Link to="/teacher-dashboard" className="nav-item active">
//             <BookOpen size={20} /> Dashboard
//           </Link>
//           <Link to="/teacher/courses" className="nav-item">
//             <BookOpen size={20} /> My Courses
//           </Link>
//           <Link to="/teacher/create-course" className="nav-item">
//             <Plus size={20} /> Create Course
//           </Link>
//           <Link to="/teacher/earnings" className="nav-item">
//             <DollarSign size={20} /> Earnings
//           </Link>
//           <Link to="/teacher/students" className="nav-item">
//             <Users size={20} /> My Students
//           </Link>
//         </nav>
//         <div className="sidebar-footer">
//           <Link to="/teacher/profile" className="nav-item">
//             <User size={20} /> Profile
//           </Link>
//           <LogoutButton className="nav-item" variant="ghost" />
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         {/* Top Navigation */}
//         <nav className="top-nav">
//           <div className="nav-left">
//             <div className="search-container">
//               <Search className="search-icon" />
//               <input type="text" placeholder="Search..." className="search-input" />
//             </div>
//           </div>
//           <div className="nav-right">
//             <Link to="/teacher/profile" className="profile-button">
//               <img
//                 src={
//                   teacherInfo?.profilepicURL ||
//                   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
//                 }
//                 alt="Profile"
//                 className="profile-photo"
//               />
//               <span>{teacherInfo?.name || "Teacher"}</span>
//             </Link>
//           </div>
//         </nav>

//         {/* Dashboard Content */}
//         <div className="dashboard-content">
//           {error && <div className="error-message">{error}. Some data may not be up to date.</div>}

//           <h1>Welcome back, {teacherInfo?.name || "Teacher"}!</h1>
//           <div className="stats-grid">
//             <div className="stat-card">
//               <BookOpen size={24} />
//               <div className="stat-info">
//                 <h3>Courses Created</h3>
//                 <p>{teacherInfo?.course_created || 0}</p>
//               </div>
//             </div>
//             <div className="stat-card">
//               <Users size={24} />
//               <div className="stat-info">
//                 <h3>Total Students</h3>
//                 <p>{totalStudents}</p>
//               </div>
//             </div>
//             <div className="stat-card">
//               <DollarSign size={24} />
//               <div className="stat-info">
//                 <h3>Total Earnings</h3>
//                 <p>${teacherInfo?.totalEarning?.toLocaleString() || 0}</p>
//               </div>
//             </div>
//             <div className="stat-card">
//               <Wallet size={24} />
//               <div className="stat-info">
//                 <h3>Current Balance</h3>
//                 <p>${teacherInfo?.balance?.toLocaleString() || 0}</p>
//               </div>
//             </div>
//           </div>

//           {courses.length > 0 && (
//             <div className="recent-courses">
//               <h2>Your Recent Courses</h2>
//               <div className="courses-preview">
//                 {courses.slice(0, 3).map((course) => (
//                   <div key={course._id} className="course-preview-card">
//                     <h3>{course.title}</h3>
//                     <p>{course.description}</p>
//                     <div className="course-preview-stats">
//                       <span>Price: ${course.sell_price}</span>
//                       <span>Level: {course.level}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <Link to="/teacher/courses" className="view-all-link">
//                 View all courses
//               </Link>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   )
// }

// export default TeacherDashboard


"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { BookOpen, DollarSign, Users, Plus, Search, User, Wallet } from "lucide-react"
import api from "../utils/api"
import Loader from "../components/Loader"
import LogoutButton from "../components/LogoutButton"
import "../assets/styles/TeacherDashboard.css"

const TeacherDashboard = () => {
  const [teacherInfo, setTeacherInfo] = useState(null)
  const [teacherId,setTeacherId] = useState(null)
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalEnrolledStudents, setTotalEnrolledStudents] = useState(0)

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        setLoading(true)

        // Fetch teacher profile
        const profileData = await api.get("/teacher/profile")
        console.log("profileData:"+profileData._id)
        setTeacherId(profileData._id)
        setTeacherInfo(profileData)

        // Extract total enrolled students count
        if (Array.isArray(profileData.enrolledStudents)) {
          setTotalEnrolledStudents(profileData.enrolledStudents.length)
        } else {
          setTotalEnrolledStudents(0) // Fallback if data is incorrect
        }

        // Fetch teacher courses
        const coursesData = await api.get(`/course/teacher/${profileData._id}`)

        setCourses(coursesData)
      } catch (error) {
        console.error("Error fetching teacher data:", error)
        setError("Failed to load teacher data")

        // Fallback to local storage data if API fails
        const userData = localStorage.getItem("userData")
        if (userData) {
          setTeacherInfo(JSON.parse(userData))
        }
      } finally {
        setLoading(false)
      }
    }

    fetchTeacherData()
  }, [])

  if (loading) {
    return <Loader fullScreen />
  }

  // Calculate total students (in a real app, this would come from the API)
  

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">EduNest</span>
        </div>
        <nav className="sidebar-nav">
          <Link to="/teacher-dashboard" className="nav-item active">
            <User size={20} /> Dashboard
          </Link>
          <Link to={`/teacher/courses/${teacherId}`} className="nav-item">
            <BookOpen size={20} /> My Courses
          </Link>
          <Link to="/teacher/create-course" className="nav-item">
            <Plus size={20} /> Create Course
          </Link>
          <Link to="/teacher/earnings" className="nav-item">
            <DollarSign size={20} /> Earnings
          </Link>
          <Link to="/teacher/students" className="nav-item">
            <Users size={20} /> My Students
          </Link>
        </nav>
        <div className="sidebar-footer">
          <Link to="/teacher/profile" className="nav-item">
            <User size={20} /> Profile
          </Link>
          <LogoutButton className="nav-item" variant="ghost" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Navigation */}
        <nav className="top-nav">
          <div className="nav-left">
           
          </div>
          <div className="nav-right">
            <Link to="/teacher/profile" className="profile-button">
              <img
                src={
                  teacherInfo?.profilepicURL ||
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" ||
                  "/placeholder.svg"
                }
                alt="Profile"
                className="profile-photo"
              />
              <span>{teacherInfo?.name || "Teacher"}</span>
            </Link>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {error && <div className="error-message">{error}. Some data may not be up to date.</div>}

          <div className="welcome-section">
          <h1>Welcome back, {teacherInfo?.name || "Teacher"}!</h1>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <BookOpen size={24} />
              <div className="stat-info">
                <h3>Courses Created</h3>
                <p>{teacherInfo?.course_created || 0}</p>
              </div>
            </div>
            <div className="stat-card">
              <Users size={24} />
              <div className="stat-info">
                <h3>Total Students</h3>
                <p>{totalEnrolledStudents}</p>
              </div>
            </div>
            <div className="stat-card">
              <DollarSign size={24} />
              <div className="stat-info">
                <h3>Total Earnings</h3>
                <p>₹{teacherInfo?.totalEarning?.toLocaleString() || 0}</p>
              </div>
            </div>
            <div className="stat-card">
              <Wallet size={24} />
              <div className="stat-info">
                <h3>Current Balance</h3>
                <p>₹{teacherInfo?.balance?.toLocaleString() || 0}</p>
              </div>
            </div>
          </div>

          {courses.length > 0 && (
            <div className="recent-courses">
              <h2>Your Recent Courses</h2>
              <div className="courses-preview">
                {courses.slice(0, 3).map((course) => (
                  <div key={course._id} className="course-preview-card">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className="course-preview-stats">
                      <span>Price: ₹{course.sell_price}</span>
                      <span>Level: {course.level}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to = {`/teacher/courses/${teacherId}`}  className="view-all-link">
                View all courses
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default TeacherDashboard




