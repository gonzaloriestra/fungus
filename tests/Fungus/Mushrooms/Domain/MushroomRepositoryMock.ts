import { MethodNotImplemented } from '../../../../src/Fungus/Shared/Domain/MethodNotImplemented';

import { MushroomRepository } from '../../../../src/Fungus/Mushrooms/Domain/MushroomRepository';
import { Mushroom } from '../../../../src/Fungus/Mushrooms/Domain/Mushroom';
import { MushroomId } from '../../../../src/Fungus/Shared/Domain/MushroomId';
import { Mushrooms } from '../../../../src/Fungus/Mushrooms/Domain/Mushrooms';

export default class MushroomRepositoryMock implements MushroomRepository {
  private mockAll = jest.fn();
  private mushrooms: Mushrooms = new Mushrooms();

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
    throw new MethodNotImplemented();
  }

  findById(_: MushroomId): Mushroom | undefined {
    throw new MethodNotImplemented();
  }

  add(_: Mushroom): void {
    throw new MethodNotImplemented();
  }

  findByScientificName(_: string): Mushroom | undefined {
    throw new MethodNotImplemented();
  }
}
