"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import FarmerDashboard from "./components/FarmerDashboard"
import GardenerDashboard from "./components/GardenerDashboard"
import SocialPlatform from "./components/SocialPlatform"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [user, setUser] = useState(null)
  const [userType, setUserType] = useState(null)

  const handleLogin = (userData, type) => {
    setUser(userData)
    setUserType(type)
  }

  const handleLogout = () => {
    setUser(null)
    setUserType(null)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
        <Header user={user} userType={userType} onLogout={handleLogout} />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={
                user ? (
                  <Navigate to={userType === "farmer" ? "/farmer-dashboard" : "/gardener-dashboard"} />
                ) : (
                  <LoginPage onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/farmer-dashboard"
              element={user && userType === "farmer" ? <FarmerDashboard user={user} /> : <Navigate to="/login" />}
            />
            <Route
              path="/gardener-dashboard"
              element={user && userType === "gardener" ? <GardenerDashboard user={user} /> : <Navigate to="/login" />}
            />
            <Route
              path="/social"
              element={user ? <SocialPlatform user={user} userType={userType} /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
