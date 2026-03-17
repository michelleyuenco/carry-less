import { useState } from 'react';
import { Link } from 'react-router-dom';
import { wardrobeService } from '../../application/services/WardrobeService';
import { CITIES, SEASONS, STYLES } from '../../shared/constants';
import type { PlannerInput, CapsuleWardrobe, Season, StylePreference, WardrobeItem } from '../../shared/types';

const CATEGORY_ORDER = ['top', 'bottom', 'outerwear', 'layer', 'underwear', 'sleepwear'] as const;
const CATEGORY_LABELS: Record<string, { label: string; labelCn: string }> = {
  top: { label: 'Tops', labelCn: '上衣' },
  bottom: { label: 'Bottoms', labelCn: '下裝' },
  outerwear: { label: 'Outerwear', labelCn: '外套' },
  layer: { label: 'Versatile Layer', labelCn: '萬用外層' },
  underwear: { label: 'Essentials Pack', labelCn: '內衣組合' },
  sleepwear: { label: 'Sleepwear', labelCn: '睡衣' },
};

function ProductCard({ item }: { item: WardrobeItem }) {
  const isWhite = item.colorHex === '#FFFFFF';
  return (
    <div className="card flex flex-col">
      {/* Color swatch / visual */}
      <div
        className="w-full aspect-square rounded-sm mb-4 flex items-center justify-center text-5xl"
        style={{
          backgroundColor: item.colorHex,
          border: isWhite ? '1px solid #E8E4DE' : 'none',
        }}
      >
        {item.emoji}
      </div>
      <div className="flex-1">
        <p className="text-xs text-brand-terracotta tracking-widest uppercase mb-1">
          {CATEGORY_LABELS[item.category]?.label}
        </p>
        <h4 className="text-sm font-medium text-brand-charcoal mb-0.5">{item.name}</h4>
        <p className="zh-text mb-3">{item.nameCn}</p>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full border border-brand-light"
            style={{ backgroundColor: item.colorHex }}
          />
          <span className="text-xs text-brand-gray">{item.color}</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-brand-light">
        <p className="text-xs text-brand-gray">
          ~HK${item.estimatedPrice.hkd} / NT${item.estimatedPrice.twd} / ¥{item.estimatedPrice.jpy}
        </p>
      </div>
    </div>
  );
}

