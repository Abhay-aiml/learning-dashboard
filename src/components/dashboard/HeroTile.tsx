'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function HeroTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative col-span-2 rounded-2xl bg-[#111111] border border-white/10 p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <p className="text-white/40 text-sm mb-1">Good morning 👋</p>
        <h1 className="text-white text-3xl font-bold mb-6">Welcome back, Abhay</h1>

        <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-3 w-fit">
          <Flame size={18} className="text-orange-400" />
          <span className="text-orange-300 font-semibold text-sm">12 Day Streak</span>
        </div>
      </div>
    </motion.article>
  )
}