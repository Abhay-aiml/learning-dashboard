import { supabase } from '@/lib/supabase'
import { Course } from '@/types'
import Sidebar from '@/components/sidebar/Sidebar'

async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) throw new Error(error.message)
  return data || []
}

export default async function ProgressPage() {
  const courses = await getCourses()

  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-white text-2xl font-bold mb-6">My Progress</h1>
        <div className="flex flex-col gap-4 max-w-2xl">
          {courses.map((course) => (
            <div key={course.id} className="rounded-2xl bg-[#111111] border border-white/10 p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-medium">{course.title}</h3>
                <span className="text-violet-400 font-bold">{course.progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}