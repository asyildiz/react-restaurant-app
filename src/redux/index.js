import {combineReducers, createStore} from "redux";
import cartReducer from "./cart/reducers";
import restaurantReducer from "./restaurant/reducers";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
});

export default function configureStore() {
  return createStore(rootReducer);
}
