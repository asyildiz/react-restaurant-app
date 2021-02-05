import initialState from "./initialState";
import {FETCH_RESTAURANT, FETCH_RESTAURANT_MENU} from "./types";

export default function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANT:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_RESTAURANT_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
}
