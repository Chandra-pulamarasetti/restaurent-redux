import { ADD_TO_CART, DELETE_FROM_CART, INCREASE_QUANTITY, REDUCE_QUANTITY } from "../types/Types";


export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload : item
    }
}


export const deleteFromCart = (id) => {
    return {
        type: DELETE_FROM_CART,
        payload : id
    }
}

export const increaseQuantity = id => {
    return {
        type: INCREASE_QUANTITY,
        payload : id
    }
}

export const reduceQuantity = id => {
    return {
        type: REDUCE_QUANTITY,
        payload : id
    }
}