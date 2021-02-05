import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART} from "./types";

export function addToCart(item) {
  return { type: ADD_TO_CART, payload: item };
}

export function removeFromCart(id) {
  return { type: REMOVE_FROM_CART, payload: id };
}

export function updateCart(item) {
  return { type: UPDATE_CART, payload: item };
}
