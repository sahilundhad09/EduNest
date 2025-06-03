// "use client"
// import { Calendar, CreditCard, CheckCircle, XCircle,ArrowLeft } from "lucide-react"
// import "../assets/styles/PaymentHistory.css"
// import { Button } from "../components/ui/button"
// import { useNavigate } from "react-router-dom"

// const PaymentHistory = () => {
//   const navigate = useNavigate()
//   const payments = [
//     {
//       id: 1,
//       courseName: "Introduction to React",
//       amount: 29.99,
//       date: "2024-02-01",
//       status: "Successful",
//       paymentMethod: "Credit Card (**** 1234)",
//       transactionId: "TRX123456789",
//     },
//     {
//       id: 2,
//       courseName: "Advanced JavaScript Concepts",
//       amount: 49.99,
//       date: "2024-01-15",
//       status: "Successful",
//       paymentMethod: "PayPal",
//       transactionId: "TRX987654321",
//     },
//     {
//       id: 3,
//       courseName: "React Native Fundamentals",
//       amount: 39.99,
//       date: "2024-01-01",
//       status: "Failed",
//       paymentMethod: "Credit Card (**** 5678)",
//       transactionId: "TRX456789123",
//     },
//   ]

//   return (
//     <div className="payment-history-container">
//       <Button variant="ghost" onClick={() => navigate('/student-dashboard')}>
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back To Dashboard
//         </Button>
//         <br/>
//         <br/>
//       <div className="payment-header">
//         <h1>Payment History</h1>
//         <div className="payment-filters">
//           <select className="filter-select">
//             <option>All Time</option>
//             <option>Last 30 Days</option>
//             <option>Last 3 Months</option>
//             <option>Last Year</option>
//           </select>
//           <select className="filter-select">
//             <option>All Status</option>
//             <option>Successful</option>
//             <option>Failed</option>
//           </select>
//         </div>
//       </div>

//       <div className="payments-list">
//         {payments.map((payment) => (
//           <div key={payment.id} className="payment-card">
//             <div className="payment-info">
//               <div className="payment-primary">
//                 <h3>{payment.courseName}</h3>
//                 <span className={`payment-status ${payment.status.toLowerCase()}`}>
//                   {payment.status === "Successful" ? <CheckCircle size={16} /> : <XCircle size={16} />}
//                   {payment.status}
//                 </span>
//               </div>
//               <div className="payment-details">
//                 <div className="detail-item">
//                   <Calendar size={16} />
//                   <span>{new Date(payment.date).toLocaleDateString()}</span>
//                 </div>
//                 <div className="detail-item">
//                   <CreditCard size={16} />
//                   <span>{payment.paymentMethod}</span>
//                 </div>
//               </div>
//               <div className="payment-footer">
//                 <span className="transaction-id">Transaction ID: {payment.transactionId}</span>
//                 <span className="payment-amount">${payment.amount.toFixed(2)}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default PaymentHistory

"use client"

import { useState, useEffect } from "react"
import { Calendar, CreditCard, CheckCircle, XCircle, ArrowLeft } from "lucide-react"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom"
import api from "../utils/api"
import Loader from "../components/Loader"
import "../assets/styles/PaymentHistory.css"

const PaymentHistory = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [payments, setPayments] = useState([])
  const [timeFilter, setTimeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        setLoading(true)

        // Check authentication
        if (!api.isAuthenticated()) {
          navigate("/login")
          return
        }

        // Fetch payment history
        const response = await api.get("/student/payment-history")
        console.log("Payment history:", response)

        if (!response || !Array.isArray(response.payments)) {
          throw new Error("Invalid response format")
        }

        setPayments(response.payments)
      } catch (error) {
        console.error("Error fetching payment history:", error)
        // setError("Failed to load payment history")

        // Mock data for development
        setPayments([
          {
            id: 1,
            type: "module",
            itemName: "React Fundamentals - Module 1",
            courseName: "Introduction to React",
            amount: 29.99,
            date: "2024-02-01",
            status: "Successful",
            paymentMethod: "Credit Card (**** 1234)",
            transactionId: "TRX123456789",
          },
          {
            id: 2,
            type: "course",
            itemName: "Advanced JavaScript Concepts",
            courseName: "Advanced JavaScript Concepts",
            amount: 149.99,
            date: "2024-01-15",
            status: "Successful",
            paymentMethod: "Points",
            transactionId: "TRX987654321",
            pointsUsed: 15000,
          },
          {
            id: 3,
            type: "module",
            itemName: "React Native Setup - Module 1",
            courseName: "React Native Fundamentals",
            amount: 39.99,
            date: "2024-01-01",
            status: "Failed",
            paymentMethod: "Credit Card (**** 5678)",
            transactionId: "TRX456789123",
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchPaymentHistory()
  }, [navigate])

  // Filter payments based on selected filters
  const filteredPayments = payments.filter((payment) => {
    if (statusFilter !== "all" && payment.status.toLowerCase() !== statusFilter.toLowerCase()) {
      return false
    }

    if (timeFilter !== "all") {
      const paymentDate = new Date(payment.date)
      const now = new Date()
      const daysDiff = (now - paymentDate) / (1000 * 60 * 60 * 24)

      switch (timeFilter) {
        case "30days":
          if (daysDiff > 30) return false
          break
        case "3months":
          if (daysDiff > 90) return false
          break
        case "year":
          if (daysDiff > 365) return false
          break
        default:
          break
      }
    }

    return true
  })

  if (loading) {
    return (
      
        <Loader fullscreen/>
      
    )
  }

  return (
    
      <div className="payment-history-container">
        <Button variant="ghost" onClick={() => navigate("/student-dashboard")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back To Dashboard
        </Button>
        <br />
        <br />
        <div className="payment-header">
          <h1>Payment History</h1>
          <div className="payment-filters">
            <select className="filter-select" value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
              <option value="all">All Time</option>
              <option value="30days">Last 30 Days</option>
              <option value="3months">Last 3 Months</option>
              <option value="year">Last Year</option>
            </select>
            <select className="filter-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All Status</option>
              <option value="successful">Successful</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="payments-list">
          {filteredPayments.map((payment) => (
            <div key={payment.id} className="payment-card">
              <div className="payment-info">
                <div className="payment-primary">
                  <div className="payment-title">
                    <h3>{payment.itemName}</h3>
                    <span className="payment-type">{payment.type === "course" ? "Full Course" : "Module"}</span>
                  </div>
                  <span className={`payment-status ${payment.status.toLowerCase()}`}>
                    {payment.status === "Successful" ? <CheckCircle size={16} /> : <XCircle size={16} />}
                    {payment.status}
                  </span>
                </div>
                <div className="payment-details">
                  <div className="detail-item">
                    <Calendar size={16} />
                    <span>{new Date(payment.date).toLocaleDateString()}</span>
                  </div>
                  <div className="detail-item">
                    <CreditCard size={16} />
                    <span>{payment.paymentMethod}</span>
                  </div>
                  {payment.pointsUsed && (
                    <div className="detail-item points-used">
                      <span>{payment.pointsUsed} points used</span>
                    </div>
                  )}
                </div>
                <div className="payment-footer">
                  <span className="transaction-id">Transaction ID: {payment.transactionId}</span>
                  <span className="payment-amount">
                    {payment.pointsUsed ? (
                      <span className="points-amount">{payment.pointsUsed} points</span>
                    ) : (
                      `$${payment.amount.toFixed(2)}`
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {filteredPayments.length === 0 && (
            <div className="no-payments">
              <p>No payment history found</p>
            </div>
          )}
        </div>
      </div>
    
  )
}

export default PaymentHistory

