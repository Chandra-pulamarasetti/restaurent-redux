import { GET_DESSERT_ITEMS, GET_NONVEG_ITEMS, GET_VEG_ITEMS, REMOVE_VEG_ITEMS, REMOVE_NONVEG_ITEMS, REMOVE_DESSERT_ITEMS } from "../types/Types"

import MenuList from '../MenuList.json'


const initialState = {
    items: MenuList,
}


const MenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VEG_ITEMS:
            return {
                ...state,
                vegItems: state.items.filter(item => item.category.indexOf('V') === 0)
            }
        case GET_NONVEG_ITEMS:
            return {
                ...state,
                nonVegItems: state.items.filter(item => item.category.indexOf('NV') === 0)
            }
        case GET_DESSERT_ITEMS:
            return {
                ...state,
                dessertItems: state.items.filter(item => item.category.indexOf('D') === 0)
            }
        case REMOVE_VEG_ITEMS:
            return {
                ...state,
                vegItems: []
            }
        case REMOVE_NONVEG_ITEMS:
            return {
                ...state,
                nonVegItems: []
            }
        case REMOVE_DESSERT_ITEMS:
            return {
                ...state,
                dessertItems: []
            }
        default: return state
        }
        
}

export default MenuReducer;