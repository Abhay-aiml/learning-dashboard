'use client'

import { motion } from 'framer-motion'
import { Course } from '@/types'
import CourseCard from './CourseCard'
import HeroTile from './HeroTile'
import ActivityTile from './ActivityTile'

export default function BentoGrid({ courses }: { courses: Course[] }) {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0 }}
          className="md:col-span-2 lg:col-span-2"
        >
          <HeroTile />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
        >
          <ActivityTile />
        </motion.div>

        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 + index * 0.1 }}
          >
            <CourseCard course={course} />
          </motion.div>
        ))}

      </div>
    </main>
  )
}