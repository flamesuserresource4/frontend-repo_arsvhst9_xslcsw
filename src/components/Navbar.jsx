import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-blue-600">GYM</span>
          <span className="text-gray-900">Forge</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#gallery" className="hover:text-gray-900">Gallery</a>
          <Link to="/plans" className="hover:text-gray-900">Plans</Link>
        </nav>
        <Link
          to="/plans"
          className="relative group inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-semibold rounded-full text-white"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 transition-all group-hover:scale-110" />
          <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-blue-600/40 via-indigo-600/40 to-fuchsia-600/40 opacity-60 group-hover:opacity-80" />
          <span className="relative">Join Us</span>
        </Link>
      </div>
    </header>
  )
}
