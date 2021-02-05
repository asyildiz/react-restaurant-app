import {FETCH_RESTAURANT, FETCH_RESTAURANT_MENU} from "./types";

import RestaurantService from "../../services/RestaurantService";

export async function fetchRestaurant() {
  const {
    d: { ResultSet },
  } = await RestaurantService.fetchRestaurant();
  return {
    type: FETCH_RESTAURANT,
    payload: {
      name: ResultSet.DisplayName,
      address: ResultSet.AddressText,
      badges: [
        {
          label: "Hız",
          score: ResultSet.Speed,
        },
        {
          label: "Servis",
          score: ResultSet.Serving,
        },
        {
          label: "Lezzet",
          score: ResultSet.Flavour,
        },
      ],
      minimumPrice: ResultSet.DeliveryAreas[0].MinimumPrice,
      deliveryTime: ResultSet.DeliveryTime,
    },
  };
}

export async function fetchRestaurantMenu() {
  const {
    d: { ResultSet },
  } = await RestaurantService.fetchRestaurantMenu();
  return {
    type: FETCH_RESTAURANT_MENU,
    payload: ResultSet.map((menu) => ({
      title: menu.DisplayName,
      items: menu.Products.map((menuItem) => ({
        id: menuItem.ProductId,
        name: menuItem.DisplayName,
        description: menuItem.Description,
        price: menuItem.ListPrice,
      })),
    })),
  };
}
