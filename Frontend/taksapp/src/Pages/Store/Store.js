import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


const taskReducer=createSlice({
    name :"myRducer",
    initialState:{


    },

    reducers:{

         openSidebar:(state)=>{
      state.open=true
    },

    closeSidebar:(state)=>{
      state.open=false
    },



    }
})

const store=configureStore({reducer:taskReducer.reducer})
export default store;
export const actions=taskReducer.actions