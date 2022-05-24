import CONFIG from '../../globals/config';

const createRestoListItem = (resto) => `
<div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster lazyload" alt="${resto.name}"
            data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}">
        <div class="resto-item__header__city">
            <p>${resto.city}</p>
        </div>
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3 class="resto__title"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
  </div>
`;

const createRestoDetailItem = (resto) => `
  <div class="header__detail">
    <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" />
    <h2 class="resto__title">${resto.name}</h2>
    <p>${resto.address} <br/> ${resto.city}</p>
  </div>
    
    <h4 class="header__items">Kategori</h4>
    <ul class="category">${resto.categories
    .map(
      (kategori) => `
            <li>${kategori.name}</li>
          `,
    ).join('')}
    </ul>

    <h4 class="header__items">Menu</h4>
    <div class="menu">
      <ul class="foods">
        <h4 class="header__items">Makanan</h4>
        ${resto.menus.foods
    .map(
      (food) => `
                <li>${food.name}</li>
              `,
    ).join('')}
      </ul>
      <ul class="drinks">
        <h4 class="header__items">Minuman</h4>
        ${resto.menus.drinks
    .map(
      (drink) => `
              <li>${drink.name}</li>
            `,
    ).join('')}
      </ul>
    </div>
  
    <div class="resto__overview">
        <h3 class="header__items">Deskripsi</h3>
        <p>${resto.description}</p>
    </div>

    <h3 class="header__items">Review</h3>
    <article class="review">    
        ${resto.customerReviews.slice(0, 2)
    .map(
      (review) => `
            <div class="review_item">
            <h3 id="nama_review">${review.name}</h3>
            <p> ${review.review} <br/> <small>${review.date}</small> </p>
            </div>
          `,
    ).join('')}
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoListItem,
  createRestoDetailItem,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
