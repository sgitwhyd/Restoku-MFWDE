/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
import CONFIG from '../../globals/config';

const createRestorantsItem = (restorant) => `<article class="resto_item">
							<figure class="resto__image--wrapper">
								<img
									data-src="${CONFIG.BASE_IMAGE_URL}${restorant.pictureId}"
									alt="${restorant.name}"
									class="resto__image lazyload"
								/>
							</figure>
							<div class="resto__content">
								<div class="resto__title">
									<h2 class="resto__location">
										<span><i class="fa fa-map-marker"></i></span>
										<span>${restorant.city}</span>
									</h2>
									<h2 class="resto__rating">
										<span><i class="fa fa-star"></i></span>
										<span>${restorant.rating}</span>
									</h2>
								</div>
								<div class="resto__info">
									<h2 class="resto__name"><a href="${`/#/detail/${restorant.id}`}">${
  restorant.name
}</a></h2>
									<p class="resto__description">${restorant.description.substring(0, 100)}...</p>
								</div>
							</div>
						</article>`;

const createRestoDetail = (restorant) => `<div class="restoDetail_Wrapper">
	<h3>Restorant Detail</h3>
	<div class="flex-row">
	<div class="resto_image">
		<img class="lazyload" data-src=${CONFIG.BASE_IMAGE_URL}${
  restorant.pictureId
} alt=${restorant.name} />
	</div>
	<div class="resto_info">
	<p class="resto_name">
	 ${restorant.name}
	</p >
	<p class="resto_rating">
	<i class="fa fa-star"></i> ${restorant.rating}
	</p>
	<div class="info my-3">
	<p class="detail-title">Alamat</p>
	<p class="alamat_resto">
	${restorant.city} <br/>
	${restorant.address}
	</p>
	</div>
	<div class="desription">
	<p class="detail-title">Deskripsi</p>
	<p class="deskripsi_resto">
	${restorant.description}
	</p>
	</div>
	</div>
	
	</div>
	<div class="resto_menu_wrapper mt-5">
	<div class="makanan">
	<p class="detail-title text-center mb-3">Menu Makanan</p>
	<div class="resto_foods">
	${restorant.menus.foods
    .map((foods) => `<li class="list-group-item">${foods.name}</li>`)
    .join('')}
	</div>
	</div>
	<div class="minuman">
	<p class="detail-title text-center mb-3">Menu Minuman</p>
	<div class="resto_drinks">
	${restorant.menus.drinks
    .map((drinks) => `<li class="list-group-item">${drinks.name}</li>`)
    .join('')}
	</div>
	</div>
	</div>
	<div class="detail-title text-center mt-5">Ayo Tulis Pengalaman mu di Restoran Ini</div>
<div class="add_review_wrapper">
	<div class="input_wrapper">
			<div class="review-form" >
			<label for="nama">Nama</label>
			<input  type="text" name="name" id="name" placeholder="Masukan Nama Kamu" required />
			<label for="review">Review</label>
			<textarea  name="review" id="review" cols="5" rows="5" placeholder="Tulis Review Kamu Disini" required></textarea>
			<button aria-label="submit review" id="btn-submit" type="submit">Submit</button>
		</div>
	</div>
	</div>
	<div class="detail-title reviewTitle text-center">Apa Kata Mereka ?</div>
	<div class="customer-review" id="customer_review_container">
	${restorant.customerReviews
    .map(
      (review) => `<div class="review_customer" id="review_item">
			<div class="review-sub">Nama Customer :</div>
        <p class="review-title"> ${review.name}</p>
		<div class="review-sub">Ulasan :</div>
        <p class='review-body'>${review.review}</p>
        <div class="date-revs">${review.date}</div>
        </div>`,
    )
    .join('')}
	</div>
	</div>
	`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestorantsItem,
  createRestoDetail,
  createLikedButtonTemplate,
  createLikeButtonTemplate,
};
