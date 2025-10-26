import React from 'react'

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">BEST Course — Spring 2026</h2>
          <p className="text-gray-600 mt-1">An intensive multidisciplinary course for STEM students in Lyon. Dummy content.</p>
        </div>
        <div className="text-right">
          <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg">Apply</div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="text-gray-600">This course covers engineering topics, soft skills, and hands-on workshops. Placeholder description to be replaced.</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">Who should apply</h3>
          <p className="text-gray-600">Undergraduate and graduate STEM students interested in practical projects and international collaboration.</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">Practical info</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Location: Lyon</li>
            <li>Dates: Spring 2026 (exact dates TBD)</li>
            <li>Cost: Minimal participation fee</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
