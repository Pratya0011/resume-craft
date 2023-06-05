import { configureStore } from "@reduxjs/toolkit";
import homeReducer from '../features/Home/HomeSlice'
import updateReducer from '../features/UpdateData/UpdateData'

export const store =  configureStore({
    reducer:{
        allResume: homeReducer,
        updateResume: updateReducer
    }
})