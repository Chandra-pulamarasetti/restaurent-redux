import { combineReducers } from "redux";

import MenuReducer from "./MenuReducers";
import cartReducer from "./CartReducer";

export default combineReducers({
    menu: MenuReducer,
    cart : cartReducer
})