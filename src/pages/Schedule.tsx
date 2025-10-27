import React from 'react';

// Major blocks mapped from the provided PNG (Sunday → next Sunday)
const scheduleData = [
  // Saturday (arrival day – evening activities)
  { day: 'Saturday', start: '17:00', end: '19:00', activity: 'Get2Know Games', type: 'event-social' },
  { day: 'Saturday', start: '19:00', end: '20:30', activity: 'Dinner', type: 'event-sleep' },
  { day: 'Saturday', start: '20:30', end: '22:30', activity: 'Social activities', type: 'event-social' },

  // Sunday (Day 1)
  { day: 'Sunday', start: '07:30', end: '09:00', activity: 'ZZZZZ', type: 'event-personal' },
  { day: 'Sunday', start: '09:00', end: '10:30', activity: 'Wake Up + Breakfast', type: 'event-personal' },
  { day: 'Sunday', start: '10:30', end: '12:30', activity: 'Social Activities', type: 'event-social' },
  { day: 'Sunday', start: '12:30', end: '13:30', activity: 'Lunch', type: 'event-food' },
  { day: 'Sunday', start: '13:30', end: '16:30', activity: 'Social Activities', type: 'event-social' },
  { day: 'Sunday', start: '16:30', end: '18:00', activity: 'Free time', type: 'event-special' },
  { day: 'Sunday', start: '18:00', end: '19:30', activity: 'Social Activities', type: 'event-social' },
  { day: 'Sunday', start: '19:30', end: '20:30', activity: 'Dinner', type: 'event-sleep' },
  { day: 'Sunday', start: '20:30', end: '22:30', activity: 'Social activities', type: 'event-social' },

  // Monday
  { day: 'Monday', start: '07:30', end: '09:00', activity: 'Wake Up + Breakfast', type: 'event-personal' },
  { day: 'Monday', start: '09:00', end: '09:30', activity: 'Official Opening', type: 'event-academics' },
  { day: 'Monday', start: '09:30', end: '10:30', activity: 'Introduction', type: 'event-academics' },
  { day: 'Monday', start: '10:30', end: '11:00', activity: 'Coffee Break', type: 'event-break' },
  { day: 'Monday', start: '11:00', end: '13:00', activity: 'Academics', type: 'event-academics' },
  { day: 'Monday', start: '13:00', end: '14:00', activity: 'Lunch', type: 'event-food' },
  { day: 'Monday', start: '14:00', end: '15:30', activity: 'Academics', type: 'event-academics' },
  { day: 'Monday', start: '15:30', end: '16:00', activity: 'Coffee Break', type: 'event-break' },
  { day: 'Monday', start: '16:00', end: '17:00', activity: 'Academics', type: 'event-academics' },
  { day: 'Monday', start: '17:00', end: '18:00', activity: 'Free time', type: 'event-special' },
  { day: 'Monday', start: '18:00', end: '19:30', activity: 'Social Activities', type: 'event-social' },
  { day: 'Monday', start: '19:30', end: '21:00', activity: 'Dinner', type: 'event-sleep' },
  { day: 'Monday', start: '21:00', end: '22:30', activity: 'Social activities', type: 'event-social' },

  // Tuesday
  { day: 'Tuesday', start: '07:30', end: '09:00', activity: 'Wake Up + Breakfast', type: 'event-personal' },
  { day: 'Tuesday', start: '09:00', end: '10:30', activity: 'Academics', type: 'event-academics' },
  { day: 'Tuesday', start: '10:30', end: '11:00', activity: 'Coffee Break', type: 'event-break' },
  { day: 'Tuesday', start: '11:00', end: '13:00', activity: 'Academics', type: 'event-academics' },
  { day: 'Tuesday', start: '13:00', end: '14:00', activity: 'Lunch', type: 'event-food' },
  { day: 'Tuesday', start: '14:00', end: '15:30', activity: 'Academics', type: 'event-academics' },
  { day: 'Tuesday', start: '15:30', end: '16:00', activity: 'Coffee Break', type: 'event-break' },
  { day: 'Tuesday', start: '16:00', end: '17:00', activity: 'Academics', type: 'event-academics' },
  { day: 'Tuesday', start: '17:00', end: '18:00', activity: 'Free time', type: 'event-special' },
  { day: 'Tuesday', start: '18:00', end: '19:30', activity: 'Social Activities', type: 'event-social' },
  { day: 'Tuesday', start: '19:30', end: '21:00', activity: 'Dinner', type: 'event-sleep' },
  { day: 'Tuesday', start: '21:00', end: '22:30', activity: 'Social activities', type: 'event-social' },

  // Wednesday
  { day: 'Wednesday', start: '07:30', end: '09:00', activity: 'Wake Up + Breakfast', type: 'event-personal' },
  { day: 'Wednesday', start: '09:00', end: '10:30', activity: 'Academics', type: 'event-academics' },
  { day: 'Wednesday', start: '10:30', end: '11:00', activity: 'Coffee Break', type: 'event-break' },
  { day: 'Wednesday', start: '11:00', end: '13:00', activity: 'Academics', type: 'event-academics' },
  { day: 'Wednesday', start: '13:00', end: '14:00', activity: 'Lunch', type: 'event-food' },
  { day: 'Wednesday', start: '14:00', end: '18:00', activity: 'Free time', type: 'event-special' },
  { day: 'Wednesday', start: '18:00', end: '19:30', activity: 'Social Activities', type: 'event-social' },
  { day: 'Wednesday', start: '19:30', end: '21:00', activity: 'Dinner', type: 'event-sleep' },
  { day: 'Wednesday', start: '21:00', end: '22:30', activity: 'Social activities', type: 'event-social' },

  // Thursday
  { day: 'Thursday', start: '07:30', end: '09:00', activity: 'Wake Up + Breakfast', type: 'event-personal' },
  { day: 'Thursday', start: '09:00', end: '10:30', activity: 'Academics', type: 'event-academics' },
  { day: 'Thursday', start: '10:30', end: '11:00', activity: 'Coffee Break', type: 'event-break' },
  { day: 'Thursday', start: '11:00', end: '13:00', activity: 'Academics', type: 'event-academics' },
  { day: 'Thursday', start: '13:00', end: '14:00', activity: 'Lunch', type: 'event-food' },
  { day: 'Thursday', start: '14:00', end: '15:30', activity: 'Academics', type: 'event-academics' },
  { day: 'Thursday', start: '15:30', end: '16:00', activity: 'Coffee Break', type: 'event-break' },
  { day: 'Thursday', start: '16:00', end: '18:00', activity: 'Academics', type: 'event-academics' },
  { day: 'Thursday', start: '18:00', end: '19:30', activity: 'Social Activities', type: 'event-social' },
  { day: 'Thursday', start: '19:30', end: '21:00', activity: 'Dinner', type: 'event-sleep' },
  { day: 'Thursday', start: '21:00', end: '22:30', activity: 'Social activities', type: 'event-social' },

  // Friday
  { day: 'Friday', start: '07:30', end: '09:00', activity: 'Wake Up + Breakfast', type: 'event-personal' },
  { day: 'Friday', start: '09:00', end: '10:30', activity: 'Academics', type: 'event-academics' },
  { day: 'Friday', start: '10:30', end: '11:00', activity: 'Coffee Break', type: 'event-break' },
  { day: 'Friday', start: '11:00', end: '13:00', activity: 'Academics', type: 'event-academics' },
  { day: 'Friday', start: '13:00', end: '14:00', activity: 'Lunch', type: 'event-food' },
  { day: 'Friday', start: '14:00', end: '15:30', activity: 'Evaluation', type: 'event-academics' },
  { day: 'Friday', start: '15:30', end: '16:00', activity: 'Coffee Break', type: 'event-break' },
  { day: 'Friday', start: '16:00', end: '17:00', activity: 'Evaluation', type: 'event-academics' },
  { day: 'Friday', start: '17:00', end: '18:00', activity: 'Get ready for WT!!', type: 'event-special' },
  { day: 'Friday', start: '18:00', end: '19:30', activity: 'Social Activities', type: 'event-social' },
  { day: 'Friday', start: '19:30', end: '21:00', activity: 'Dinner', type: 'event-sleep' },
  { day: 'Friday', start: '21:00', end: '22:30', activity: 'Social activities', type: 'event-social' },

  // Saturday (Weekend Trip)
  { day: 'Saturday2', start: '07:30', end: '22:30', activity: 'Weekend Trip', type: 'event-trip' },

  // Final Sunday
  { day: 'Sunday2', start: '07:30', end: '14:00', activity: 'Weekend Trip', type: 'event-trip' },
  { day: 'Sunday2', start: '14:00', end: '14:30', activity: 'Arrival at Lyon', type: 'event-travel' },
  { day: 'Sunday2', start: '14:30', end: '22:30', activity: 'DEPARTURE', type: 'event-travel' },
];


