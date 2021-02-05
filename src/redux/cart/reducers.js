import initialState from "./initialState";
import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART} from "./types";

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const clonedCart = [...state.cart];
      let isExist = false;

      clonedCart.forEach((item) => {
        if (item.id === action.payload.id) {
          item.quantity += action.payload.quantity;
          isExist = true;
        }
      });

      if (isExist === false) {
        clonedCart.push(action.payload);
      }

      return {
        cart: clonedCart,
      };
    case REMOVE_FROM_CART:
      return {
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case UPDATE_CART:
      let clonedData = [...state.cart];
      let foundedItem = clonedData.find(
        (item) => item.id === action.payload.id
      );

      foundedItem.quantity = action.payload.quantity;

      return {
        cart: clonedData,
      };
    default:
      return state;
  }
}
