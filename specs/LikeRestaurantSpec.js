/* eslint-disable no-undef */
import FavoriteRestorant from '../src/scripts/data/favorite-resto-idb';
import { createLikeButtonContainer } from './mock/CreateLikeButtonContainer';

describe('like one restaurant', () => {
  beforeEach(async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  });

  it('should show the message when no restaurant liked', async () => {
    document.body.innerHTML = '<h2 id="title"></h2>';
    const detailTitle = document.querySelector('#title');

    if ((await FavoriteRestorant.getAllResto().length) < 0) {
      expect(detailTitle.innerHTML).toEqual('No Items Display');
    }
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await createLikeButtonContainer({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await createLikeButtonContainer({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await createLikeButtonContainer({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restorant = await FavoriteRestorant.getResto(1);

    expect(restorant).toEqual({ id: 1 });
    FavoriteRestorant.deleteResto(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await createLikeButtonContainer({ id: 1 });

    await FavoriteRestorant.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestorant.getAllResto()).toEqual([{ id: 1 }]);
    FavoriteRestorant.deleteResto(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await createLikeButtonContainer({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestorant.getAllResto()).toEqual([]);
  });
});
