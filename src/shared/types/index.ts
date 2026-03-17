export type Season = 'spring' | 'summer' | 'autumn' | 'winter';
export type StylePreference = 'casual' | 'smart-casual' | 'active';
export type MembershipTier = 'explorer' | 'frequent' | 'global';

export interface WardrobeItem {
  id: string;
  category: 'top' | 'bottom' | 'outerwear' | 'layer' | 'underwear' | 'sleepwear';
  name: string;
  nameCn: string;
  emoji: string;
  color: string;
  colorHex: string;
  estimatedPrice: {
    hkd: number;
    twd: number;
    jpy: number;
  };
}

export interface CapsuleWardrobe {
  tripDays: number;
  items: WardrobeItem[];
  totalCost: {
    hkd: number;
    twd: number;
    jpy: number;
  };
  luggageSaved: number;
}

export interface Store {
  id: string;
  city: string;
  cityCn: string;
  country: string;
  name: string;
  address: string;
  hours: string;
  hasAirportPickup: boolean;
  coordinates: { lat: number; lng: number };
}

export interface PlannerInput {
  destination: string;
  tripDays: number;
  season: Season;
  style: StylePreference;
}

export interface ImpactStats {
  travelersCount: number;
  weightSavedKg: number;
  garmentsReused: number;
  co2SavedKg: number;
}
