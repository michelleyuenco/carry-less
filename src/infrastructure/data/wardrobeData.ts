import type { WardrobeItem } from '../../shared/types';

const COLORS = {
  white: { name: 'White', nameCn: '白', hex: '#FFFFFF' },
  navy: { name: 'Navy', nameCn: '深藍', hex: '#1B2A4A' },
  grey: { name: 'Grey', nameCn: '灰', hex: '#9E9E9E' },
  black: { name: 'Black', nameCn: '黑', hex: '#1A1A1A' },
  beige: { name: 'Beige', nameCn: '米', hex: '#D4C5A9' },
  olive: { name: 'Olive', nameCn: '橄欖綠', hex: '#6B7C56' },
};

export const TOPS: WardrobeItem[] = [
  {
    id: 'top-1',
    category: 'top',
    name: 'Essential T-Shirt',
    nameCn: '基本款T恤',
    emoji: '👕',
    color: COLORS.white.name,
    colorHex: COLORS.white.hex,
    estimatedPrice: { hkd: 79, twd: 299, jpy: 1500 },
  },
  {
    id: 'top-2',
    category: 'top',
    name: 'Classic T-Shirt',
    nameCn: '經典T恤',
    emoji: '👕',
    color: COLORS.navy.name,
    colorHex: COLORS.navy.hex,
    estimatedPrice: { hkd: 79, twd: 299, jpy: 1500 },
  },
  {
    id: 'top-3',
    category: 'top',
    name: 'Linen Shirt',
    nameCn: '亞麻襯衫',
    emoji: '👔',
    color: COLORS.beige.name,
    colorHex: COLORS.beige.hex,
    estimatedPrice: { hkd: 149, twd: 590, jpy: 2990 },
  },
  {
    id: 'top-4',
    category: 'top',
    name: 'Striped Tee',
    nameCn: '條紋T恤',
    emoji: '👕',
    color: COLORS.grey.name,
    colorHex: COLORS.grey.hex,
    estimatedPrice: { hkd: 89, twd: 350, jpy: 1790 },
  },
];

export const BOTTOMS: WardrobeItem[] = [
  {
    id: 'bottom-1',
    category: 'bottom',
    name: 'Slim Chinos',
    nameCn: '修身休閒褲',
    emoji: '👖',
    color: COLORS.beige.name,
    colorHex: COLORS.beige.hex,
    estimatedPrice: { hkd: 199, twd: 790, jpy: 3990 },
  },
  {
    id: 'bottom-2',
    category: 'bottom',
    name: 'Easy Pants',
    nameCn: '輕便長褲',
    emoji: '👖',
    color: COLORS.black.name,
    colorHex: COLORS.black.hex,
    estimatedPrice: { hkd: 199, twd: 790, jpy: 3990 },
  },
];

export const OUTERWEAR: WardrobeItem[] = [
  {
    id: 'outer-1',
    category: 'outerwear',
    name: 'Ultra Light Down',
    nameCn: '超輕量羽絨外套',
    emoji: '🧥',
    color: COLORS.black.name,
    colorHex: COLORS.black.hex,
    estimatedPrice: { hkd: 299, twd: 1190, jpy: 5990 },
  },
  {
    id: 'outer-2',
    category: 'outerwear',
    name: 'Compact Jacket',
    nameCn: '輕便夾克',
    emoji: '🧥',
    color: COLORS.olive.name,
    colorHex: COLORS.olive.hex,
    estimatedPrice: { hkd: 249, twd: 990, jpy: 4990 },
  },
];

export const LAYERS: WardrobeItem[] = [
  {
    id: 'layer-1',
    category: 'layer',
    name: 'Merino Cardigan',
    nameCn: '美麗諾羊毛開衫',
    emoji: '🧶',
    color: COLORS.grey.name,
    colorHex: COLORS.grey.hex,
    estimatedPrice: { hkd: 199, twd: 790, jpy: 3990 },
  },
];

export const UNDERWEAR: WardrobeItem[] = [
  {
    id: 'underwear-1',
    category: 'underwear',
    name: 'AIRism Underwear Pack',
    nameCn: 'AIRism內衣組',
    emoji: '🩲',
    color: COLORS.white.name,
    colorHex: COLORS.white.hex,
    estimatedPrice: { hkd: 119, twd: 470, jpy: 2390 },
  },
];

export const SLEEPWEAR: WardrobeItem[] = [
  {
    id: 'sleep-1',
    category: 'sleepwear',
    name: 'Soft Lounge Set',
    nameCn: '居家休閒套裝',
    emoji: '🛌',
    color: COLORS.grey.name,
    colorHex: COLORS.grey.hex,
    estimatedPrice: { hkd: 179, twd: 710, jpy: 3590 },
  },
];
