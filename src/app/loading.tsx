import CourseSkeleton from '@/components/dashboard/CourseSkeleton'

export default function Loading() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">

        <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-[#111111] border border-white/10 p-8 animate-pulse">
          <div className="h-4 w-32 rounded bg-white/10 mb-3" />
          <div className="h-8 w-64 rounded bg-white/10 mb-6" />
          <div className="h-10 w-40 rounded-xl bg-white/10" />
        </div>

        <div className="rounded-2xl bg-[#111111] border border-white/10 p-6 animate-pulse">
          <div className="h-4 w-32 rounded bg-white/10 mb-4" />
          <div className="h-24 w-full rounded bg-white/10" />
        </div>

        {Array.from({ length: 4 }).map((_, i) => (
          <CourseSkeleton key={i} />
        ))}

      </div>
    </div>
  )
}