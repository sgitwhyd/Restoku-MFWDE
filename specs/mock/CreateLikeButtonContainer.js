/* eslint-disable import/prefer-default-export */

import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonContainer = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restorant: restaurant,
  });
};

export { createLikeButtonContainer };
