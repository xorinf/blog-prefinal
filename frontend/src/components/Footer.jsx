import React from 'react'

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              BlogApp
            </span>
            <p className="text-gray-500 text-sm">© 2026 Employee Management Systems. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer