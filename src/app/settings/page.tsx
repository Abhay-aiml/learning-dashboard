import Sidebar from '@/components/sidebar/Sidebar'

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-white text-2xl font-bold mb-6">Settings</h1>
        <div className="max-w-xl rounded-2xl bg-[#111111] border border-white/10 p-6">
          <div className="flex items-center justify-between py-4 border-b border-white/10">
            <div>
              <p className="text-white text-sm font-medium">Display Name</p>
              <p className="text-white/40 text-xs mt-1">Abhay</p>
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-violet-600/20 border border-violet-500/30 text-violet-400 text-xs">Edit</button>
          </div>
          <div className="flex items-center justify-between py-4 border-b border-white/10">
            <div>
              <p className="text-white text-sm font-medium">Dark Mode</p>
              <p className="text-white/40 text-xs mt-1">Always on</p>
            </div>
            <div className="w-10 h-5 rounded-full bg-violet-600" />
          </div>
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="text-white text-sm font-medium">Notifications</p>
              <p className="text-white/40 text-xs mt-1">Daily reminders</p>
            </div>
            <div className="w-10 h-5 rounded-full bg-violet-600" />
          </div>
        </div>
      </main>
    </div>
  )
}