/* eslint-disable no-undef */

Feature('likingRestaurant');

Scenario('post a comment in restaurant detail page', async ({ I }) => {
  I.amOnPage('/');

  I.wait(2);

  I.seeElement('.resto__name a');

  const restaurant = locate('.resto__name a').first();
  I.click(restaurant);

  const name = 'testing broh';
  const review = 'ini dari e2e anjay';

  I.seeElement('form');
  I.fillField('#name', name);
  I.fillField('#review', review);

  I.click('#btn-submit');

  I.wait(2);

  I.see(name, '.review-title');
  I.see(review, '.review-body');
});
