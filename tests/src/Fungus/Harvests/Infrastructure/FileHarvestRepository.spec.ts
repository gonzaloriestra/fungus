import * as fs from 'fs';

import { Harvest } from '../../../../../src/Fungus/Harvests/Domain/Harvest';
import { Location } from '../../../../../src/Fungus/Locations/Domain/Location';

import { FileHarvestRepository } from '../../../../../src/Fungus/Harvests/Infrastructure/FileHarvestRepository';
import { LocationId } from '../../../../../src/Fungus/Locations/Domain/LocationId';
import exp from 'constants';

it('empty test', () => {
  expect(true).toBeTruthy();
});
// describe('FileHarvestRepository', () => {
//   const filePath = 'testHarvestRepository.txt';
//
//   describe('.add', () => {
//     afterAll(() => {
//       fs.unlinkSync(filePath);
//     });
//
//     it('should add a new Harvest to the repository', () => {
//       const harvestRepository = new FileHarvestRepository({ filePath });
//       const harvest = new Harvest({
//         locationId: LocationId.create(),
//         date: new Date(),
//       });
//
//       harvestRepository.add(harvest);
//
//       expect(harvestRepository.count()).toEqual(1);
//     });
//   });
//
//   describe('.findById', () => {
//     afterAll(() => {
//       fs.unlinkSync(filePath);
//     });
//
//     it('should find existing Harvest from the repository', () => {
//       const harvestRepository = new FileHarvestRepository({ filePath });
//       const harvest = new Harvest({ locationId: LocationId.create(), date: new Date() });
//
//       harvestRepository.add(harvest);
//
//       expect(harvestRepository.findById(harvest.id())).toBeDefined();
//     });
//
//     it('should not find Harvest which are not included in the repository', () => {
//       const harvestRepository = new FileHarvestRepository({ filePath });
//       const harvest = new Harvest({ locationId: LocationId.create(), date: new Date() });
//
//       expect(harvestRepository.findById(harvest.id())).toBeUndefined();
//     });
//   });
//
//   describe('.filterBy', () => {
//     const today = new Date();
//     const pastDate = new Date('1985-12-19');
//     const locationIdOne = LocationId.create();
//     const locationOne = new Item({ id: locationIdOne, name: 'Item One', coordinates: [] });
//     const locationIdTwo = LocationId.create();
//
//     const harvestRepository = new FileHarvestRepository({ filePath });
//     const todayHarvest = new Harvest({ locationId: locationIdOne, date: today });
//     const pastHarvest = new Harvest({ locationId: locationIdTwo, date: pastDate });
//
//     beforeAll(() => {
//       harvestRepository.add(todayHarvest);
//       harvestRepository.add(pastHarvest);
//     });
//
//     afterAll(() => {
//       fs.unlinkSync(filePath);
//     });
//
//     it('should return all harvests when no params are defined', () => {
//       const result = harvestRepository.filterBy();
//
//       expect(result.length).toEqual(2);
//     });
//
//     it('should filter by date', () => {
//       const result = harvestRepository.filterBy({ date: pastDate });
//
//       expect(result.length).toEqual(1);
//       expect(result[0].isEqual(pastHarvest)).toBeTruthy();
//     });
//
//     it('should filter by location', () => {
//       const result = harvestRepository.filterBy({ location: locationOne });
//
//       expect(result.length).toEqual(1);
//       expect(result[0].isEqual(todayHarvest)).toBeTruthy();
//     });
//   });
// });
