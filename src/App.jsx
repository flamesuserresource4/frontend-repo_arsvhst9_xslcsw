import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-xl">Pulse Gym</Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/explore" className="text-gray-600 hover:text-gray-900">Explore</Link>
            <Link to="/plans" className="text-gray-600 hover:text-gray-900">Plans</Link>
            <Link to="/plans" className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 blur-[6px] opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="relative rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold tracking-wide">
                Join Us
              </span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 max-w-6xl mx-auto px-4">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Build Your Strongest Self
            </h1>
            <p className="mt-4 text-gray-600 max-w-prose">
              Modern training space, elite coaches, and a community that pushes you forward. Start today and feel the difference in 30 days.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/plans" className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-white">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 blur-[8px] opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="relative rounded-full bg-gray-900 px-6 py-3 text-base font-semibold tracking-wide">
                  Join Us
                </span>
              </Link>
              <Link to="/explore" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold">
                Explore Images
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <img className="h-44 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" alt="gym1" />
            <img className="h-44 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1519859660545-3dea8ddf683c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxneW0yfGVufDB8MHx8fDE3NjI4NzE1MzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="gym2" />
            <img className="h-44 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop" alt="gym3" />
            <img className="h-44 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1519859660545-3dea8ddf683c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxneW00fGVufDB8MHx8fDE3NjI4NzE1MzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="gym4" />
            <img className="h-44 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1642222385655-8339a5b6033b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxneW01fGVufDB8MHx8fDE3NjI4NzE1MzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="gym5" />
            <img className="h-44 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1519859660545-3dea8ddf683c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxneW02fGVufDB8MHx8fDE3NjI4NzE1MzZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="gym6" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Why Pulse?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div className="p-5 rounded-2xl bg-white border border-gray-200">Top-tier equipment</div>
            <div className="p-5 rounded-2xl bg-white border border-gray-200">Science-backed programs</div>
            <div className="p-5 rounded-2xl bg-white border border-gray-200">Supportive community</div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
