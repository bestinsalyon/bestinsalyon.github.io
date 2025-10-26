import React from 'react'

export default function Course() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Course description</h2>
      <div className="card">
        <p className="text-gray-700">
          This is placeholder content for the BEST Course in Spring 2026. Replace with the real description later.
        </p>

        <h3 className="text-lg font-semibold mt-4">Learning outcomes</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Hands-on project experience</li>
          <li>Interdisciplinary teamwork</li>
          <li>Improved presentation and leadership skills</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">Format</h3>
        <p className="text-gray-600">Mix of lectures, workshops, and group projects. International students welcome.</p>
      </div>
    </section>
  )
}
