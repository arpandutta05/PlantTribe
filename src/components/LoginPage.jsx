"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { User, Lock, Sprout, Tractor } from "lucide-react"

const LoginPage = ({ onLogin }) => {
  const [userType, setUserType] = useState("farmer")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  })
  const [isSignup, setIsSignup] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate login/signup
    const userData = {
      name: formData.name || formData.email.split("@")[0],
      email: formData.email,
      type: userType,
    }
    onLogin(userData, userType)
    navigate(userType === "farmer" ? "/farmer-dashboard" : "/gardener-dashboard")
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-orange-500 p-3 rounded-full">
                <Sprout className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{isSignup ? "Register with PlantPal" : "Login"}</h2>
            <p className="text-gray-600">{isSignup ? "Create New Account" : "Login to your account"}</p>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Who are you?</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserType("farmer")}
                className={`flex items-center justify-center p-4 rounded-lg border-2 transition-all ${
                  userType === "farmer"
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-gray-200 hover:border-green-300"
                }`}
              >
                <Tractor className="h-6 w-6 mr-2" />
                <span className="font-semibold">Farmer</span>
              </button>
              <button
                type="button"
                onClick={() => setUserType("gardener")}
                className={`flex items-center justify-center p-4 rounded-lg border-2 transition-all ${
                  userType === "gardener"
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-gray-200 hover:border-green-300"
                }`}
              >
                <Sprout className="h-6 w-6 mr-2" />
                <span className="font-semibold">Gardener</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your name"
                    required={isSignup}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
            >
              {isSignup ? "🌱 Create Account" : "🚀 Login"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button onClick={() => setIsSignup(!isSignup)} className="text-green-600 hover:text-green-700 font-medium">
              {isSignup ? "Already have an account? Login" : "Want to create a new account? Register"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
