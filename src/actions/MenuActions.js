import {
    GET_DESSERT_ITEMS,
    GET_NONVEG_ITEMS,
    GET_VEG_ITEMS,
    REMOVE_VEG_ITEMS,
    REMOVE_NONVEG_ITEMS,
    REMOVE_DESSERT_ITEMS
} from "../types/Types"


export const getVegItem = () => {
    return {
        type: GET_VEG_ITEMS
    }
}

export const getNonVegItem = () => {
    return {
        type: GET_NONVEG_ITEMS
    }
}

export const getDesertItem = () => {
    return {
        type: GET_DESSERT_ITEMS
    }
}

export const removeVegItem = () => {
    return {
        type: REMOVE_VEG_ITEMS
    }
}

export const removeNonVegItem = () => {
    return {
        type: REMOVE_NONVEG_ITEMS
    }
}

export const removeDesertItem = () => {
    return {
        type: REMOVE_DESSERT_ITEMS
    }
}