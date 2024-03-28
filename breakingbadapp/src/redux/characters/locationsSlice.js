import { createSlice } from '@reduxjs/toolkit';
import { getAllLocation } from '../services';

export const locationsSlice = createSlice({
    name: "locations",
    initialState: {
        items: [],
        status: "idle",
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
            .addCase(getAllLocation.pending, (state) => {
                state.status = "loading"; //Pending yani bekleme durumunda loadin true haline getiriyor
            })
            .addCase(getAllLocation.fulfilled, (state, action) => {
                state.items = [...state.items, ...action.payload.results];
                state.count = action.payload.info.count;
                state.tpages = action.payload.info.pages;
                state.nextPageLink = action.payload.info.next;
                state.nextPage += 1;
                state.status = "succeeded"; // loading false yapıyor


            })
            .addCase(getAllLocation.rejected, (state, action) => {
                state.status = "failed"; // rejected Durumunda loading false yapıyor
                state.error = action.error.message; // rejected durumunda hata mesajı atıyor
            })

    }
})

export default locationsSlice.reducer;