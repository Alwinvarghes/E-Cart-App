import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name:'wishlistSlice',
    initialState:[],
    reducers:{
        //action
        //1)function to add item wishlist
        addToWishlist:(state,action)=>{
            state.push(action.payload)

        },
        //2) fuction to remove item from wishlist

        removeFromWishlist:(state,action)=>{
           return state.filter(item=>item.id!=action.payload)
        }
    }
})
export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer