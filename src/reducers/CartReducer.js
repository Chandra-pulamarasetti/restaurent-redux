import { ADD_TO_CART, DELETE_FROM_CART, INCREASE_QUANTITY, REDUCE_QUANTITY } from "../types/Types";

const initialState = {
    cartList: []
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            action.payload.count = 1
            let index = state.cartList.findIndex(dish => dish.name === action.payload.name)
            if (index > -1) {
                let cartList = [...state.cartList]
                cartList[index] = { ...cartList[index], count: state.cartList[index].count + 1 }
                return {
                    cartList
                }
            } else {
                return {
                    ...state,
                    cartList: [...state.cartList, action.payload]
                }
            }
        case DELETE_FROM_CART:
            return {
                cartList: [
                    ...state.cartList.slice(0, action.payload),
                    ...state.cartList.slice(action.payload + 1)
                ]
            }
        case INCREASE_QUANTITY:
            var cartList = [...state.cartList]
                cartList[action.payload] = { ...cartList[action.payload], count: state.cartList[action.payload].count + 1 }
                return {
                    cartList
                }
        case REDUCE_QUANTITY:
            var cartList = [...state.cartList]
                cartList[action.payload] = { ...cartList[action.payload], count: state.cartList[action.payload].count - 1 }
                return {
                    cartList
                }
        default: return state
    }
}

export default cartReducer;