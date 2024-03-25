import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: []
    },
    reducers: {
        showMiniCart(state){
            state.showMiniCart = true;
        },
        hideMiniCart(state){
            state.showMiniCart = false;
        }
    }
})
const { reducer, actions } = cartSlice;
export const { showMiniCart,hideMiniCart } = actions
export default reducer;