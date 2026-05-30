import { supabase } from '@/lib/supabase'
import { Course } from '@/types'
import Sidebar from '@/components/sidebar/Sidebar'
import CourseCard from '@/components/dashboard/CourseCard'

async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) throw new Error(error.message)
  return data || []
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-white text-2xl font-bold mb-6">My Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  )
}