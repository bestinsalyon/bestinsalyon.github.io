import React from 'react'

export default function SurvivalGuide() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Survival Guide</h2>
      <div className="card">
        <h3 className="font-semibold">Before you come</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Arrange accommodation early.</li>
          <li>Bring a student ID and any required documents.</li>
        </ul>

        <h3 className="font-semibold mt-4">While staying in Lyon</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Public transport: get a local pass for discounts.</li>
          <li>Food: budget-friendly student options available.</li>
        </ul>

        <h3 className="font-semibold mt-4">Safety & Health</h3>
        <p className="text-gray-600">Emergency numbers, nearest hospitals, and insurance reminders go here.</p>
      </div>
    </section>
  )
}
