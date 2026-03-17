import { useState } from 'react';
import { CITIES } from '../../shared/constants';
import type { MembershipTier } from '../../shared/types';

const TIERS: Array<{
  id: MembershipTier;
  emoji: string;
  name: string;
  nameCn: string;
  desc: string;
  trips: string;
  color: string;
  benefits: string[];
}> = [
  {
    id: 'explorer',
    emoji: '🌱',
    name: 'Explorer',
    nameCn: '探險者',
    desc: 'Perfect for occasional travelers',
    trips: 'Free',
    color: 'border-brand-light',
    benefits: [
      'Basic capsule wardrobe planning',
      'Standard store pickup',
      'Access to 10 cities',
      'Digital wardrobe history',
    ],
  },
  {
    id: 'frequent',
    emoji: '✈️',
    name: 'Frequent',
    nameCn: '常旅客',
    desc: '5+ trips per year',
    trips: 'HK$199/yr',
    color: 'border-brand-terracotta',
    benefits: [
      'Everything in Explorer',
      'Priority pickup reservation',
      '10% discount on all capsules',
      'Advance inventory browsing',
      'Express return counters',
    ],
  },
  {
    id: 'global',
    emoji: '🌍',
    name: 'Global',
    nameCn: '全球旅人',
    desc: '10+ trips per year',
    trips: 'HK$499/yr',
    color: 'border-brand-charcoal',
    benefits: [
      'Everything in Frequent',
      '1 free capsule per trip',
      'Lounge access at 5 airports',
      'Personal style consultant',
      'White-glove delivery to hotel',
      'Priority new city access',
    ],
  },
];

export function JoinPage() {
  const [selectedTier, setSelectedTier] = useState<MembershipTier>('explorer');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    city: '',
    frequency: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-brand-warm py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-subtitle mb-4">Membership</p>
          <h1 className="section-title mb-3">Join Carry Less</h1>
          <p className="zh-text mb-4">加入輕旅行會員</p>
          <p className="text-brand-gray leading-relaxed max-w-xl mx-auto">
            Start traveling lighter today. Choose the membership that fits your travel style.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-widest uppercase text-brand-gray text-center mb-8">
            Choose Your Tier · 選擇會員等級
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`border-2 p-6 cursor-pointer transition-all duration-200 ${
                  tier.color
                } ${
                  selectedTier === tier.id
                    ? 'shadow-lg -translate-y-1 bg-white'
                    : 'bg-white opacity-80 hover:opacity-100 hover:-translate-y-0.5'
                }`}
              >
                {/* Selected indicator */}
                {selectedTier === tier.id && (
                  <div className="text-xs bg-brand-charcoal text-white px-2 py-0.5 inline-block mb-4 tracking-widest uppercase">
                    Selected
                  </div>
                )}

                <div className="text-4xl mb-3">{tier.emoji}</div>
                <h3 className="text-xl font-medium text-brand-charcoal">{tier.name}</h3>
                <p className="text-xs text-brand-terracotta mb-1">{tier.nameCn}</p>
                <p className="text-sm text-brand-gray mb-4">{tier.desc}</p>
                <div className="text-2xl font-light text-brand-charcoal mb-6">{tier.trips}</div>

                <ul className="space-y-2">
                  {tier.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-gray">
                      <span className="text-brand-terracotta mt-0.5 flex-shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-16 bg-brand-warm">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <div className="text-center py-16 animate-fade-up">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-2xl font-light text-brand-charcoal mb-3">
                Welcome to Carry Less!
              </h2>
              <p className="text-brand-terracotta mb-4">歡迎加入輕旅行！</p>
              <p className="text-brand-gray leading-relaxed mb-8">
                You've joined as an <strong>{TIERS.find(t => t.id === selectedTier)?.name}</strong> member.
                We'll be in touch soon with your first capsule planning guide.
              </p>
              <div className="w-16 h-px bg-brand-light mx-auto mb-8" />
              <p className="text-xs text-brand-gray">
                Check your email for a welcome message and getting started guide.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <p className="section-subtitle mb-3">Sign Up</p>
                <h2 className="text-2xl font-light text-brand-charcoal mb-2">
                  Create Your Account
                </h2>
                <p className="zh-text">建立帳號，開始輕旅行</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brand-gray mb-2">
                    Full Name <span className="text-brand-terracotta">姓名</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-white border border-brand-light px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-brand-charcoal placeholder:text-brand-gray/50"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-brand-gray mb-2">
                    Email Address <span className="text-brand-terracotta">電子郵件</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-white border border-brand-light px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-brand-charcoal placeholder:text-brand-gray/50"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-brand-gray mb-2">
                    Home City <span className="text-brand-terracotta">居住城市</span>
                  </label>
                  <select
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-white border border-brand-light px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-brand-charcoal"
                  >
                    <option value="">Select your city...</option>
                    {CITIES.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-brand-gray mb-2">
                    Travel Frequency <span className="text-brand-terracotta">旅行頻率</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: '1-4', label: '1–4 trips', labelCn: '每年' },
                      { value: '5-9', label: '5–9 trips', labelCn: '每年' },
                      { value: '10+', label: '10+ trips', labelCn: '每年' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setForm({ ...form, frequency: opt.value })}
                        className={`py-3 text-sm border transition-colors ${
                          form.frequency === opt.value
                            ? 'bg-brand-charcoal text-white border-brand-charcoal'
                            : 'bg-white text-brand-gray border-brand-light hover:border-brand-charcoal'
                        }`}
                      >
                        <div>{opt.label}</div>
                        <div className="text-xs opacity-70">{opt.labelCn}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected tier summary */}
                <div className="bg-white border border-brand-light p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{TIERS.find(t => t.id === selectedTier)?.emoji}</span>
                    <div>
                      <p className="text-sm font-medium text-brand-charcoal">
                        {TIERS.find(t => t.id === selectedTier)?.name} Membership
                      </p>
                      <p className="text-xs text-brand-gray">
                        {TIERS.find(t => t.id === selectedTier)?.trips} · {TIERS.find(t => t.id === selectedTier)?.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="ml-auto text-xs text-brand-terracotta hover:underline"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Change
                    </button>
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full text-center">
                  Join Carry Less
                </button>

                <p className="text-xs text-brand-gray text-center">
                  By joining, you agree to our Terms of Service. No spam, ever.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
