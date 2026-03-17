import { Link } from 'react-router-dom';
import { BRAND_TAGLINE, BRAND_TAGLINE_CN } from '../../shared/constants';

const STEPS = [
  {
    emoji: '✈️',
    step: '01',
    title: 'Book Your Trip',
    titleCn: '預訂行程',
    desc: 'No checked luggage needed. Travel with just a carry-on — or nothing at all.',
    descCn: '無需托運行李，輕裝出發',
  },
  {
    emoji: '👕',
    step: '02',
    title: 'Pick Up at Destination',
    titleCn: '目的地取衣',
    desc: 'Your curated capsule wardrobe is ready at the store near your hotel or airport.',
    descCn: '抵達後於指定門市取取您的膠囊衣橱',
  },
  {
    emoji: '♻️',
    step: '03',
    title: 'Return Before You Fly',
    titleCn: '離境前歸還',
    desc: 'Drop off the clothes before departure. We clean, inspect, and give them a second life.',
    descCn: '離境前歸還，我們清洗後轉售或回收',
  },
];

const BENEFITS = [
  {
    icon: '💸',
    title: 'Save $30–50/flight',
    titleCn: '每程省HK$300+',
    desc: 'Skip checked luggage fees every trip.',
  },
  {
    icon: '😌',
    title: 'Zero Packing Stress',
    titleCn: '告別收納煩惱',
    desc: 'Never worry about what to bring again.',
  },
  {
    icon: '🌍',
    title: 'Sustainable Travel',
    titleCn: '永續循環時尚',
    desc: 'Each garment gets multiple lives, less waste.',
  },
  {
    icon: '🏃',
    title: 'Move Freely',
    titleCn: '輕盈自在旅行',
    desc: 'Navigate airports and cities with total ease.',
  },
];

export function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center bg-brand-warm relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="section-subtitle mb-4">A New Way to Travel</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-brand-charcoal mb-3">
              {BRAND_TAGLINE}
            </h1>
            <p className="text-xl text-brand-gray mb-2 font-light">{BRAND_TAGLINE_CN}</p>
            <p className="text-brand-gray leading-relaxed mb-8 max-w-md mt-6">
              Skip the suitcase. Pick up a curated capsule wardrobe at your destination —
              then return it when you leave. Fly light, travel free.
            </p>
            <p className="zh-text mb-8">
              在目的地取得為您搭配好的膠囊衣橱，離境前歸還。從此告別行李焦慮。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/plan" className="btn-primary text-center">
                Plan My Capsule Wardrobe
              </Link>
              <Link to="/how-it-works" className="btn-secondary text-center">
                Learn How It Works
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="animate-fade-up relative" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-white rounded-full opacity-40" />
              
              {/* Clothes circle visual */}
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-6">
                  {[
                    { emoji: '👕', label: 'Tops', color: '#FFFFFF' },
                    { emoji: '👖', label: 'Bottoms', color: '#1B2A4A' },
                    { emoji: '🧥', label: 'Outerwear', color: '#1A1A1A' },
                    { emoji: '🩲', label: 'Essentials', color: '#D4C5A9' },
                    { emoji: '✈️', label: 'Travel Free', color: '#F5F0EA' },
                    { emoji: '♻️', label: 'Return & Recycle', color: '#6B7C56' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-1 p-3 bg-white rounded-lg shadow-sm"
                    >
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="text-xs text-brand-gray text-center leading-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-brand-light" />
          <p className="text-xs text-brand-gray tracking-widest uppercase">Scroll</p>
        </div>
      </section>

      {/* 3-step flow */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">How It Works</p>
            <h2 className="section-title">Three Simple Steps</h2>
            <p className="zh-text mt-2">三個簡單步驟，開始輕旅行</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px bg-brand-light" style={{ left: '16.67%', right: '16.67%' }} />

            {STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-brand-warm flex items-center justify-center text-4xl group-hover:bg-brand-terracotta/10 transition-colors duration-300">
                    {step.emoji}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-terracotta text-white text-xs flex items-center justify-center rounded-full font-medium">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-brand-charcoal mb-1">{step.title}</h3>
                <p className="text-xs text-brand-terracotta mb-3">{step.titleCn}</p>
                <p className="text-sm text-brand-gray leading-relaxed">{step.desc}</p>
                <p className="zh-text mt-2">{step.descCn}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-secondary">
              See Full Details
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-brand-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Why Carry Less</p>
            <h2 className="section-title">Travel Better</h2>
            <p className="zh-text mt-2">讓旅行回到最純粹的自由</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="card text-center">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="font-medium text-brand-charcoal mb-1">{b.title}</h3>
                <p className="text-xs text-brand-terracotta mb-3">{b.titleCn}</p>
                <p className="text-sm text-brand-gray">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-brand-charcoal text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '12,847', label: 'Travelers', labelCn: '旅行者' },
              { num: '10', label: 'Cities', labelCn: '城市' },
              { num: '6,200', label: 'Garments Reused', labelCn: '衣物再利用' },
              { num: '45,000kg', label: 'CO₂ Saved', labelCn: '碳排放減少' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-light text-white mb-1">{s.num}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
                <div className="text-xs text-gray-600 mt-1">{s.labelCn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <p className="section-subtitle mb-4">Start Today</p>
          <h2 className="section-title mb-4">Ready to Travel Light?</h2>
          <p className="zh-text mb-8">開始規劃您的輕旅行膠囊衣橱</p>
          <p className="text-brand-gray mb-8 leading-relaxed">
            Build your perfect capsule wardrobe for any destination.
            Our planner recommends exactly what you need — nothing more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plan" className="btn-primary">
              Plan My Capsule Wardrobe
            </Link>
            <Link to="/join" className="btn-secondary">
              Join for Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
