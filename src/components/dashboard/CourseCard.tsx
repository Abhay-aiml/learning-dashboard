'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import * as LucideIcons from 'lucide-react'
import { Course } from '@/types'

function DynamicIcon({ name }: { name: string }) {
  const Icon = (LucideIcons as any)[name]
  if (!Icon) return <LucideIcons.BookOpen size={20} className="text-violet-400" />
  return <Icon size={20} className="text-violet-400" />
}

function ProgressBar({ value }: { value: number }) {
  const progressRef = useRef<HTMLDivElement>(null)
  const motionProgress = useMotionValue(0)
  const springProgress = useSpring(motionProgress, {
    stiffness: 60,
    damping: 20,
  })

  useEffect(() => {
    motionProgress.set(value)
  }, [value, motionProgress])

  useEffect(() => {
    return springProgress.on('change', (v) => {
      if (progressRef.current) {
        progressRef.current.style.width = `${v}%`
      }
    })
  }, [springProgress])

  return (
    <div className="w-full h-1.5 rounded-full bg-white/10">
      <div
        ref={progressRef}
        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
        style={{ width: '0%' }}
      />
    </div>
  )
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl bg-[#111111] border border-white/10 p-6 overflow-hidden group"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-violet-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-violet-600/20 border border-violet-500/20 flex items-center justify-center">
            <DynamicIcon name={course.icon_name} />
          </div>
          <h3 className="text-white font-medium text-sm leading-tight">{course.title}</h3>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-white/40 text-xs">Progress</span>
          <span className="text-white/60 text-xs font-medium">{course.progress}%</span>
        </div>

        <ProgressBar value={course.progress} />
      </div>
    </motion.article>
  )
}