import { useState } from 'react';
import { STORES } from '../../infrastructure/data/storeData';
import { CITIES } from '../../shared/constants';

const CITY_EMOJIS: Record<string, string> = {
  Tokyo: '🗼',
  Taipei: '🏯',
  'Hong Kong': '🌆',
  Singapore: '🦁',
  Bangkok: '🐘',
  Seoul: '🏮',
  Shanghai: '🌃',
  London: '🎡',
  'New York': '🗽',
  Paris: '🗼',
};

export function StoresPage() {
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const filteredStores = selectedCity === 'All'
    ? STORES
    : STORES.filter((s) => s.city === selectedCity);

  const storesByCity = filteredStores.reduce<Record<string, typeof STORES>>((acc, store) => {
    if (!acc[store.city]) acc[store.city] = [];
    acc[store.city].push(store);
    return acc;
  }, {});

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="section-subtitle mb-3">Participating Locations</p>
        <h1 className="section-title mb-2">Store Locator</h1>
        <p className="zh-text mb-4">門市查詢</p>
        <p className="text-brand-gray leading-relaxed max-w-xl">
          Find Carry Less pickup and return points across 10 cities worldwide.
          Stores marked with ✈️ offer airport pickup service.
        </p>
      </div>

      {/* City filter */}
      <div className="mb-10">
        <p className="text-xs tracking-widest uppercase text-brand-gray mb-3">Filter by City</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCity('All')}
            className={`px-4 py-2 text-sm border transition-colors ${
              selectedCity === 'All'
                ? 'bg-brand-charcoal text-white border-brand-charcoal'
                : 'bg-white text-brand-gray border-brand-light hover:border-brand-charcoal'
            }`}
          >
            All Cities
          </button>
          {CITIES.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 text-sm border transition-colors ${
                selectedCity === city
                  ? 'bg-brand-charcoal text-white border-brand-charcoal'
                  : 'bg-white text-brand-gray border-brand-light hover:border-brand-charcoal'
              }`}
            >
              {CITY_EMOJIS[city] || '📍'} {city}
            </button>
          ))}
        </div>
      </div>

      {/* Store grid by city */}
      {Object.entries(storesByCity).map(([city, stores]) => (
        <div key={city} className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">{CITY_EMOJIS[city] || '📍'}</span>
            <div>
              <h2 className="text-xl font-light text-brand-charcoal">{city}</h2>
              <p className="text-xs text-brand-terracotta">
                {stores[0].country} · {stores.length} location{stores.length > 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stores.map((store) => (
              <div
                key={store.id}
                className="card group"
              >
                {/* Airport badge */}
                {store.hasAirportPickup && (
                  <div className="inline-flex items-center gap-1.5 bg-brand-terracotta/10 text-brand-terracotta text-xs px-2 py-1 mb-4">
                    ✈️ Airport Pickup Available
                  </div>
                )}

                <h3 className="font-medium text-brand-charcoal mb-2">{store.name}</h3>

                <div className="space-y-2 text-sm text-brand-gray">
                  <div className="flex items-start gap-2">
                    <span className="text-xs mt-0.5">📍</span>
                    <span className="leading-relaxed">{store.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">🕐</span>
                    <span>{store.hours}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-brand-light">
                  <button className="text-xs tracking-widest uppercase text-brand-charcoal hover:text-brand-terracotta transition-colors">
                    Reserve Here →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Map placeholder */}
      <div className="mt-8 border border-brand-light bg-brand-warm p-8 text-center">
        <div className="text-4xl mb-3">🗺️</div>
        <p className="text-brand-gray text-sm">Interactive map coming soon</p>
        <p className="zh-text mt-1">互動地圖即將上線</p>
        <p className="text-xs text-brand-gray mt-2 max-w-sm mx-auto">
          Full Google Maps integration with real-time store availability
          will be available in the production version.
        </p>
      </div>
    </div>
  );
}
