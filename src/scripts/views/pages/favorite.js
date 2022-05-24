import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoListItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="content">
        <h2 class="content__heading">Favorite</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    // jika data restoran kosong
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
      Tidak ada resto untuk ditampilkan
      `;
    }
    // menampilkan semua data restoran favorite
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoListItem(resto);
    });
  },
};

export default Favorite;
