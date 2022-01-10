import Date from '../../Shared/Domain/Date';
import { MushroomId } from '../../Shared/Domain/MushroomId';

export interface Condition {
  isMet({ date }: { date: Date }): Promise<number>;
  isWeatherCondition(): boolean;
  mushroomId(): MushroomId;
}
