import { Link } from 'react-router-dom';

const FOR_TRAVELER_STEPS = [
  {
    num: '01',
    icon: '🌱',
    title: 'Sign Up Free',
    titleCn: '免費註冊會員',
    desc: 'Create your Carry Less account in seconds. No credit card required to start.',
  },
  {
    num: '02',
    icon: '📱',
    title: 'Browse Inventory',
    titleCn: '線上瀏覽庫存',
    desc: 'Check available capsule items at your destination store before you fly. Plan ahead.',
  },
  {
    num: '03',
    icon: '🛍️',
    title: 'Reserve Your Capsule',
    titleCn: '預訂膠囊衣橱',
    desc: 'Reserve your curated wardrobe online. It will be ready for pickup when you land.',
  },
  {
    num: '04',
    icon: '👕',
    title: 'Wear During Trip',
    titleCn: '旅途中穿著',
    desc: 'Enjoy your trip. Wear fresh, quality clothes every day without the suitcase burden.',
  },
  {
    num: '05',
    icon: '♻️',
    title: 'Return Before Departure',
    titleCn: '離境前歸還',
    desc: 'Drop off at any participating store before your flight. Done in under 5 minutes.',
  },
  {
    num: '06',
    icon: '🔄',
    title: 'Garments Get a New Life',
    titleCn: '衣物獲得新生',
    desc: 'We inspect, clean, and prepare each item for the next traveler — or recycle responsibly.',
  },
];

const FOR_BRAND_BENEFITS = [
  {
    icon: '👥',
    title: 'New Customer Acquisition',
    titleCn: '全新客群開拓',
    desc: 'Travelers are a premium, mobile market segment. Every pickup is a new brand touchpoint in a foreign city.',
    stat: '+23% new customer conversion',
  },
  {
    icon: '🌿',
    title: 'Sustainability Story',
    titleCn: '永續時尚故事',
    desc: 'Each garment serves multiple travelers before recycling. Measurable circular fashion impact to share with ESG reporting.',
    stat: '4.2x garment lifespan',
  },
  {
    icon: '💰',
    title: 'Recurring Revenue',
    titleCn: '循環式收入',
    desc: 'The same garment generates revenue multiple times — pickup fee model on top of initial sale price.',
    stat: '3–5x revenue per garment',
  },
  {
    icon: '📊',
    title: 'Travel Data & Insights',
    titleCn: '旅遊數據洞察',
    desc: 'Understand travel patterns, seasonal preferences, and cross-market clothing tastes like never before.',
    stat: 'Rich first-party data',
  },
  {
    icon: '🏪',
    title: 'Store Foot Traffic',
    titleCn: '門市流量提升',
    desc: 'Airport and station stores see 40% more foot traffic from travelers who browse and buy additional items at pickup.',
    stat: '+40% in-store visits',
  },
  {
    icon: '🌍',
    title: 'Brand Differentiation',
    titleCn: '品牌差異化',
    desc: 'First major fashion brand to offer travel-as-a-service clothing. Viral PR potential, global media interest.',
    stat: 'Category-defining move',
  },
];

export function HowItWorksPage() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-brand-warm py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-subtitle mb-4">The Process</p>
          <h1 className="section-title mb-3">How Carry Less Works</h1>
          <p className="zh-text mb-6">輕旅行的運作方式</p>
          <p className="text-brand-gray leading-relaxed max-w-xl mx-auto">
            A seamless system that removes luggage from the travel equation —
            for travelers and for the planet.
          </p>
        </div>
      </section>

      {/* For Traveler */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-3">For Travelers</p>
            <h2 className="text-2xl font-light text-brand-charcoal">The Traveler Journey</h2>
            <p className="zh-text mt-1">旅人的旅程</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-16 top-0 bottom-0 w-px bg-brand-light" />

            <div className="flex flex-col gap-10">
              {FOR_TRAVELER_STEPS.map((step, i) => (
                <div key={i} className="flex gap-8 items-start">
                  {/* Icon circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-brand-warm border border-brand-light flex items-center justify-center text-2xl md:text-3xl z-10 relative">
                      {step.icon}
                    </div>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-terracotta text-white text-xs flex items-center justify-center rounded-full">
                      {i + 1}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-3 md:pt-5">
                    <h3 className="text-lg font-medium text-brand-charcoal mb-0.5">{step.title}</h3>
                    <p className="text-xs text-brand-terracotta mb-2">{step.titleCn}</p>
                    <p className="text-brand-gray leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link to="/plan" className="btn-primary text-center">
              Start Planning
            </Link>
            <Link to="/join" className="btn-secondary text-center">
              Join Free
            </Link>
          </div>
        </div>
      </section>

      {/* For Brand */}
      <section className="py-20 bg-brand-charcoal text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">B2B Pitch</p>
            <h2 className="text-3xl font-light text-white mb-3">Why Partner With Carry Less</h2>
            <p className="text-sm text-gray-400">為何品牌應與輕旅行合作</p>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
              Carry Less isn&apos;t just good for travelers — it&apos;s a transformative business model
              for fashion brands looking to lead the circular economy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOR_BRAND_BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="border border-gray-700 p-6 hover:border-gray-500 transition-colors group"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-base font-medium text-white mb-1">{benefit.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{benefit.titleCn}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{benefit.desc}</p>
                <div className="text-xs text-brand-terracotta font-medium tracking-wide">
                  {benefit.stat}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Interested in a brand partnership? Let's talk about bringing Carry Less to your stores.
            </p>
            <Link to="/join" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-charcoal">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">FAQ</p>
            <h2 className="text-2xl font-light text-brand-charcoal">Common Questions</h2>
            <p className="zh-text mt-1">常見問題</p>
          </div>

          <div className="divide-y divide-brand-light">
            {[
              {
                q: "What if the clothes don't fit?",
                qCn: "如果衣物不合身怎麼辦？",
                a: "You can exchange items at the store upon pickup. Our planner helps you specify size and fit preferences in advance.",
              },
              {
                q: "How clean are returned garments?",
                qCn: "歸還的衣物衛生嗎？",
                a: "Every returned item goes through professional cleaning and inspection before being offered to the next traveler. Damaged items are recycled.",
              },
              {
                q: "What happens if I lose an item?",
                qCn: "如果遺失衣物怎麼辦？",
                a: "A simple replacement fee applies — typically the standard retail price of the item. We keep it transparent and fair.",
              },
              {
                q: "Can I keep the clothes?",
                qCn: "可以保留衣物嗎？",
                a: "Absolutely! If you love an item, you can purchase it at the standard retail price. The circular return is just the default option.",
              },
              {
                q: "Which cities are available?",
                qCn: "哪些城市提供服務？",
                a: "Currently piloting in Tokyo, Taipei, Hong Kong, Singapore, Bangkok, Seoul, Shanghai, London, New York, and Paris. More cities coming soon.",
              },
            ].map((faq, i) => (
              <div key={i} className="py-6">
                <h4 className="font-medium text-brand-charcoal mb-1">{faq.q}</h4>
                <p className="text-xs text-brand-terracotta mb-3">{faq.qCn}</p>
                <p className="text-brand-gray leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
