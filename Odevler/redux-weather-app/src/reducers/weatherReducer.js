import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (params) => {
    console.log({ params });
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_WEATHER_API_URL}/forecast`,
        {
          params: {
            appid: import.meta.env.VITE_WEATHER_API_KEY,
            units: "metric",
            ...(params?.q && { q: params?.q }),
            ...(params?.lat && { lat: params?.lat }),
            ...(params?.lon && { lon: params?.lon }),
          },
        }
      );
      return response?.data;
    } catch (error) {
      throw new Error(error?.message);
    }
  }
);

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error?.message;
    });
  },
});

// export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
