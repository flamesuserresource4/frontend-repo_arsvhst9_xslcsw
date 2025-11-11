import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.15),transparent_40%)]" />
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Build Strength. Shape Confidence.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Modern equipment, expert trainers, and a community that keeps you motivated. Start your journey today.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/plans"
              className="relative group inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold rounded-full text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 transition-all group-hover:scale-110" />
              <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-blue-600/40 via-indigo-600/40 to-fuchsia-600/40 opacity-60 group-hover:opacity-80" />
              <span className="relative flex items-center gap-2">
                Join Us
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </Link>

            <a href="#gallery" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:border-gray-400 bg-white/80 backdrop-blur text-gray-800">
              Explore Images
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 transition-transform group-hover:translate-x-1"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full" />
          <img
            className="relative z-10 rounded-2xl shadow-xl w-full h-80 object-cover"
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
            alt="Gym hero"
          />
        </div>
      </div>
    </section>
  )
}
