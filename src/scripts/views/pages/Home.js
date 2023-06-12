/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
import restoDataSource from '../../data/restodata-source';
import { createRestorantsItem } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
				<div class="hero__inner">
					<h1 class="hero__title">Makanan Lezat Ada di tangan Anda.</h1>
					<p class="hero__tagline">
						RestoKu menyediakan restoran terbaik di sekitar Anda.
					</p>
					<a href="#content_container" class="hero__cta">Selengkapnya</a>
				</div>
		</div>
      <section class="main__container" id="content_container">
				<h2 class="main__title">Jelajahi Restoran</h2>
				<div class="content-center">
					<div class="resto" id="root-content">
						<div  class="resto__wrapper"></div>
					</div>
				</div>
			</section>
    `;
  },
  async afterRender() {
    const restorants = await restoDataSource.getListResto();
    const restoContainer = document.querySelector('.resto__wrapper');
    restorants.forEach((restorant) => {
      restoContainer.innerHTML += createRestorantsItem(restorant);
    });
  },
};

export default Home;
