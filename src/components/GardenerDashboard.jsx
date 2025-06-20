"use client"

import { useState } from "react"
import { Camera, Heart, TrendingUp, AlertTriangle, ShoppingBag, Users } from "lucide-react"
import { Link } from "react-router-dom"

const GardenerDashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState("health")
  const [uploadedImage, setUploadedImage] = useState(null)
  const [plantHealth, setPlantHealth] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target.result)
        // Simulate AI analysis
        setTimeout(() => {
          setPlantHealth({
            score: Math.floor(Math.random() * 30) + 70,
            issues: ["पानी की कमी", "धूप की जरूरत"],
            suggestions: ["दिन में 2 बार पानी दें", "धूप वाली जगह रखें"],
          })
        }, 2000)
      }
      reader.readAsDataURL(file)
    }
  }

  const tabs = [
    { id: "health", name: "Health Check", icon: <Heart className="h-5 w-5" /> },
    { id: "growth", name: "Growth Tracking", icon: <TrendingUp className="h-5 w-5" /> },
    { id: "disease", name: "Disease Detection", icon: <AlertTriangle className="h-5 w-5" /> },
    { id: "shop", name: "Buy Plants", icon: <ShoppingBag className="h-5 w-5" /> },
    { id: "social", name: "Community", icon: <Users className="h-5 w-5" /> },
  ]

  const availablePlants = [
    {
      name: "Rose",
      price: "₹150",
      farmer: "Ram Kisan",
      location: "Delhi",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Tulsi",
      price: "₹80",
      farmer: "Shyam Kisan",
      location: "Gurgaon",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Lemon",
      price: "₹200",
      farmer: "Geeta Devi",
      location: "Noida",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Chili",
      price: "₹120",
      farmer: "Suresh Kumar",
      location: "Faridabad",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-500 to-pink-500 text-white rounded-2xl p-8 mb-8 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">🌸 Hello, {user.name}!</h1>
              <p className="text-green-100 text-lg">Ready to take care of your garden. Which plant to check today?</p>
            </div>
            <div className="text-6xl">🌺</div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">🌱</div>
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-gray-600">Total Plants</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">💚</div>
            <div className="text-2xl font-bold text-green-600">85%</div>
            <div className="text-gray-600">Healthy Plants</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">📈</div>
            <div className="text-2xl font-bold text-blue-600">+15%</div>
            <div className="text-gray-600">Growth This Week</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-orange-600">Level 3</div>
            <div className="text-gray-600">Gardening Level</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-pink-500 text-pink-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Health Check Tab */}
            {activeTab === "health" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💚 Plant Health Check</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <Camera className="h-5 w-5 mr-2" />📸 Upload Plant Photo
                    </h4>
                    <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="plant-health-upload"
                      />
                      <label htmlFor="plant-health-upload" className="cursor-pointer">
                        <Camera className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <p className="text-green-700">Take or upload plant photo</p>
                        <p className="text-sm text-green-600 mt-2">AI will analyze immediately</p>
                      </label>
                    </div>
                    {uploadedImage && (
                      <div className="mt-4">
                        <img
                          src={uploadedImage || "/placeholder.svg"}
                          alt="Uploaded plant"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">📊 Health Meter</h4>
                    {plantHealth ? (
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-green-600 mb-2">{plantHealth.score}%</div>
                          <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                              className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-1000"
                              style={{ width: `${plantHealth.score}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">Overall Health Score</p>
                        </div>

                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-semibold text-red-600 mb-2">⚠️ Issues:</h5>
                          <ul className="text-sm space-y-1">
                            {plantHealth.issues.map((issue, index) => (
                              <li key={index}>• {issue}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-semibold text-green-600 mb-2">💡 Suggestions:</h5>
                          <ul className="text-sm space-y-1">
                            {plantHealth.suggestions.map((suggestion, index) => (
                              <li key={index}>• {suggestion}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : uploadedImage ? (
                      <div className="text-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
                        <p className="text-gray-600">AI analyzing...</p>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">Upload a photo first for health check</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Growth Tracking Tab */}
            {activeTab === "growth" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📈 Growth Tracking</h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl p-6">
                    <TrendingUp className="h-8 w-8 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">This Week</h4>
                    <p className="text-3xl font-bold">+8%</p>
                    <p className="text-blue-100">Average Growth</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl p-6">
                    <Heart className="h-8 w-8 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Healthy Plants</h4>
                    <p className="text-3xl font-bold">10/12</p>
                    <p className="text-green-100">Out of Total</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-xl p-6">
                    <Camera className="h-8 w-8 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Photos Taken</h4>
                    <p className="text-3xl font-bold">45</p>
                    <p className="text-purple-100">This Month</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold mb-4">🌱 Plant List</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {["Rose", "Tulsi", "Lemon", "Chili"].map((plant, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-3">
                            🌿
                          </div>
                          <div>
                            <p className="font-medium">{plant}</p>
                            <p className="text-sm text-gray-600">Healthy</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">+5%</p>
                          <p className="text-xs text-gray-500">This Week</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Disease Detection Tab */}
            {activeTab === "disease" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🔍 Disease Detection & Home Remedies</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
                    <h4 className="text-lg font-semibold text-red-800 mb-4">⚠️ Diseases Found</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3">
                        <p className="font-medium text-red-700">Leaf Spots</p>
                        <p className="text-sm text-red-600">In Rose Plant</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="font-medium text-orange-700">Insect Infestation</p>
                        <p className="text-sm text-orange-600">In Tulsi Plant</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <Heart className="h-8 w-8 text-green-500 mb-4" />
                    <h4 className="text-lg font-semibold text-green-800 mb-4">🏠 Home Remedies</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3">
                        <p className="font-medium text-green-700">Neem Water</p>
                        <p className="text-sm text-green-600">Effective for insects</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="font-medium text-blue-700">Turmeric Paste</p>
                        <p className="text-sm text-blue-600">For leaf spots</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold mb-4">🌿 Organic Fertilizer Information</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-brown-50 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">🥬</div>
                      <p className="font-medium">Kitchen Waste</p>
                      <p className="text-sm text-gray-600">Vegetable peels</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">🍂</div>
                      <p className="font-medium">Dry Leaves</p>
                      <p className="text-sm text-gray-600">From garden</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">☕</div>
                      <p className="font-medium">Tea Leaves</p>
                      <p className="text-sm text-gray-600">After use</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4">🏪 Nearby Medicine and Fertilizer Shop</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-medium">Garden Center, Connaught Place</p>
                      <p className="text-sm text-gray-600">Distance: 5 km</p>
                      <p className="text-sm text-green-600">Open Now</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-medium">Plant Nursery, Lajpat Nagar</p>
                      <p className="text-sm text-gray-600">Distance: 8 km</p>
                      <p className="text-sm text-green-600">Opens at 9 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Plant Shop Tab */}
            {activeTab === "shop" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🛒 Buy Plants from Farmers</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {availablePlants.map((plant, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={plant.image || "/placeholder.svg"}
                        alt={plant.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h5 className="font-semibold text-lg mb-2">{plant.name}</h5>
                        <p className="text-2xl font-bold text-green-600 mb-2">{plant.price}</p>
                        <div className="text-sm text-gray-600 mb-3">
                          <p>Farmer: {plant.farmer}</p>
                          <p>Location: {plant.location}</p>
                        </div>
                        <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all">
                          🛒 Buy
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4">🌟 Special Offers</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-medium text-purple-700">Flowering Plants</p>
                      <p className="text-sm text-purple-600">20% off - Today Only</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-medium text-pink-700">Herb Plants</p>
                      <p className="text-sm text-pink-600">Buy 3, Get 1 Free</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Social Tab */}
            {activeTab === "social" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800">👥 Gardening Community</h3>
                  <Link
                    to="/social"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
                  >
                    View Full Community
                  </Link>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold mb-4">📝 Today's Activities</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-medium">Priya Sharma shared a photo of her rose</p>
                      <p className="text-sm text-gray-600">2 hours ago • 15 Likes</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-medium">Raj Kumar gave tips on taking care of Tulsi</p>
                      <p className="text-sm text-gray-600">4 hours ago • 8 Comments</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-medium">Sunita Devi shared an organic fertilizer recipe</p>
                      <p className="text-sm text-gray-600">6 hours ago • 12 Likes</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">🏆 Top Gardeners of the Week</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>1. Anita Ji</span>
                        <span className="text-yellow-600">🥇 250 Points</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>2. Ramesh Ji</span>
                        <span className="text-gray-600">🥈 200 Points</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>3. {user.name}</span>
                        <span className="text-orange-600">🥉 180 Points</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">💬 Today's Questions</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm font-medium">My rose leaves are turning yellow?</p>
                        <p className="text-xs text-gray-600">Sumitra Devi</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm font-medium">What to do about insects in Tulsi?</p>
                        <p className="text-xs text-gray-600">Vikas Kumar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GardenerDashboard
