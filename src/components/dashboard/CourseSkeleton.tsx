export default function CourseSkeleton() {
  return (
    <div className="rounded-2xl bg-[#111111] border border-white/10 p-6 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-white/10" />
        <div className="h-4 w-32 rounded bg-white/10" />
      </div>
      <div className="h-3 w-full rounded bg-white/10 mb-2" />
      <div className="h-3 w-2/3 rounded bg-white/10 mb-4" />
      <div className="h-2 w-full rounded-full bg-white/10" />
    </div>
  )
}