import { createSlice } from '@reduxjs/toolkit';
import { getAllCharacters } from './../services';

export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getAllCharacters.pending, (state) => {
                state.isLoading = true; //Pending yani bekleme durumunda loadin true haline getiriyor
            })
            .addCase(getAllCharacters.fulfilled, (state, action) => {
                state.items = action.payload; // FulFilled durumu olumlu durumunda items'a veri atıyor
                state.isLoading = false; // loading false yapıyor
            })
            .addCase(getAllCharacters.rejected, (state, action) => {
                state.isLoading = false; // rejected Durumunda loading false yapıyor
                state.error = action.error.message; // rejected durumunda hata mesajı atıyor
            })
    }
})

export default charactersSlice.reducer;