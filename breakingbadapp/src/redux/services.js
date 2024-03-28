import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_ENDPOINT;
// Axios baseUrl configu edilir. Configu edilen baseUrl'den file istek atılır
export const getAllCharacters = createAsyncThunk("characters/getAllCharacters", async (page = 1) => {
    const res = await axios(`/character/?page=${page}`);
    return res.data
});

export const getAllLocation = createAsyncThunk("locations/getAllLocation", async (page = 1) => {
    const res = await axios(`/location/?page=${page}`);
    return res.data

});
export const getAllEpisodes = createAsyncThunk("episodes/getAllEpisodes", async (page = 1) => {
    const res = await axios(`/episode/?page=${page}`);
    return res.data

});