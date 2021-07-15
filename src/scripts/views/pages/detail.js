/* eslint-disable camelcase */
/* eslint-disable no-tabs */
import restoDataSource from '../../data/restodata-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetail } from '../templates/template-creator';
import likeButtonInitiator from '../../utils/like-button-initiator';
import postReviewInitiator from '../../utils/post-review-initiator';

const Detail = {
  async render() {
    return `
     <div class="content">
        <div id="detailResto" class="detailResto">
        </div>
		<div id="likeButtonContainer">
		</div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restorant = await restoDataSource.getDetailResto(url.id);
    const restoContainer = document.querySelector('#detailResto');
    restoContainer.innerHTML = createRestoDetail(restorant);

    const nameReviewer = document.getElementById('name');
    const review = document.getElementById('review');
    const btn_submit = document.querySelector('#btn-submit');
    const reviewContainer = document.querySelector(
      '#customer_review_container',
    );
    const reviewItem = document.querySelector('#review_item');

    likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restorant: {
        id: restorant.id,
        name: restorant.name,
        description: restorant.description,
        pictureId: restorant.pictureId,
        rating: restorant.rating,
        city: restorant.city,
      },
    });

    postReviewInitiator.init({
      id: url.id,
      nameReviewer,
      review,
      btnSubmit: btn_submit,
      reviewContainer,
      reviewItem,
    });
  },
};

export default Detail;
