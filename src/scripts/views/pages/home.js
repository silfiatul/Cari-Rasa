import RestaurantSource from '../../data/restaurant-source';
import { createRestoListItem } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homeResto();
    // console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoListItem(resto);
    });
  },
};

export default Home;
