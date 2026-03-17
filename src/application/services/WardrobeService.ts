import type { IWardrobeService } from '../../domain/interfaces/IWardrobeService';
import type { CapsuleWardrobe, PlannerInput, WardrobeItem } from '../../shared/types';
import { WardrobeEntity } from '../../domain/entities/WardrobeEntity';
import {
  TOPS, BOTTOMS, OUTERWEAR, LAYERS, UNDERWEAR, SLEEPWEAR,
} from '../../infrastructure/data/wardrobeData';

export class WardrobeService implements IWardrobeService {
  generateCapsule(input: PlannerInput): CapsuleWardrobe {
    const { tops, bottoms, hasLayer } = WardrobeEntity.getItemCount(input.tripDays);

    const selectedTops: WardrobeItem[] = TOPS.slice(0, tops);
    const selectedBottoms: WardrobeItem[] = BOTTOMS.slice(0, bottoms);
    const selectedOuterwear: WardrobeItem[] = [OUTERWEAR[input.season === 'winter' ? 0 : 1]];
    const selectedUnderwear: WardrobeItem[] = [...UNDERWEAR];
    const selectedSleepwear: WardrobeItem[] = [...SLEEPWEAR];
    const selectedLayers: WardrobeItem[] = hasLayer ? [...LAYERS] : [];

    const items: WardrobeItem[] = [
      ...selectedTops,
      ...selectedBottoms,
      ...selectedOuterwear,
      ...selectedLayers,
      ...selectedUnderwear,
      ...selectedSleepwear,
    ];

    return WardrobeEntity.buildCapsule(input, items);
  }
}

export const wardrobeService = new WardrobeService();
