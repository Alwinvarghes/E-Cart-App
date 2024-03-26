import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cartSlice',
    initialState:[],
    reducers:{
        //function to add items cart
        addToCart:(state,action)=>{
            state.push(action.payload)
        },

        //function to remove cart items
        removeFromCart:(state,action)=>{
           return state.filter(item=>item.id!=action.payload)
        },
        //function to empty the cart array
        emptycart:(state)=>{
           state = []
        }
    }
})
export const {addToCart,removeFromCart,emptycart} =cartSlice.actions
export default cartSlice.reducer