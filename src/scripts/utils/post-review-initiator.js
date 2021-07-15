/* eslint-disable no-tabs */
/* eslint-disable no-alert */
import restoDataSource from '../data/restodata-source';

const postReviewInitiator = {
  init({
    id, nameReviewer, review, btnSubmit, reviewContainer, reviewItem,
  }) {
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
      restoDataSource.postReview(data);

      const date = new Date().toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const NewReview = `<div class="review_customer id="review_item">
				<div class="review-title">Nama Customer :</div>
			<p> ${this._nameReviewer.value}</p>
			<div class="review-title">Ulasan :</div>
			<p>${this._review.value}</p>
			<div class="date-revs">${date}</div>
			</div>`;
      this._reviewContainer.innerHTML += NewReview;

      alert('Terima Kasih Sudah Memberi Review Restoran Ini :)');

      // make default input
      this._nameReviewer.value = '';
      this._review.value = '';
    });
  },
};

export default postReviewInitiator;
