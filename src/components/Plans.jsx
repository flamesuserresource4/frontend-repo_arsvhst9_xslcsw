export default function Plans() {
  const tiers = [
    { name: 'Basic', price: '$19/mo', features: ['Gym access', 'Locker room', '1 class / week'] },
    { name: 'Pro', price: '$39/mo', popular: true, features: ['24/7 access', 'Unlimited classes', 'Personal plan'] },
    { name: 'Elite', price: '$69/mo', features: ['All Pro features', 'Personal trainer', 'Nutrition coach'] },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">Choose Your Plan</h2>
        <p className="text-center text-gray-600 mt-2">Flexible memberships designed for every goal</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl p-6 shadow-lg border ${t.popular ? 'bg-white border-blue-200 ring-2 ring-blue-500' : 'bg-white border-gray-100'}`}>
              {t.popular && (
                <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full mb-3">Most Popular</span>
              )}
              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">{t.price}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
