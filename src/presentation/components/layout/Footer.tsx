import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_CN, BRAND_TAGLINE_CN } from '../../../shared/constants';

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-semibold tracking-widest">{BRAND_NAME}</span>
              <span className="text-xs text-gray-400">{BRAND_NAME_CN}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {BRAND_TAGLINE_CN}<br />
              Travel with nothing. Wear everything.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">Navigate</p>
            <div className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/how-it-works', label: 'How It Works' },
                { to: '/plan', label: 'Wardrobe Planner' },
                { to: '/stores', label: 'Store Locator' },
                { to: '/impact', label: 'Impact' },
                { to: '/join', label: 'Join Us' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Concept */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">The Concept</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              A circular fashion travel service — pick up a curated wardrobe at your destination,
              return it before you fly home. Less luggage. Less waste. More freedom.
            </p>
            <p className="text-xs text-gray-600 mt-4">
              Pitch Concept MVP · {new Date().getFullYear()}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} CARRY LESS 輕旅行. Concept MVP.
          </p>
          <p className="text-xs text-gray-600">
            ♻️ Circular fashion · ✈️ Zero-luggage travel
          </p>
        </div>
      </div>
    </footer>
  );
}
