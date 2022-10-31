import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Datum } from "./filter.slice";


interface FavoritesState {
    favorites: Datum[];
    isLoading: boolean;
    
}

const initialState: FavoritesState = {
    favorites: [],
    isLoading: true,
   
};

interface Payload {
    toggle : boolean;
    item : Datum;
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action : PayloadAction<Payload>) => {
            const {item, toggle} = action.payload
        
            if(toggle){
               state.favorites.push(item)
            }else{
                const index = state.favorites.findIndex((i : Datum) => i?.id === item?.id);
                state.favorites.splice(index, 1);
            }

            state.isLoading = false;
        }
        
    },

})

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;