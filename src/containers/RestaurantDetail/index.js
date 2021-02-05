import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantHeader from "../../components/RestaurantHeader";
import Menu from "../../components/Menu";
import Cart from "../../components/Cart";
import {
  fetchRestaurant,
  fetchRestaurantMenu,
} from "../../redux/restaurant/actions";
import {
  addToCart,
  removeFromCart,
  updateCart,
} from "../../redux/cart/actions";
import { getRestaurant } from "../../redux/restaurant/selectors";
import { getCart } from "../../redux/cart/selector";
import "./style.scss";

export const RestaurantDetail = () => {
  const dispatch = useDispatch();
  const restaurant = useSelector(getRestaurant);
  const cart = useSelector(getCart);

  useEffect(() => {
    (async () => {
      dispatch(await fetchRestaurant());
      dispatch(await fetchRestaurantMenu());
    })();
  }, []);

  return (
    <div className="container flex">
      <div className="col-md-4">
        <Cart
          address={restaurant.address}
          items={cart}
          onQuantityChange={(item) => dispatch(updateCart(item))}
          onRemoveClick={(id) => dispatch(removeFromCart(id))}
        />
      </div>
      <div className="col-md-8">
        <RestaurantHeader
          restaurantName={restaurant.name}
          minimumPrice={restaurant.minimumPrice}
          deliveryTime={restaurant.deliveryTime}
          badges={restaurant.badges}
        />
        {restaurant.menu.map((menu) => (
          <Menu
            key={menu.title}
            onMenuItemClick={(item) => {
              dispatch(addToCart(item));
            }}
            title={menu.title}
            items={menu.items}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;
