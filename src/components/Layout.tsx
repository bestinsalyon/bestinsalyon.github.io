import React from 'react'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Do not render the old Header here; the landing page provides its own full-bleed nav */}
      {/* Keep main full-width so pages can render full-bleed backgrounds */}
      <main className="w-full px-4 py-8 flex-1">{children}</main>
      <Footer />
    </div>
  )
}
