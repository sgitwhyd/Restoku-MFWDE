/* eslint-disable no-undef */
const assert = require('assert');

Feature('likingRestaurant');

Scenario(
  'showing message in favorite page when no liked restaurant',
  async ({ I }) => {
    I.amOnPage('/#/favorite');

    I.see('No Items Display', '#title');
  },
);

Scenario('like a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.wait(2);

  I.seeElement('.resto__name a');

  const restaurant = locate('.resto__name a').first();
  const restoName = await I.grabTextFrom(restaurant);
  I.click(restaurant);

  I.wait(2);

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.wait(2);

  I.seeElement('.resto__name a');
  const likedRestoName = await I.grabTextFrom('.resto__name a');

  assert.strictEqual(restoName, likedRestoName);
});

Scenario('unlike a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.wait(2);

  I.seeElement('.resto__name a');

  const restaurant = locate('.resto__name a').first();

  I.click(restaurant);

  I.wait(2);

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.wait(2);

  I.amOnPage('/#/favorite');

  I.wait(2);

  I.seeElement('.resto__name a');
  I.click(restaurant);

  I.wait(2);

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.wait(2);

  I.see('No Items Display', '#title');
});
