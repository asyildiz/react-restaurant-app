import Request from "../plugins/Request";

const ENDPOINTS = {
  FETCH_RESTAURANT:
    "https://asy.s3.eu-central-1.amazonaws.com/restoranData.json",
  FETCH_RESTAURANT_MENU:
    "https://asy.s3.eu-central-1.amazonaws.com/menuData.json",
};

const fetchRestaurant = () => {
  return Request.get({
    url: ENDPOINTS.FETCH_RESTAURANT,
  });
};

const fetchRestaurantMenu = () => {
  return Request.get({
    url: ENDPOINTS.FETCH_RESTAURANT_MENU,
  });
};

export default { fetchRestaurant, fetchRestaurantMenu };
