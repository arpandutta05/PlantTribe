import { Link } from "react-router-dom"
import { Sprout, Users, TrendingUp, Shield, Heart, Globe } from "lucide-react"

const HomePage = () => {
  const features = [
    {
      icon: <Sprout className="h-12 w-12 text-green-600" />,
      title: "Plant Analysis",
      description: "Check the health of your plants with AI",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Growth Tracking",
      description: "Track the growth of your plants",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: "Disease Identification",
      description: "Identify and treat plant diseases",
      color: "from-red-400 to-red-600",
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Farmer Community",
      description: "Community of farmers and gardeners",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <Heart className="h-12 w-12 text-pink-600" />,
      title: "Organic Fertilizer",
      description: "Information on homemade organic fertilizer",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: <Globe className="h-12 w-12 text-orange-600" />,
      title: "Local Market",
      description: "Local market information",
      color: "from-orange-400 to-orange-600",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-orange-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              PlantTribe
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              🌱 Digital Companion for Indian Farmers and Gardeners 🌱
            </p>
            <p className="text-lg mb-10 text-green-50 max-w-2xl mx-auto">
              Take care of your plants with AI technology, identify diseases, and farm for a better future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="bg-yellow-500 hover:bg-yellow-600 text-green-800 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full text-lg font-semibold transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl animate-bounce">🌿</div>
        <div className="absolute top-20 right-20 text-4xl animate-pulse">🌺</div>
        <div className="absolute bottom-10 left-20 text-5xl animate-bounce delay-1000">🌾</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-pulse delay-500">🍃</div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🌟 Our Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combining traditional farming with modern technology for better results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-500"
              >
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-100">Happy Farmers</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-green-100">Plants Analyzed</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Accuracy Rate</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">🌱 Start your PlantTribe journey today!</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Thousands of farmers and gardeners are already using PlantTribe. Join us and improve your farming.
          </p>
          <Link
            to="/login"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            Start Now - Free!
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
