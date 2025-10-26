import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/src/assets/logo.svg" alt="BEST Lyon" className="w-12 h-12" />
          <div>
            <h1 className="text-lg font-semibold">BEST Lyon</h1>
            <p className="text-sm text-gray-500">Spring 2026 Course</p>
          </div>
        </div>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={({isActive}) => isActive ? 'px-3 py-2 rounded-md bg-blue-600 text-white' : 'px-3 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white'}>Home</NavLink>
          <NavLink to="/course" className={({isActive}) => isActive ? 'px-3 py-2 rounded-md bg-blue-600 text-white' : 'px-3 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white'}>Course</NavLink>
          <NavLink to="/schedule" className={({isActive}) => isActive ? 'px-3 py-2 rounded-md bg-blue-600 text-white' : 'px-3 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white'}>Schedule</NavLink>
          <NavLink to="/survival" className={({isActive}) => isActive ? 'px-3 py-2 rounded-md bg-blue-600 text-white' : 'px-3 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white'}>Survival</NavLink>
        </nav>
      </div>
    </header>
  )
}
