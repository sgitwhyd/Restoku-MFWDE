/* eslint-disable no-undef */
import FavoriteRestorant from '../src/scripts/data/favorite-resto-idb';
import { createLikeButtonContainer } from './mock/CreateLikeButtonContainer';

describe('like one restaurant', () => {
  beforeEach(async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await FavoriteRestorant.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestorant.deleteResto(1);
  });

  it('should show the message when no restaurant liked', async () => {
    document.body.innerHTML = '<h2 id="title"></h2>';
    const detailTitle = document.querySelector('#title');

    if (!(await FavoriteRestorant.getAllResto().length) < 0) {
      expect(detailTitle.innerHTML).toEqual('Your Favorite Restorant');
    }
  });

  it('should show the unlike button', async () => {
    await createLikeButtonContainer({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the like button', async () => {
    await createLikeButtonContainer({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await createLikeButtonContainer({ id: 1 });

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestorant.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await createLikeButtonContainer({ id: 1 });

    await FavoriteRestorant.deleteResto(1);

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestorant.getAllResto()).toEqual([]);
  });
});
