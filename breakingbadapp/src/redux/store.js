import { configureStore } from '@reduxjs/toolkit'
import charactersSlice from './characters/charactersSlice'
import locationsSlice from './characters/locationsSlice';
import episodesSlice from './characters/episodesSlice';

export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        locations: locationsSlice,
        episodes: episodesSlice,
    },
})
