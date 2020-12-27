import * as fs from 'fs';
import * as readline from 'readline';

import { MushroomId } from '../../Shared/Domain/Mushrooms/MushroomId';

import { WeatherConditionRepository } from '../Domain/WeatherConditionRepository';
import { WeatherConditions } from '../Domain/WeatherConditions';
import WeatherConditionFactory from '../Domain/WeatherConditionFactory';

export class FileWeatherConditionRepository implements WeatherConditionRepository {
  weatherConditions: WeatherConditions;
  filePath: string;

  constructor({
    weatherConditions = new WeatherConditions(),
    filePath = 'database/weatherConditions.txt',
    onLoad,
  }: { weatherConditions?: WeatherConditions; filePath?: string; onLoad?: () => void } = {}) {
    this.weatherConditions = weatherConditions;
    this.filePath = filePath;

    this.__fetch({ onFinish: onLoad });
  }

  __fetch({ onFinish = (): void => undefined }: { onFinish?: () => void } = {}): void {
    const lineReader = readline.createInterface({
      input: fs.createReadStream(this.filePath),
      crlfDelay: Infinity,
    });

    lineReader.on('close', onFinish);
    lineReader.on('line', (line) => {
      const json = JSON.parse(line);

      this.weatherConditions.add(WeatherConditionFactory.fromPrimitives(json));
    });
  }

  findByMushroom(mushroomId: MushroomId): WeatherConditions {
    return this.weatherConditions.findByMushroom(mushroomId) || new WeatherConditions();
  }
}
