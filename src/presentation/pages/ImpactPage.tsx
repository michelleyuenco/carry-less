import { useState } from 'react';
import { useCountUpOnVisible } from '../../application/hooks/useCountUp';
import { IMPACT_STATS } from '../../shared/constants';
import { formatNumber } from '../../shared/utils';

interface StatCardProps {
  target: number;
  label: string;
  labelCn: string;
  unit?: string;
  icon: string;
  description: string;
}

function StatCard({ target, label, labelCn, unit, icon, description }: StatCardProps) {
  const { value, ref } = useCountUpOnVisible(target, 2500);

  return (
    <div ref={ref} className="card text-center p-8 group">
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-4xl font-light text-brand-charcoal mb-1">
        {formatNumber(value)}{unit}
      </div>
      <div className="text-sm font-medium text-brand-charcoal mb-1">{label}</div>
      <div className="text-xs text-brand-terracotta mb-4">{labelCn}</div>
      <div className="w-8 h-px bg-brand-light mx-auto mb-4" />
      <p className="text-xs text-brand-gray leading-relaxed">{description}</p>
    </div>
  );
}

export function ImpactPage() {
  const [tripsPerYear, setTripsPerYear] = useState(4);

  const personalWeightSaved = tripsPerYear * 23; // avg 23kg per trip
  const personalCostSaved = tripsPerYear * 350; // HKD
  const personalCO2Saved = Math.round(tripsPerYear * 12); // kg CO2

  const STATS = [
    {
      target: IMPACT_STATS.travelersCount,
      label: 'Travelers Gone Luggage-Free',
      labelCn: '已輕旅行的旅人',
      icon: '✈️',
      description: 'Real people who&apos;ve traveled without checked luggage using Carry Less.',
    },
    {
      target: IMPACT_STATS.weightSavedKg,
      label: 'kg of Luggage Weight Saved',
      labelCn: '節省的行李重量（公斤）',
      unit: 'kg',
      icon: '⚖️',
      description: 'Total checked luggage weight avoided across all Carry Less travelers.',
    },
    {
      target: IMPACT_STATS.garmentsReused,
      label: 'Garments Given a Second Life',
      labelCn: '獲得新生的衣物件數',
      icon: '♻️',
      description: 'Clothing items cleaned, reused, and kept out of landfill through our circular model.',
    },
    {
      target: IMPACT_STATS.co2SavedKg,
      label: 'kg CO₂ Saved vs. New Production',
      labelCn: '相較新品生產節省的碳排放',
      unit: 'kg',
      icon: '🌿',
      description: 'Carbon emissions avoided by reusing garments instead of producing new ones.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-brand-charcoal text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">Environmental Impact</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-3">
            Travel That Matters
          </h1>
          <p className="text-sm text-gray-400 mb-6">每一次輕旅行，都在改變世界</p>
          <p className="text-gray-300 leading-relaxed max-w-xl mx-auto">
            When travelers choose to carry less, the collective impact is extraordinary.
            Here's what the Carry Less community has achieved together.
          </p>
        </div>
      </section>

      {/* Stats grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-3">Aggregate Impact</p>
            <h2 className="section-title">Our Collective Footprint</h2>
            <p className="zh-text mt-2">我們共同的正向足跡</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Personal calculator */}
      <section className="py-20 bg-brand-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Personal Impact Calculator</p>
            <h2 className="section-title">Your Impact</h2>
            <p className="zh-text mt-2">計算您的個人影響</p>
          </div>

          <div className="bg-white border border-brand-light p-8">
            <div className="mb-8">
              <label className="block text-xs tracking-widest uppercase text-brand-gray mb-4">
                Trips Per Year <span className="text-brand-terracotta">每年旅行次數</span>
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={tripsPerYear}
                  onChange={(e) => setTripsPerYear(Number(e.target.value))}
                  className="flex-1 accent-brand-charcoal"
                />
                <div className="w-16 text-center">
                  <span className="text-3xl font-light text-brand-charcoal">{tripsPerYear}</span>
                  <p className="text-xs text-brand-gray">trips</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-brand-warm p-5 text-center">
                <div className="text-2xl font-light text-brand-charcoal mb-1">
                  {personalWeightSaved}kg
                </div>
                <div className="text-sm text-brand-charcoal mb-1">Luggage Saved</div>
                <div className="zh-text">行李重量節省</div>
              </div>
              <div className="bg-brand-warm p-5 text-center">
                <div className="text-2xl font-light text-brand-charcoal mb-1">
                  HK${personalCostSaved.toLocaleString()}
                </div>
                <div className="text-sm text-brand-charcoal mb-1">Fees Saved/yr</div>
                <div className="zh-text">每年省下費用</div>
              </div>
              <div className="bg-brand-warm p-5 text-center">
                <div className="text-2xl font-light text-brand-charcoal mb-1">
                  {personalCO2Saved}kg
                </div>
                <div className="text-sm text-brand-charcoal mb-1">CO₂ Reduced</div>
                <div className="zh-text">碳排放減少</div>
              </div>
            </div>

            <div className="mt-8 p-4 border border-brand-terracotta/30 bg-brand-terracotta/5">
              <p className="text-sm text-brand-charcoal leading-relaxed">
                <strong>By traveling {tripsPerYear}x per year with Carry Less,</strong> you'd save{' '}
                ~{personalWeightSaved}kg of checked luggage, HK${personalCostSaved.toLocaleString()} in baggage fees,
                and help keep ~{Math.round(tripsPerYear * 3)} garments in use instead of landfill.
              </p>
              <p className="zh-text mt-2">
                每年{tripsPerYear}次輕旅行，讓旅行更自由，讓地球更美好。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Our Mission</p>
            <h2 className="section-title">The Road to Zero-Luggage Travel</h2>
            <p className="zh-text mt-2">邁向零行李旅行的路途</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-light md:-translate-x-1/2" />

            {[
              {
                year: '2024',
                title: 'Pilot Launch',
                titleCn: '試點啟動',
                desc: '3 cities, 500 early adopters, proof of concept validated.',
                side: 'right',
              },
              {
                year: '2025',
                title: 'Asian Expansion',
                titleCn: '亞洲擴張',
                desc: '10 cities, 10,000+ travelers, airport store partnerships.',
                side: 'left',
              },
              {
                year: '2026',
                title: 'Global Scale',
                titleCn: '全球擴展',
                desc: '50 cities, 1M travelers, industry-leading circular fashion program.',
                side: 'right',
              },
              {
                year: '2030',
                title: 'Industry Standard',
                titleCn: '行業標準',
                desc: 'Zero-luggage travel becomes the default for frequent flyers worldwide.',
                side: 'left',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-0 mb-10 pl-12 md:pl-0 ${
                  item.side === 'left' ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`md:w-1/2 ${item.side === 'right' ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="inline-block text-xs tracking-widest uppercase text-brand-terracotta bg-brand-terracotta/10 px-3 py-1 mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-medium text-brand-charcoal mb-0.5">{item.title}</h3>
                  <p className="text-xs text-brand-terracotta mb-2">{item.titleCn}</p>
                  <p className="text-brand-gray text-sm">{item.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
                {/* Dot */}
                <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 bg-brand-terracotta rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
