import { createSlice } from '@reduxjs/toolkit';
import { getAllCharacters } from './../services';

export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        nextPage: 1,
        count: 0,
        tpages: 0,
        nextPageLink: null,
        prevPageLink: null,

    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getAllCharacters.pending, (state) => {
                state.isLoading = true; //Pending yani bekleme durumunda loadin true haline getiriyor
            })
            .addCase(getAllCharacters.fulfilled, (state, action) => {
                state.items = [...state.items, ...action.payload.results];
                state.count = action.payload.info.count;
                state.tpages = action.payload.info.pages;
                state.nextPageLink = action.payload.info.next;
                state.nextPage += 1;
                console.log(action.payload); // FulFilled durumu olumlu durumunda items'a veri atıyor
                state.isLoading = false; // loading false yapıyor

            })
            .addCase(getAllCharacters.rejected, (state, action) => {
                state.isLoading = false; // rejected Durumunda loading false yapıyor
                state.error = action.error.message; // rejected durumunda hata mesajı atıyor
            })
    }
})

export default charactersSlice.reducer;