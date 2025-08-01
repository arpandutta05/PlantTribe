"use client"
import { Link, useNavigate } from "react-router-dom"
import { Leaf, User, LogOut, Home, Users } from "lucide-react"

const Header = ({ user, userType, onLogout }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate("/")
  }

  return (
    <header className="bg-gradient-to-r from-green-600 to-orange-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Leaf className="h-8 w-8" />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              PlantTribe
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            {user && (
              <>
                <Link to="/social" className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
                  <Users className="h-4 w-4" />
                  <span>Community</span>
                </Link>
                <Link
                  to={userType === "farmer" ? "/farmer-dashboard" : "/gardener-dashboard"}
                  className="flex items-center space-x-1 hover:text-yellow-300 transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="hidden md:block text-sm">Hello, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden md:block">Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-yellow-500 hover:bg-yellow-600 text-green-800 px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
