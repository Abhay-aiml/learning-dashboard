'use client'

import { motion } from 'framer-motion'

const generateActivity = () => {
  return Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 4))
  )
}

const colorMap = [
  'bg-white/5',
  'bg-violet-900/60',
  'bg-violet-600/70',
  'bg-violet-400',
]

export default function ActivityTile() {
  const data = generateActivity()

  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl bg-[#111111] border border-white/10 p-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-white font-medium text-sm mb-4">Learning Activity</h3>

        <div className="flex gap-1 overflow-hidden">
          {data.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((day, di) => (
                <div
                  key={di}
                  className={`w-2.5 h-2.5 rounded-sm ${colorMap[day]}`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-white/30 text-xs">Less</span>
          {colorMap.map((c, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-sm ${c}`} />
          ))}
          <span className="text-white/30 text-xs">More</span>
        </div>
      </div>
    </motion.article>
  )
}