import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_ENDPOINT;
// Axios baseUrl configu edilir. Configu edilen baseUrl'den file istek atılır

export const getAllCharacters = createAsyncThunk("characters/getAllCharacters", async () => {
    const res = await axios(`/character`);
    return res.data
});