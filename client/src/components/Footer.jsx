import { Leaf, Heart, Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-orange-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">PlantTribe</span>
            </div>
            <p className="text-green-100 mb-4">
              Digital companion for Indian farmers and gardeners. Better farming with AI technology.
            </p>
            <div className="flex items-center space-x-2 text-green-200">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Made in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-green-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-green-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Plant Analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Disease Identification
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Growth Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Market Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-green-100">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>help@planttribe.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2024 PlantTribe. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
