import { Link } from 'react-router-dom'
import ImageCarousel from './components/ImageCarousel'

const demoImages = [
  'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571907480495-3a96e9a35067?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517963628607-235ccdd5476a?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561214075-f8e0c1f1f7b6?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518609571773-39b7d303a82b?q=80&w=1400&auto=format&fit=crop',
]

export default function Explore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-xl">Pulse Gym</Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/plans" className="text-gray-600 hover:text-gray-900">Plans</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16 max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">Explore Our Spaces</h1>
          <p className="text-gray-600 max-w-2xl">Swipe through our world-class equipment, functional zones, and inspiring training spaces. Use the arrows or your trackpad to glide.</p>
        </div>
        <ImageCarousel images={demoImages} />
      </main>
    </div>
  )
}
