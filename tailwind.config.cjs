module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {},
  },
  // Ensure dynamically-used background classes for schedule blocks are preserved
  safelist: [
    'bg-purple-700/80','bg-pink-700/70','bg-amber-700/70','bg-orange-600/70','bg-blue-600/70',
    'bg-emerald-600/70','bg-pink-600/70','bg-violet-600/70','bg-yellow-600/70','bg-orange-800/70',
    'bg-cyan-600/70','bg-red-600/70','bg-red-700/70','bg-red-500/70','bg-orange-700/70','bg-gray-600/60'
  ],
  plugins: [],
}