// Use minute-based start/end so we can start at 07:30 precisely
const START_MINUTES = 7 * 60 + 30; // 07:30
const END_MINUTES = 22 * 60; // 22:00

// Order the columns to start on the arrival Saturday and finish on the following Sunday (departure)
const daysOfWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday2', 'Sunday2'];

// --- FIX #1: Calculate the number of intervals separately ---
const numIntervals = Math.ceil((END_MINUTES - START_MINUTES) / 30);

// timeSlots: one entry per 30-min interval (start times)
const timeSlots = Array.from({ length: numIntervals }, (_, i) => {
  const mins = START_MINUTES + i * 30;
  const hour = Math.floor(mins / 60);
  const minute = mins % 60;
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
});

export default function Schedule() {
  const timeToRow = (time: string) => {
    const [hour, minute] = time.split(':').map(Number);
    const minutes = hour * 60 + minute;
    const totalSlots = Math.floor((minutes - START_MINUTES) / 30);
    return totalSlots + 2;
  };

  // Helper: convert a time string (HH:MM) into a 30-min slot index (0-based)
  const timeToSlotIndex = (time: string, isEnd = false) => {
    const [hour, minute] = time.split(':').map(Number);
    const minutes = hour * 60 + minute;
    const relative = (minutes - START_MINUTES) / 30;
    // for start times we floor, for end times we ceil so ranges cover correctly
    const idx = isEnd ? Math.ceil(relative) : Math.floor(relative);
    return Math.max(0, Math.min(numIntervals, idx));
  };

  // Build per-day slot arrays and merge contiguous identical slots into blocks
  const blocks: Array<{
    dayIndex: number;
    startSlot: number;
    endSlot: number; // exclusive
    activity: string;
    type: string;
  }> = [];

  daysOfWeek.forEach((day, dayIndex) => {
    // initialize empty slots for the day
    const slots: Array<{ activity: string; type: string } | null> = Array(numIntervals).fill(null);

    // fill slots from events for this day
    scheduleData.forEach(ev => {
      if (ev.day !== day) return;
      const start = Math.max(0, timeToSlotIndex(ev.start));
      const end = Math.min(numIntervals, timeToSlotIndex(ev.end));
      // mark slots [start .. end-1]
      for (let s = start; s < end; s++) {
        slots[s] = { activity: ev.activity, type: ev.type };
      }
    });

    // merge contiguous slots with same activity/type into blocks
    let i = 0;
    while (i < numIntervals) {
      const current = slots[i];
      if (current === null) {
        i++;
        continue;
      }
      let j = i + 1;
      while (j < numIntervals && slots[j] && slots[j]!.activity === current.activity && slots[j]!.type === current.type) {
        j++;
      }
      blocks.push({ dayIndex, startSlot: i, endSlot: j, activity: current.activity, type: current.type });
      i = j;
    }
  });

  // map event types to Tailwind background classes (restores original theme)
  const TYPE_CLASSES: Record<string, string> = {
    'event-personal': 'bg-purple-700/80',
    'event-academics': 'bg-orange-600/70',
    'event-break': 'bg-blue-600/70',
    'event-social': 'bg-emerald-600/70',
    'event-food': 'bg-pink-600/70',
    'event-special': 'bg-yellow-600/70',
    'event-travel': 'bg-red-600/70',
    'event-sleep': 'bg-violet-600/70',
    'event-trip': 'bg-cyan-600/70',
  };

  // dev helper: log blocks so you can verify merges in browser console
  // (kept inside component to access the computed `blocks` variable)
  // eslint-disable-next-line no-console
  console.debug && console.debug('Schedule blocks:', blocks);

  return (
    <section className="bg-schedule-bg text-white p-4 sm:p-6 rounded-lg font-sans overflow-auto">
      <div
        className="grid gap-2"
          style={{
          gridTemplateColumns: `auto repeat(${daysOfWeek.length}, minmax(120px, 1fr))`,
          gridTemplateRows: `auto repeat(${numIntervals}, 1.5rem)`,
          alignItems: 'stretch',
        }}
      >
        {/* top-left empty cell */}
        <div className="sticky left-0 bg-schedule-bg z-10" style={{ gridRow: 1, gridColumn: 1 }}></div>

        {/* day headers */}
        {daysOfWeek.map((day, i) => (
          <div
            key={day}
            className="text-center font-bold p-2 text-lg"
            style={{ gridRow: 1, gridColumn: `${i + 2} / ${i + 3}` }}
            >
            {day === 'Saturday2' ? 'Saturday' : day === 'Sunday2' ? 'Sunday' : day}
          </div>
        ))}

        {/* time labels */}
        {timeSlots.map((time, i) => {
          const rowStart = i + 2;
          return (
            <div
              key={time}
              className="text-xs text-gray-300 text-right pr-2 sticky left-0 bg-schedule-bg z-10"
              style={{ gridColumn: 1, gridRow: `${rowStart} / ${rowStart + 1}` }}
            >
              {time}
            </div>
          );
        })}

        {/* render blocks computed from slots */}
        {blocks.map((b, idx) => {
          const gridRowStart = 2 + b.startSlot;
          const gridRowEnd = 2 + b.endSlot;
          const gridColumn = b.dayIndex + 2;
          const bgClass = TYPE_CLASSES[b.type] ?? 'bg-gray-600/60';
          return (
            <div
              key={idx}
              className={`event-block ${bgClass} rounded-md p-1 flex items-center justify-center text-center text-xs font-semibold shadow-lg`}
              style={{
                gridRow: `${gridRowStart} / ${gridRowEnd}`,
                gridColumn: `${gridColumn} / ${gridColumn + 1}`,
              }}
              title={`${b.activity} (${b.startSlot} - ${b.endSlot})`}
            >
              {b.activity}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// expose blocks in console when loaded (dev-only)
try {
  // dynamic import to avoid affecting production bundles heavily
  // eslint-disable-next-line no-console
  console.debug('Schedule component loaded. Slots:', numIntervals, 'TimeSlots:', timeSlots.length);
} catch (e) {
  // noop
}