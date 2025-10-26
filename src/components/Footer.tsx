import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black/20 border-t border-purple-500/20 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} BEST Lyon</div>
        <div>Contact: <a href="#" className="text-purple-400 hover:text-purple-300">info@best-lyon.example</a></div>
      </div>
    </footer>
  )
}
