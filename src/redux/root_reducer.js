import { combineReducers } from "redux";
import { cakeStore } from "./reducers";
import { userCart } from "./reducers";
import { user } from "./reducers";
import { search } from "./reducers";
import { error } from "./reducers";
import { theme } from "./reducers";
import { screen } from "./reducers";

export const rootReducer = combineReducers({cakeStore, userCart, user, search, error, theme, screen});