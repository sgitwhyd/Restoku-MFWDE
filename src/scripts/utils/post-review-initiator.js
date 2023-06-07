/* eslint-disable no-alert */
/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
/* eslint-disable no-tabs */

import restoDataSource from '../data/restodata-source';

const postReviewInitiator = {
  init({ id, nameReviewer, review, btnSubmit, reviewContainer, reviewItem }) {
    this._id = id;
    this._nameReviewer = nameReviewer;
    this._review = review;
    this._btnSubmit = btnSubmit;
    this._reviewContainer = reviewContainer;
    this._reviewItem = reviewItem;
    this._PostReview();
  },
  _PostReview() {
    this._btnSubmit.addEventListener('click', () => {
      const data = JSON.stringify({
        id: this._id,
        name: this._nameReviewer.value,
        review: this._review.value,
      });

      if (
        this._nameReviewer.value.length === 0 ||
        this._review.value.length === 0
      ) {
        alert('Nama Reviewer atau Isi Review tidak boleh kosong');
        return;
      }

      try {
        restoDataSource.postReview(data);

        const date = new Date().toLocaleDateString('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        const NewReview = `<div class="review_customer id="review_item">
				<div class="review-sub">Nama Customer :</div>
			<p  class="review-title"> ${this._nameReviewer.value}</p>
			<div class="review-sub">Ulasan :</div>
			<p class="review-body">${this._review.value}</p>
			<div class="date-revs">${date}</div>
			</div>`;
        this._reviewContainer.innerHTML += NewReview;

        alert('Terima Kasih Sudah Memberi Review Restoran Ini :)');

        // make default value input
        this._nameReviewer.value = '';
        this._review.value = '';
      } catch (error) {
        alert("Maaf, Review Anda Gagal Dikirimkan :'( ");
      }
    });
  },
};

export default postReviewInitiator;