function CapsuleResult({ capsule }: { capsule: CapsuleWardrobe }) {
  const grouped: Record<string, WardrobeItem[]> = {};
  capsule.items.forEach((item) => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  });

  return (
    <div className="mt-12 animate-fade-up">
      {/* Summary header */}
      <div className="bg-brand-warm border border-brand-light p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="section-subtitle mb-1">Your Capsule Wardrobe</p>
            <h2 className="text-2xl font-light text-brand-charcoal">
              {capsule.tripDays}-Day Travel Capsule
            </h2>
            <p className="zh-text mt-1">{capsule.tripDays}天旅行膠囊衣橱</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-brand-gray mb-1">Estimated Cost</div>
            <div className="text-2xl font-light text-brand-charcoal">
              ~HK${capsule.totalCost.hkd.toLocaleString()}
            </div>
            <div className="text-xs text-brand-gray">
              NT${capsule.totalCost.twd.toLocaleString()} / ¥{capsule.totalCost.jpy.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Savings comparison */}
        <div className="mt-6 p-4 bg-white border border-brand-light flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-2xl">✈️</div>
          <div className="flex-1">
            <p className="text-sm font-medium text-brand-charcoal">
              vs. Checked Luggage Fee: <span className="line-through text-brand-gray">HK$300+</span>
            </p>
            <p className="text-xs text-brand-gray mt-0.5">
              Average round-trip baggage fee savings per traveler
            </p>
          </div>
          <div className="text-right">
            <div className="text-lg font-medium text-brand-terracotta">Save HK$300+</div>
            <div className="text-xs text-brand-gray">per trip</div>
          </div>
        </div>
      </div>

      {/* Item grid by category */}
      {CATEGORY_ORDER.filter((cat) => grouped[cat]).map((cat) => (
        <div key={cat} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-sm font-medium tracking-widest uppercase text-brand-charcoal">
              {CATEGORY_LABELS[cat].label}
            </h3>
            <span className="text-xs text-brand-terracotta">{CATEGORY_LABELS[cat].labelCn}</span>
            <span className="text-xs text-brand-gray ml-auto">
              {grouped[cat].length} item{grouped[cat].length > 1 ? 's' : ''}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {grouped[cat].map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link to="/join" className="btn-primary text-center">
          Reserve This Capsule
        </Link>
        <Link to="/stores" className="btn-secondary text-center">
          Find a Store
        </Link>
      </div>
    </div>
  );
}

export function PlannerPage() {
  const [input, setInput] = useState<PlannerInput>({
    destination: '',
    tripDays: 3,
    season: 'summer',
    style: 'casual',
  });
  const [capsule, setCapsule] = useState<CapsuleWardrobe | null>(null);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (!input.destination) return;
    const result = wardrobeService.generateCapsule(input);
    setCapsule(result);
    setGenerated(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="section-subtitle mb-3">Capsule Wardrobe Planner</p>
        <h1 className="section-title mb-2">Plan Your Perfect Trip Wardrobe</h1>
        <p className="zh-text">規劃您的完美旅行膠囊衣橱</p>
        <p className="text-brand-gray mt-4 max-w-xl leading-relaxed">
          Tell us about your trip and we'll curate the perfect capsule wardrobe —
          just enough to wear, nothing more to carry.
        </p>
      </div>

      {/* Planner form */}
      <div className="bg-brand-warm border border-brand-light p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Destination */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-brand-gray mb-2">
              Destination City <span className="text-brand-terracotta">目的地</span>
            </label>
            <select
              value={input.destination}
              onChange={(e) => setInput({ ...input, destination: e.target.value })}
              className="w-full bg-white border border-brand-light px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-brand-charcoal"
            >
              <option value="">Select a city...</option>
              {CITIES.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Trip duration */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-brand-gray mb-2">
              Trip Duration <span className="text-brand-terracotta">旅行天數</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <button
                  key={day}
                  onClick={() => setInput({ ...input, tripDays: day })}
                  className={`flex-1 py-3 text-sm font-medium border transition-colors ${
                    input.tripDays === day
                      ? 'bg-brand-charcoal text-white border-brand-charcoal'
                      : 'bg-white text-brand-gray border-brand-light hover:border-brand-charcoal'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
            <p className="text-xs text-brand-gray mt-2">
              {input.tripDays} day{input.tripDays > 1 ? 's' : ''}
            </p>
          </div>

          {/* Season */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-brand-gray mb-2">
              Season / Weather <span className="text-brand-terracotta">季節</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {SEASONS.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setInput({ ...input, season: s.value as Season })}
                  className={`py-3 text-sm border transition-colors ${
                    input.season === s.value
                      ? 'bg-brand-charcoal text-white border-brand-charcoal'
                      : 'bg-white text-brand-gray border-brand-light hover:border-brand-charcoal'
                  }`}
                >
                  <div>{s.label}</div>
                  <div className="text-xs opacity-70">{s.labelCn}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Style */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-brand-gray mb-2">
              Style Preference <span className="text-brand-terracotta">風格偏好</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {STYLES.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setInput({ ...input, style: s.value as StylePreference })}
                  className={`py-3 text-sm border transition-colors ${
                    input.style === s.value
                      ? 'bg-brand-charcoal text-white border-brand-charcoal'
                      : 'bg-white text-brand-gray border-brand-light hover:border-brand-charcoal'
                  }`}
                >
                  <div>{s.label}</div>
                  <div className="text-xs opacity-70">{s.labelCn}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={handleGenerate}
            disabled={!input.destination}
            className={`btn-primary ${!input.destination ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Generate My Capsule
          </button>
          {!input.destination && (
            <p className="text-xs text-brand-gray">Please select a destination first</p>
          )}
        </div>
      </div>

      {/* Result */}
      {generated && capsule && <CapsuleResult capsule={capsule} />}

      {!generated && (
        <div className="mt-12 text-center py-16 border border-dashed border-brand-light">
          <div className="text-6xl mb-4">👕</div>
          <p className="text-brand-gray">
            Fill in your trip details above and click <strong>Generate My Capsule</strong>
          </p>
          <p className="zh-text mt-2">填寫旅行資訊，即可生成專屬膠囊衣橱</p>
        </div>
      )}
    </div>
  );
}
