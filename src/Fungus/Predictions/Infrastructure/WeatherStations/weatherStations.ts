import { WeatherStationId } from '../../../Shared/Domain/WeatherStationId';
import { Coordinate } from '../../../Shared/Domain/Coordinate';

import { WeatherStation } from '../../Domain/WeatherStations/WeatherStation';

import { AEMETWeatherService } from './AEMETWeatherService';

export const weatherStations = [
  // To-Do Support Weather station without historical data
  // new WeatherStation({
  //   id: new WeatherStationId('6710d132-b875-48c9-ad37-9660ead515ab'),
  //   externalId: '2362C',
  //   location: new Coordinate({ latitude: 42.893772, longitude: -4.713714 }),
  //   description: 'CAMPORREDONDO DE ALBA  CUEVA DORADA',
  //   gauges: new AEMETWeatherService(),
  // }),
  // new WeatherStation({
  //   id: new WeatherStationId('024f48a4-8ebc-4424-a97c-0997b7afa3d4'),
  //   externalId: '2276B',
  //   location: new Coordinate({ latitude: 42.568817, longitude: -4.575109 }),
  //   description: 'VILLAELES DE VALDAVIA',
  //   gauges: new AEMETWeatherService(),
  // }),
  // new WeatherStation({
  //   id: new WeatherStationId('1a9a401b-cd8b-4c47-a04e-cd1dc0e242de'),
  //   externalId: '2568D',
  //   location: new Coordinate({ latitude: 42.523502, longitude: -4.851026 }),
  //   description: 'VILLAPUN',
  //   gauges: new AEMETWeatherService(),
  // }),
  new WeatherStation({
    id: new WeatherStationId('f7623236-c5db-4c69-a498-26211f0cce38'),
    externalId: '2401X',
    location: new Coordinate({ latitude: 42.009502, longitude: -4.560496 }),
    description: 'PALENCIA-GRANJA VIÑALTA',
    gauges: new AEMETWeatherService(),
  }),
  new WeatherStation({
    id: new WeatherStationId('36a74da2-5d97-40fc-9ef8-70bb11e7e9e9'),
    externalId: '2235U',
    location: new Coordinate({ latitude: 42.87062, longitude: -4.520031 }),
    description: 'CERVERA DE PISUERGA',
    gauges: new AEMETWeatherService(),
  }),
  new WeatherStation({
    id: new WeatherStationId('73d45aaf-f527-40f2-8bca-b85d315d1855'),
    externalId: '2374X',
    location: new Coordinate({ latitude: 42.350933, longitude: -4.617359 }),
    description: 'CARRIÓN DE LOS CONDES',
    gauges: new AEMETWeatherService(),
  }),
  new WeatherStation({
    id: new WeatherStationId('b8f0f114-bd0a-4376-957d-9f6343142d7d'),
    externalId: '2400E',
    location: new Coordinate({ latitude: 41.99568, longitude: -4.602777 }),
    description: 'PALENCIA-AUTILLA PINO',
    gauges: new AEMETWeatherService(),
  }),
  // new WeatherStation({
  //   id: new WeatherStationId('e920ec94-dbb3-4f67-acc7-ea0208d6d943'),
  //   externalId: '2243A',
  //   location: new Coordinate({ latitude: 42.79806, longitude: -4.277134 }),
  //   description: 'AGUILAR DE CAMPOO',
  //   gauges: new AEMETWeatherService(),
  // }),
];
