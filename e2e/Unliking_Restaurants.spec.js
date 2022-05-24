const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const dataKosong = 'Tidak ada resto untuk ditampilkan';
   
// Scenario('showing empty liked restaurants', ({ I }) => {
//     I.seeElement('#restaurants');
//     I.see(dataKosong, '#restaurants');
// });

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(dataKosong, '#restaurants');
  
  I.amOnPage('/');

  I.seeElement('.resto-item a');
  const firstRestoItem = locate('.resto__title').first();
  const firstRestoItemTitle = await I.grabTextFrom(firstRestoItem); 
  I.click(firstRestoItemTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
    
  const likedRestaurantItemTitle = await I.grabTextFrom('.resto__title');
  assert.strictEqual(firstRestoItemTitle, likedRestaurantItemTitle);

  I.click(likedRestaurantItemTitle);

  // unlike
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // favorite page
  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');
  const noFavoriteRestaurant = await I.grabTextFrom('#restaurants');
    
  assert.strictEqual(noFavoriteRestaurant, dataKosong);
});
