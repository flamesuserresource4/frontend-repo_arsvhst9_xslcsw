import { Link } from 'react-router-dom'

export default function Plans() {
  const plans = [
    {
      name: 'Starter',
      price: 19,
      features: ['Gym floor access', 'Locker room', '1 free PT session', 'Open 6am - 10pm'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: 39,
      features: ['All Starter features', 'Unlimited classes', 'Sauna access', '24/7 access'],
      highlight: true,
    },
    {
      name: 'Elite',
      price: 69,
      features: ['All Pro features', 'Personal coach', 'Nutrition plan', 'VIP lounge'],
      highlight: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-xl">Pulse Gym</Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/explore" className="text-gray-600 hover:text-gray-900">Explore</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">Choose Your Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Flexible memberships designed to match your goals. Upgrade, pause, or cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border ${p.highlight ? 'border-gray-900 shadow-xl' : 'border-gray-200'} bg-white overflow-hidden`}>
              {p.highlight && (
                <div className="absolute right-4 top-4 text-xs font-semibold bg-gray-900 text-white px-2 py-1 rounded-full">Popular</div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-extrabold">${p.price}</span>
                  <span className="text-gray-500 mb-1">/mo</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-900" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/" className={`w-full inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold ${p.highlight ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>Get Started</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
