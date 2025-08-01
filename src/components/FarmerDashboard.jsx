"use client"

import { useState } from "react"
import { Camera, TrendingUp, AlertTriangle, ShoppingCart, Mic, Globe, BarChart3, Leaf } from "lucide-react"

const FarmerDashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState("analysis")
  const [isListening, setIsListening] = useState(false)
  const [uploadedImage, setUploadedImage] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setUploadedImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const toggleVoiceBot = () => {
    setIsListening(!isListening)
    // Simulate voice recognition
    if (!isListening) {
      setTimeout(() => setIsListening(false), 3000)
    }
  }

  const tabs = [
    { id: "analysis", name: "Plant Analysis", icon: <Leaf className="h-5 w-5" /> },
    { id: "growth", name: "Growth Rate", icon: <TrendingUp className="h-5 w-5" /> },
    { id: "disease", name: "Disease Detection", icon: <AlertTriangle className="h-5 w-5" /> },
    { id: "sales", name: "Crop Sales", icon: <ShoppingCart className="h-5 w-5" /> },
    { id: "market", name: "Market Guide", icon: <Globe className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-8">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-orange-500 text-white rounded-2xl p-8 mb-8 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">🙏 Hello, {user.name} !</h1>
              <p className="text-green-100 text-lg">How is your farm's health today? Let's find out.</p>
            </div>
            <div className="text-6xl">🌾</div>
          </div>
        </div>

        {/* Voice Bot */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">🎤 Voice Assistant</h3>
              <p className="text-gray-600">Ask questions with your voice</p>
            </div>
            <button
              onClick={toggleVoiceBot}
              className={`p-4 rounded-full transition-all ${
                isListening ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-green-500 hover:bg-green-600"
              } text-white shadow-lg`}
            >
              <Mic className="h-6 w-6" />
            </button>
          </div>
          {isListening && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-green-700">🎧 Listening... Say something</p>
            </div>
          )}
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
                      ? "border-green-500 text-green-600"
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
            {/* Plant Analysis Tab */}
            {activeTab === "analysis" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🔍 Plant Analysis</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">📸 Upload Photo</h4>
                    <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="plant-upload"
                      />
                      <label htmlFor="plant-upload" className="cursor-pointer">
                        <Camera className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <p className="text-green-700">Take or upload a photo of the plant</p>
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

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">📊 Analysis Result</h4>
                    {uploadedImage ? (
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Plant Health</span>
                            <span className="text-green-600 font-bold">85%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-2">Suggestions:</p>
                          <ul className="text-sm space-y-1">
                            <li>• Increase watering</li>
                            <li>• Expose to sunlight</li>
                            <li>• Apply organic fertilizer</li>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">Upload a photo first for analysis</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Growth Rate Tab */}
            {activeTab === "growth" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📈 Plant Growth Rate</h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl p-6">
                    <BarChart3 className="h-8 w-8 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">This Week</h4>
                    <p className="text-3xl font-bold">+12%</p>
                    <p className="text-green-100">Growth Rate</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl p-6">
                    <TrendingUp className="h-8 w-8 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">This Month</h4>
                    <p className="text-3xl font-bold">+45%</p>
                    <p className="text-blue-100">Total Growth</p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-xl p-6">
                    <Leaf className="h-8 w-8 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Healthy Plants</h4>
                    <p className="text-3xl font-bold">87%</p>
                    <p className="text-orange-100">Out of Total</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold mb-4">📊 Growth Chart</h4>
                  <div className="h-64 bg-gradient-to-t from-green-100 to-green-50 rounded-lg flex items-end justify-center">
                    <p className="text-gray-500">Chart will be displayed here</p>
                  </div>
                </div>
              </div>
            )}

            {/* Disease Detection Tab */}
            {activeTab === "disease" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🔍 Disease Detection and Treatment</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
                    <h4 className="text-lg font-semibold text-red-800 mb-2">Diseases Found</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3">
                        <p className="font-medium text-red-700">Leaf Spot Disease</p>
                        <p className="text-sm text-red-600">Severity: Moderate</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="font-medium text-orange-700">Insect Infestation</p>
                        <p className="text-sm text-orange-600">Severity: Low</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <Leaf className="h-8 w-8 text-green-500 mb-4" />
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Treatment Suggestions</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3">
                        <p className="font-medium text-green-700">Neem Oil Spray</p>
                        <p className="text-sm text-green-600">2 times a week</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="font-medium text-blue-700">Organic Pesticide</p>
                        <p className="text-sm text-blue-600">Once every 15 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Crop Sales Tab */}
            {activeTab === "sales" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💰 Crop Sales</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">🌾 Crops for Sale</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Wheat</p>
                          <p className="text-sm text-gray-600">500 kg</p>
                        </div>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                          Sell
                        </button>
                      </div>
                      <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Rice</p>
                          <p className="text-sm text-gray-600">300 kg</p>
                        </div>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                          Sell
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">📊 Sales Report</h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span>This Month's Earnings</span>
                          <span className="font-bold text-green-600">₹25,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-2">Target: ₹35,000</p>
                        <p className="text-sm text-green-600">71% Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Market Guide Tab */}
            {activeTab === "market" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🌍 Local Market Guide</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">📍 Nearby Market</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4">
                        <p className="font-medium">Vegetable Market, Delhi</p>
                        <p className="text-sm text-gray-600">Distance: 15 km</p>
                        <p className="text-sm text-green-600">Open Today</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="font-medium">Grain Market, Gurgaon</p>
                        <p className="text-sm text-gray-600">Distance: 25 km</p>
                        <p className="text-sm text-green-600">Opens Tomorrow</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">💰 Today's Prices</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 flex justify-between">
                        <span>Wheat</span>
                        <span className="font-bold text-green-600">₹2,100/Quintal</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 flex justify-between">
                        <span>Rice</span>
                        <span className="font-bold text-green-600">₹3,500/Quintal</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 flex justify-between">
                        <span>Onion</span>
                        <span className="font-bold text-green-600">₹40/kg</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold mb-4">🗣️ Local Language Guide</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <button className="bg-orange-100 hover:bg-orange-200 p-4 rounded-lg text-center transition-colors">
                      <p className="font-medium">Hindi</p>
                      <p className="text-sm text-gray-600">Market Guide</p>
                    </button>
                    <button className="bg-green-100 hover:bg-green-200 p-4 rounded-lg text-center transition-colors">
                      <p className="font-medium">Punjabi</p>
                      <p className="text-sm text-gray-600">ਮਾਰਕੀਟ ਗਾਈਡ</p>
                    </button>
                    <button className="bg-blue-100 hover:bg-blue-200 p-4 rounded-lg text-center transition-colors">
                      <p className="font-medium">Marathi</p>
                      <p className="text-sm text-gray-600">बाजार मार्गदर्शक</p>
                    </button>
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

export default FarmerDashboard
