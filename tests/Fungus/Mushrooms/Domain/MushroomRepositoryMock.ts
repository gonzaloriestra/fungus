import { MushroomRepository } from '../../../../src/Fungus/Mushrooms/Domain/MushroomRepository';
import { Mushroom } from '../../../../src/Fungus/Mushrooms/Domain/Mushroom';
import { MushroomId } from '../../../../src/Fungus/Shared/Domain/Mushrooms/MushroomId';
import { Mushrooms } from '../../../../src/Fungus/Mushrooms/Domain/Mushrooms';

export default class MushroomRepositoryMock implements MushroomRepository {
  private mockAll = jest.fn();
  private mockAdd = jest.fn();
  private mockFindById = jest.fn();
  private mockFindByScientificName = jest.fn();
  private mockClean = jest.fn();

  private mushrooms: Mushrooms = new Mushrooms();
  private mushroomFindById?: Mushroom = undefined;
  private mushroomFindByScientificName?: Mushroom = undefined;

  all(): Mushrooms {
    this.mockAll();
    return this.mushrooms;
  }

  returnOnAll(mushrooms: Mushrooms): void {
    this.mushrooms = mushrooms;
  }

  assertAllHasBeenCalled(): void {
    expect(this.mockAll).toHaveBeenCalled();
  }

  clean(): void {
    this.mockClean();
  }

  assertCleanHasBeenCalled(): void {
    expect(this.mockClean).toHaveBeenCalled();
  }

  findById(_: MushroomId): Mushroom | undefined {
    this.mockFindById();
    return this.mushroomFindById;
  }

  returnOnFindById(mushroom: Mushroom): void {
    this.mushroomFindById = mushroom;
  }

  assertFindByIdHasBeenCalled(): void {
    expect(this.mockFindById).toHaveBeenCalled();
  }

  add(_: Mushroom): void {
    this.mockAdd();
  }

  assertAddHasBeenCalled(): void {
    expect(this.mockAdd).toHaveBeenCalled();
  }

  assertAddHasNotBeenCalled(): void {
    expect(this.mockAdd).not.toHaveBeenCalled();
  }

  findByScientificName(_: string): Mushroom | undefined {
    this.mockFindByScientificName();
    return this.mushroomFindByScientificName;
  }

  returnOnFindByScientificName(mushroom: Mushroom): void {
    this.mushroomFindByScientificName = mushroom;
  }

  assertFindByScientificNameHasBeenCalled(): void {
    expect(this.mockFindByScientificName).toHaveBeenCalled();
  }
}
