import React, { useState, useEffect } from 'react'
import { Download, Calendar, MapPin, Users, Zap, Music, Book, Info, Mail, Award, Clock, GraduationCap } from 'lucide-react'

export default function BESTLyonLanding(): JSX.Element {
  const [scrollY, setScrollY] = useState<number>(0)
  const [activeSection, setActiveSection] = useState<string>('home')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scheduleData: any = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
    timeSlots: [
      { start: '7:00', end: '8:00', activities: ['ZZZZZ', 'ZZZZZ', 'ZZZZZ', 'ZZZZZ', 'ZZZZZ', '', '', ''] },
      { start: '8:00', end: '9:00', activities: ['Wake Up + Breakfast', 'Wake Up + Breakfast', 'Wake Up + Breakfast', 'Wake Up + Breakfast', 'Wake Up + Breakfast', '', 'Weekend Trip', ''] },
      { start: '9:00', end: '10:30', activities: ['Official Opening', 'Academics', 'Academics', 'Academics', 'Academics', '', '', ''] },
      { start: '9:30', end: '10:00', activities: ['Introduction', '', '', '', '', '', '', ''] },
      { start: '10:30', end: '11:00', activities: ['Coffee Break', 'Coffee Break', 'Coffee Break', 'Coffee Break', 'Coffee Break', '', '', ''] },
      { start: '11:00', end: '13:00', activities: ['Academics', 'Academics', 'Academics', 'Academics', 'Academics', '', '', ''] },
      { start: '12:00', end: '13:30', activities: ['Social Activities', '', '', '', '', '', '', ''] },
      { start: '13:00', end: '14:00', activities: ['Lunch', 'Lunch', 'Lunch', 'Lunch', 'Lunch', '', '', ''] },
      { start: '13:30', end: '14:00', activities: ['Lunch', '', '', '', '', '', '', ''] },
      { start: '14:00', end: '15:30', activities: ['Academics', 'Academics', 'Academics', 'Academics', 'Evaluation', '', 'Arrival at Lyon', 'DEPARTURE'] },
      { start: '14:30', end: '15:00', activities: ['Social Activities', '', '', '', '', 'Weekend Trip', '', ''] },
      { start: '15:00', end: '16:00', activities: ['Coffee Break', 'Coffee Break', 'Coffee Break', 'Coffee Break', 'Coffee Break', '', '', ''] },
      { start: '16:00', end: '17:00', activities: ['Academics', 'Academics', 'Academics', 'Academics', 'Evaluation', '', '', ''] },
      { start: '16:30', end: '17:00', activities: ['ARRIVAL', '', '', '', '', '', 'Transport', ''] },
      { start: '17:00', end: '19:00', activities: ['Free time', '', '', '', 'Get ready for WT!', '', '', ''] },
      { start: '18:30', end: '19:00', activities: ['Get2Know Games', 'Social Activities', 'Free time', 'Social Activities', 'Free time', 'Social Activities', '', ''] },
      { start: '19:00', end: '20:30', activities: ['', '', '', '', '', '', '', ''] },
      { start: '20:00', end: '21:00', activities: ['Dinner', 'Dinner', 'Dinner', 'Dinner', 'Dinner', 'Dinner', 'Weekend Trip', 'Arrival at Lyon'] },
      { start: '21:00', end: '22:30', activities: ['Social activities', 'Social activities', 'Social activities', 'Social activities', 'Social activities', 'Social activities', '', 'Social activities'] }
    ]
  }

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">BEST Lyon</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'schedule', 'survival', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors ${
                    activeSection === section ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'survival' ? 'Survival Guide' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Fast & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Fourier-ous</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">Mastering the Speed of Sound</p>
            <p className="text-xl text-purple-300 mb-8">BEST Course on Technology • Spring 2026 • Lyon, France</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>April 11-19, 2026</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>INSA Lyon</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>8 Days</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Award className="w-5 h-5 text-pink-400" />
                <span>1-2 ECTS</span>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              Discover the Course
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Music, title: 'Embedded Audio', desc: 'Build real-time audio systems on Teensy 4.0' },
              { icon: Zap, title: 'DSP & Synthesis', desc: 'Master signal processing and sound synthesis' },
              { icon: Book, title: 'Complete Projects', desc: 'Create and demonstrate your own audio device' }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 transition-all transform hover:scale-105 hover:border-purple-400/40"
                style={{animationDelay: `${idx * 0.2}s"`}}
              >
                {/* @ts-ignore */}
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Info className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold">About the Course</h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Join us for an intensive 8-day journey into real-time audio signal processing and embedded system programming using the Teensy 4.0 platform. This BEST Course combines lectures and hands-on sessions where you'll learn to design digital audio systems, implement effects and synthesis algorithms, and build creative sound devices. Whether you're passionate about music technology, embedded systems, or digital signal processing, this course will give you the practical skills to bring your audio ideas to life.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">What You'll Learn</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Real-time audio signal processing</li>
                  <li>• C++ programming for embedded systems</li>
                  <li>• Sound synthesis algorithms</li>
                  <li>• Hardware control and interfacing</li>
                  <li>• Digital audio system design</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-400/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-pink-300">Course Details</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <span className="font-semibold">Duration:</span> 8 days</li>
                  <li>• <span className="font-semibold">Learning hours:</span> 25 on-site</li>
                  <li>• <span className="font-semibold">Credits:</span> 1-2 ECTS</li>
                  <li>• <span className="font-semibold">Level:</span> Intermediate</li>
                  <li>• <span className="font-semibold">Assessment:</span> Project demo</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-xl p-6 mt-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-300 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2" />
                Prerequisites & Academic Level
              </h3>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold">Required:</span> Basic programming skills (C/C++) and basic understanding of signals or electronics.
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Note:</span> No advanced DSP knowledge required; concepts are introduced during the course. This intermediate-level course is perfect for students with a technical background and motivation to learn applied audio technology.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-pink-300">Fields of Study</h3>
              <div className="flex flex-wrap gap-2">
                {['Electrical Engineering', 'Computer Science', 'Audio Engineering'].map((field, idx) => (
                  <span key={idx} className="bg-purple-500/20 border border-purple-400/30 px-4 py-2 rounded-full text-sm">{field}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Calendar className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold">Course Schedule</h2>
          </div>

          <div className="overflow-x-auto schedule-scroll">
            <div className="schedule-wrap bg-white/5 schedule-container-bg backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              {/* Build a CSS grid where first column is time labels (sticky) and next columns are days */}
              <div className="schedule-grid" style={{ gridTemplateColumns: `110px repeat(${scheduleData.days.length}, minmax(120px, 1fr))` }}>
                {/* Render header row: empty cell for time then day names */}
                <div className="time-column" style={{ gridRow: 1, gridColumn: 1 }} />
                {scheduleData.days.map((day: string, idx: number) => (
                  <div key={idx} style={{ gridRow: 1, gridColumn: idx + 2 }} className="text-center font-semibold text-purple-300 p-2">
                    {day}
                  </div>
                ))}

                {/* Compute unit mapping for slots (base unit = 30 minutes) so events span correctly */}
                {(() => {
                  const unitMinutes = 30
                  const slotUnits: number[] = scheduleData.timeSlots.map((s: any) => {
                    const startParts = s.start.split(':').map((v: string) => parseInt(v, 10))
                    const endParts = s.end.split(':').map((v: string) => parseInt(v, 10))
                    const startMin = startParts[0] * 60 + startParts[1]
                    const endMin = endParts[0] * 60 + endParts[1]
                    const minutes = Math.max(0, endMin - startMin)
                    return Math.max(1, Math.round(minutes / unitMinutes))
                  })

                  // cumulative units per slot index
                  const cumUnits: number[] = []
                  let acc = 0
                  for (let i = 0; i < slotUnits.length; i++) {
                    cumUnits[i] = acc
                    acc += slotUnits[i]
                  }
                  const totalUnits = acc

                  // set gridTemplateRows: first row is header (48px), then totalUnits rows of unit height
                  const unitH = 36
                  const gridTemplateRows = ['48px']
                  for (let u = 0; u < totalUnits; u++) gridTemplateRows.push(`${unitH}px`)

                  // Render time labels positioned with unit-based spans
                  const timeLabels = scheduleData.timeSlots.map((slot: any, rowIdx: number) => {
                    const startUnit = cumUnits[rowIdx]
                    const span = slotUnits[rowIdx]
                    return (
                      <div key={rowIdx} style={{ gridRow: `${startUnit + 2} / ${startUnit + 2 + span}`, gridColumn: 1 }} className="time-cell time-column">
                        {slot.start}
                      </div>
                    )
                  })

                  // Compute events by scanning contiguous ranges per day and render as grid items
                  const events: Array<any> = []
                  const dayCount = scheduleData.days.length
                  const slotCount = scheduleData.timeSlots.length

                  for (let d = 0; d < dayCount; d++) {
                    let i = 0
                    while (i < slotCount) {
                      const rawLabel = scheduleData.timeSlots[i].activities[d]
                      const label = rawLabel ? String(rawLabel).trim() : ''
                      if (!label) { i++; continue }
                      // find end of contiguous same-label run (case-insensitive trim comparison)
                      let j = i + 1
                      while (j < slotCount) {
                        const next = scheduleData.timeSlots[j].activities[d]
                        if (!next) break
                        if (String(next).trim().toLowerCase() !== label.toLowerCase()) break
                        j++
                      }
                      events.push({ day: d, start: i, end: j, label })
                      i = j
                    }
                  }

                  return (
                    <>
                      {timeLabels}
                      {events.map((ev, idx) => {
                        // Convert slot indices to unit indices
                        const unitStart = cumUnits[ev.start]
                        const unitEnd = ev.end <= cumUnits.length ? cumUnits[ev.end] || totalUnits : totalUnits
                        const rowStart = unitStart + 2 // header row sits at 1
                        const rowEnd = unitEnd + 2
                        const col = ev.day + 2
                        const bgColor =
                          ev.label.toLowerCase().includes('zzzzz') ? 'bg-purple-700/80' :
                          ev.label.toLowerCase().includes('wake up') ? 'bg-pink-700/70' :
                          (ev.label.toLowerCase().includes('official opening') || ev.label.toLowerCase().includes('introduction')) ? 'bg-amber-700/70' :
                          ev.label.toLowerCase().includes('academics') ? 'bg-orange-600/70' :
                          ev.label.toLowerCase().includes('coffee break') ? 'bg-blue-600/70' :
                          ev.label.toLowerCase().includes('social activities') ? 'bg-emerald-600/70' :
                          ev.label.toLowerCase().includes('lunch') ? 'bg-pink-600/70' :
                          ev.label.toLowerCase().includes('dinner') ? 'bg-violet-600/70' :
                          ev.label.toLowerCase().includes('free time') ? 'bg-yellow-600/70' :
                          ev.label.toLowerCase().includes('evaluation') ? 'bg-orange-800/70' :
                          ev.label.toLowerCase().includes('weekend trip') ? 'bg-cyan-600/70' :
                          (ev.label.toLowerCase().includes('arrival') ? 'bg-red-600/70' : '') ||
                          ev.label.toLowerCase().includes('departure') ? 'bg-red-700/70' :
                          ev.label.toLowerCase().includes('get ready') ? 'bg-red-500/70' :
                          ev.label.toLowerCase().includes('get2know') ? 'bg-pink-700/70' :
                          ev.label.toLowerCase().includes('transport') ? 'bg-orange-700/70' :
                          'bg-gray-600/60'

                        return (
                          <div
                            key={idx}
                            className={`event-block ${bgColor}`}
                            style={{ gridColumn: `${col} / ${col + 1}`, gridRow: `${rowStart} / ${rowEnd}`, gridTemplateRows: gridTemplateRows.join(' ') }}
                            title={ev.label}
                          >
                            {ev.label}
                          </div>
                        )
                      })}
                    </>
                  )
                })()}
                {(() => {
                  const events: Array<any> = []
                  const dayCount = scheduleData.days.length
                  const slotCount = scheduleData.timeSlots.length

                  for (let d = 0; d < dayCount; d++) {
                    let i = 0
                    while (i < slotCount) {
                      const label = scheduleData.timeSlots[i].activities[d]
                      if (!label) { i++; continue }
                      // find end of contiguous same-label run
                      let j = i + 1
                      while (j < slotCount && scheduleData.timeSlots[j].activities[d] === label) j++
                      events.push({ day: d, start: i, end: j, label })
                      i = j
                    }
                  }

                  return events.map((ev, idx) => {
                    const rowStart = ev.start + 2 // account for header row
                    const rowEnd = ev.end + 2
                    const col = ev.day + 2
                    const bgColor =
                      ev.label.includes('ZZZZZ') ? 'bg-purple-700/80' :
                      ev.label.includes('Wake Up') ? 'bg-pink-700/70' :
                      ev.label.includes('Official Opening') || ev.label.includes('Introduction') ? 'bg-amber-700/70' :
                      ev.label.includes('Academics') ? 'bg-orange-600/70' :
                      ev.label.includes('Coffee Break') ? 'bg-blue-600/70' :
                      ev.label.includes('Social Activities') ? 'bg-emerald-600/70' :
                      ev.label.includes('Lunch') ? 'bg-pink-600/70' :
                      ev.label.includes('Dinner') ? 'bg-violet-600/70' :
                      ev.label.includes('Free time') ? 'bg-yellow-600/70' :
                      ev.label.includes('Evaluation') ? 'bg-orange-800/70' :
                      ev.label.includes('Weekend Trip') ? 'bg-cyan-600/70' :
                      ev.label.includes('ARRIVAL') || ev.label.includes('Arrival') ? 'bg-red-600/70' :
                      ev.label.includes('DEPARTURE') ? 'bg-red-700/70' :
                      ev.label.includes('Get ready') ? 'bg-red-500/70' :
                      ev.label.includes('Get2Know') ? 'bg-pink-700/70' :
                      ev.label.includes('Transport') ? 'bg-orange-700/70' :
                      'bg-gray-600/60'

                    return (
                      <div
                        key={idx}
                        className={`event-block ${bgColor}`}
                        style={{ gridColumn: `${col} / ${col + 1}`, gridRow: `${rowStart} / ${rowEnd}` }}
                        title={ev.label}
                      >
                        {ev.label}
                      </div>
                    )
                  })
                })()}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="#"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 rounded-full inline-flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              <Download className="w-5 h-5" />
              <span>Download Full Schedule (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Survival Guide Section */}
      <section id="survival" className="py-20 px-4 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Book className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold">Survival Guide</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <p className="text-lg text-gray-300 mb-8 text-center">Everything you need to know before arriving in Lyon! Our comprehensive survival guide covers accommodation, transportation, local tips, and course preparation.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Before You Arrive</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Travel arrangements to Lyon</li>
                  <li>• What to pack (laptop required!)</li>
                  <li>• Software setup instructions</li>
                  <li>• Visa requirements (if applicable)</li>
                  <li>• Accommodation details</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-400/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-pink-300">During Your Stay</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• INSA Lyon campus map</li>
                  <li>• Local transportation guide</li>
                  <li>• Restaurant recommendations</li>
                  <li>• Social activities schedule</li>
                  <li>• Emergency contacts</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <a 
                href="#"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 rounded-full inline-flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
              >
                <Download className="w-5 h-5" />
                <span>Download Survival Guide (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Mail className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold">Contact Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/40 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">Main Organiser</h3>
                  <p className="text-gray-400">Course Coordinator</p>
                </div>
              </div>
              <p className="text-lg font-semibold mb-2">Soufian Lebbat</p>
              <a href="mailto:soufian.lebbat@best-eu.org" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>soufian.lebbat@best-eu.org</span>
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/40 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pink-300">President</h3>
                  <p className="text-gray-400">BEST Lyon</p>
                </div>
              </div>
              <p className="text-lg font-semibold mb-2">Paul Bouteldja</p>
              <a href="mailto:paul.bouteldja@best-eu.org" className="text-pink-400 hover:text-pink-300 transition-colors flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>paul.bouteldja@best-eu.org</span>
              </a>
            </div>
          </div>

          <div className="mt-8 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center">
            <p className="text-gray-300">Have questions about the course? Feel free to reach out to our team! We're here to help with any inquiries about the program, registration, or logistics.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-500/20 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-purple-400 mr-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">BEST Lyon</span>
          </div>
          <p className="text-gray-400 mb-2">Board of European Students of Technology</p>
          <p className="text-gray-500 text-sm mb-4">INSA Lyon, France</p>
          <p className="text-gray-500 text-sm">© 2026 BEST Lyon. All rights reserved.</p>
          <div className="mt-6 flex justify-center space-x-6">
            <a href="mailto:soufian.lebbat@best-eu.org" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
