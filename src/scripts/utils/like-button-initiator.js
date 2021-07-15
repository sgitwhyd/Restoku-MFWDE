/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
import FavoriteRestorant from '../data/favorite-resto-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restorant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restorant = restorant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restorant;

    if (await this._restoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _restoExist(id) {
    const restorant = await FavoriteRestorant.getResto(id);
    return !!restorant;
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestorant.deleteResto(this._restorant.id);
      this._renderButton();
    });
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestorant.putResto(this._restorant);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
