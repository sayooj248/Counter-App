import { configureStore } from "@reduxjs/toolkit";
import counterReduer from './Slice'
const store=configureStore({
    reducer:{
        counter:counterReduer,

    }
})

export default store