import React from 'react'

const sampleSchedule = [
  { day: 'Day 1', time: '09:00 - 17:00', activity: 'Introduction & Team formation' },
  { day: 'Day 2', time: '09:00 - 17:00', activity: 'Workshops & Lectures' },
  { day: 'Day 3', time: '09:00 - 17:00', activity: 'Project work' },
  { day: 'Day 4', time: '09:00 - 16:00', activity: 'Presentations & Closing' },
]

export default function Schedule() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Schedule (sample)</h2>
      <div className="card">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Day</th>
              <th className="py-2">Time</th>
              <th className="py-2">Activity</th>
            </tr>
          </thead>
          <tbody>
            {sampleSchedule.map((row) => (
              <tr key={row.day} className="border-b last:border-0">
                <td className="py-2 align-top">{row.day}</td>
                <td className="py-2 align-top">{row.time}</td>
                <td className="py-2">{row.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
