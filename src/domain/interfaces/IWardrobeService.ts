import type { CapsuleWardrobe, PlannerInput } from '../../shared/types';

export interface IWardrobeService {
  generateCapsule(input: PlannerInput): CapsuleWardrobe;
}
