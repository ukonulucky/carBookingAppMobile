import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userLocationReducer } from "../slices/userLocationSlice";




export const store = configureStore({
    reducer: {
      userLocationReducer

        
    }
})


export const useAppDispatch: () => typeof store.dispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector