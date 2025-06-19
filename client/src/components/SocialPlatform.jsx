"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share2, Camera, Send } from "lucide-react"

const SocialPlatform = ({ user, userType }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: "Priya Sharma", type: "gardener", avatar: "👩" },
      content: "My rose bloomed its first flower today! 🌹 I'm so happy.",
      image: "/placeholder.svg?height=300&width=400",
      likes: 15,
      comments: 3,
      time: "2 hours ago",
      liked: false,
    },
    {
      id: 2,
      user: { name: "Ram Kisan", type: "farmer", avatar: "👨‍🌾" },
      content: "This year's wheat crop is excellent. PlantPal helped a lot in disease identification.",
      image: "/placeholder.svg?height=300&width=400",
      likes: 28,
      comments: 7,
      time: "4 hours ago",
      liked: true,
    },
    {
      id: 3,
      user: { name: "Sunita Devi", type: "gardener", avatar: "👵" },
      content:
        "How to make homemade organic fertilizer:\n1. Kitchen waste\n2. Dry leaves\n3. Soil\nMix everything and leave for 15 days. 🌱",
      likes: 42,
      comments: 12,
      time: "6 hours ago",
      liked: false,
    },
  ])

  const [newPost, setNewPost] = useState("")
  const [newPostImage, setNewPostImage] = useState(null)

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked }
          : post,
      ),
    )
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setNewPostImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmitPost = (e) => {
    e.preventDefault()
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        user: {
          name: user.name,
          type: userType,
          avatar: userType === "farmer" ? "👨‍🌾" : "👩‍🌾",
        },
        content: newPost,
        image: newPostImage,
        likes: 0,
        comments: 0,
        time: "अभी",
        liked: false,
      }
      setPosts([post, ...posts])
      setNewPost("")
      setNewPostImage(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-6 mb-8 shadow-xl">
          <h1 className="text-3xl font-bold mb-2">🌍 PlantPal Community</h1>
          <p className="text-green-100">Social Platform for Farmers and Gardeners</p>
        </div>

        {/* Create Post */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">📝 Share Your Experience</h3>
          <form onSubmit={handleSubmitPost}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white text-xl">
                {userType === "farmer" ? "👨‍🌾" : "👩‍🌾"}
              </div>
              <div className="flex-1">
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="What's new in your garden/field today?"
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows="3"
                />
                {newPostImage && (
                  <div className="mt-3">
                    <img
                      src={newPostImage || "/placeholder.svg"}
                      alt="New post"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-3">
                    <label className="cursor-pointer text-green-600 hover:text-green-700">
                      <Camera className="h-5 w-5" />
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all flex items-center space-x-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Post</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white text-xl">
                    {post.user.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-800">{post.user.name}</h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          post.user.type === "farmer" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {post.user.type === "farmer" ? "🌾 Farmer" : "🌱 Gardener"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{post.time}</p>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-6 pb-4">
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">{post.content}</p>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="px-6 pb-4">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="Post content"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Post Actions */}
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-2 transition-colors ${
                        post.liked ? "text-red-500" : "text-gray-500 hover:text-red-500"
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${post.liked ? "fill-current" : ""}`} />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-5 w-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              {post.comments > 0 && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-3">View {post.comments} comments</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white text-sm">
                      {userType === "farmer" ? "👨‍🌾" : "👩‍🌾"}
                    </div>
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="flex-1 p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all">
            View More Posts
          </button>
        </div>
      </div>
    </div>
  )
}

export default SocialPlatform
