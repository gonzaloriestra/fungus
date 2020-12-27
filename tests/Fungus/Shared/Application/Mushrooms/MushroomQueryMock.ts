import { MushroomQuery } from '../../../../../src/Fungus/Shared/Application/Mushrooms/MushroomQuery';
import { MushroomView } from '../../../../../src/Fungus/Shared/Application/Mushrooms/MushroomView';

export default class MushroomQueryMock implements MushroomQuery {
  private mockFindById = jest.fn();
  private mushroom?: MushroomView = undefined;

  findById(): MushroomView | undefined {
    this.mockFindById();
    return this.mushroom;
  }

  returnOnFindById(mushroom: MushroomView) {
    this.mushroom = mushroom;
  }

  assertFindByIdHasBeenCalled() {
    expect(this.mockFindById).toHaveBeenCalled();
  }
}
