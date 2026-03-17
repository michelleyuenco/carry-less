import type { WardrobeItem, CapsuleWardrobe, PlannerInput } from '../../shared/types';

export class WardrobeEntity {
  static calculateTotalCost(items: WardrobeItem[]): CapsuleWardrobe['totalCost'] {
    return items.reduce(
      (acc, item) => ({
        hkd: acc.hkd + item.estimatedPrice.hkd,
        twd: acc.twd + item.estimatedPrice.twd,
        jpy: acc.jpy + item.estimatedPrice.jpy,
      }),
      { hkd: 0, twd: 0, jpy: 0 }
    );
  }

  static getItemCount(days: number): { tops: number; bottoms: number; hasLayer: boolean } {
    if (days <= 3) return { tops: 2, bottoms: 1, hasLayer: false };
    if (days <= 5) return { tops: 3, bottoms: 2, hasLayer: false };
    return { tops: 4, bottoms: 2, hasLayer: true };
  }

  static buildCapsule(input: PlannerInput, items: WardrobeItem[]): CapsuleWardrobe {
    const totalCost = WardrobeEntity.calculateTotalCost(items);
    return {
      tripDays: input.tripDays,
      items,
      totalCost,
      luggageSaved: 300,
    };
  }
}
