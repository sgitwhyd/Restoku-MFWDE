/* eslint-disable no-tabs */
import FavoriteRestorant from '../../data/favorite-resto-idb';
import { createRestorantsItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content" id="maincontent">
    <h2 id="title" class="text-center mt-3"></h2>
        <div id="detailResto" class="detailResto">
        </div>
		<div id="likeButtonContainer">
		</div>
      </div>
    `;
  },
  async afterRender() {
    try {
      const restoContainer = document.querySelector('#detailResto');
      const restorants = await FavoriteRestorant.getAllResto();
      const detailTitle = document.querySelector('#title');
      if (restorants.length > 0) {
        restorants.forEach((restorant) => {
          restoContainer.innerHTML += createRestorantsItem(restorant);
        });
        detailTitle.innerHTML = 'Your Favorite Restorant';
      } else {
        detailTitle.innerHTML = 'No Items Display';
      }
    } catch (error) {
      const restoContainer = document.querySelector('#detailResto');
      restoContainer.innerHTML =
        "<h2 class='text-center mt-5'>Ups.. Something Error Here...</h2>";
    }
  },
};

export default Favorite;
