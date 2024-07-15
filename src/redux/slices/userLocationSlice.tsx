
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { destinationType, originType } from "../../../utils/types"




const initialState: {
    origin: originType ,
    destination: destinationType
  
} = {
    origin: {
        coords: {
            lat:  null,
            lng:  null,
        },
        description: null
    },
    destination: {
        coords: {
            lat: null,
            lng: null,
        },
        description: null
    }
}

const userLocation = createSlice({
    name:"userLoaction",
    initialState,
    reducers: {
        saveUserOrigin: (state, action:PayloadAction<originType>) => { 
             state.origin = action.payload
        },
        saveUserDestination: (state, action:PayloadAction<destinationType>) => { 
            state.destination= action.payload 
        },
        resetDestination: (state) => { 
            state.destination = {
                coords: {
                    lat:  null,
                    lng:  null,
                },
                description: null
            }
            state.origin = {
                coords: {
                    lat:  null,
                    lng:  null,
                },
                description: null
            }
        }
    }
})





export const {saveUserDestination, saveUserOrigin, resetDestination} =  userLocation.actions


export const userLocationReducer = userLocation.reducer