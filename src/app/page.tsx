import { supabase } from '@/lib/supabase'
import { Course } from '@/types'
import './globals.css'
import BentoGrid from '@/components/dashboard/BentoGrid'
import Sidebar from '@/components/sidebar/Sidebar'

async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return data || []
}

export default async function Home() {
  const courses = await getCourses()

  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      <Sidebar />
      <BentoGrid courses={courses} />
    </div>
  )
}