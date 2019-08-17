import { FoodDetailsPipe } from './food-details.pipe';

describe('FoodDetailsPipe', () => {
  it('create an instance', () => {
    const pipe = new FoodDetailsPipe();
    expect(pipe).toBeTruthy();
  });
});
