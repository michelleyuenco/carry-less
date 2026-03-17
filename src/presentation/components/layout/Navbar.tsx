import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_CN } from '../../../shared/constants';

const NAV_LINKS = [
  { to: '/how-it-works', label: 'How It Works', labelCn: '如何運作' },
  { to: '/plan', label: 'Plan', labelCn: '規劃行程' },
  { to: '/stores', label: 'Stores', labelCn: '門市' },
  { to: '/impact', label: 'Impact', labelCn: '環境影響' },
  { to: '/join', label: 'Join', labelCn: '加入' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-lg font-semibold tracking-widest text-brand-charcoal group-hover:text-brand-terracotta transition-colors">
            {BRAND_NAME}
          </span>
          <span className="text-xs text-brand-gray">{BRAND_NAME_CN}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs tracking-widest uppercase transition-colors ${
                location.pathname === link.to
                  ? 'text-brand-terracotta'
                  : 'text-brand-gray hover:text-brand-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/join" className="btn-primary text-xs py-2 px-4">
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-brand-charcoal"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-current mt-1.5 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current mt-1.5 transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-brand-light px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-2 py-1"
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-medium text-brand-charcoal">{link.label}</span>
              <span className="text-xs text-brand-gray">{link.labelCn}</span>
            </Link>
          ))}
          <Link
            to="/join"
            className="btn-primary text-center text-xs py-2.5"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
