import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = "client_id=SK8XqDfiMu0D2UBGhMXLlKwwMjv4lGNUN6CqNWdf2v0";

export const readPhotos = createAsyncThunk(
    "readPhotos",
    async (args, { rejectWithValue }) => {

        const route = `https://api.unsplash.com/photos/?per_page=30&${apiKey}`;

        const response = await fetch(route);

        try {
            const result = await response.json();
            
            return result;

        }catch(error){
            return rejectWithValue(error);
        }
    }

    
);

export const searchPhotos = createAsyncThunk(
    "searchPhotos",
    async (searchData, { rejectWithValue }) => {

        const route = `https://api.unsplash.com/photos/?per_page=30&${apiKey}`;
        const routeWithSearch = `https://api.unsplash.com/search/photos/?query=${encodeURI(searchData)}&per_page=30&${apiKey}`;

        const response = await fetch(searchData !== "" ? routeWithSearch : route);

        try {
            const result = await response.json();

            return searchData !== "" ? result.results : result;

        }catch(error){
            return rejectWithValue(error);
        }
    }
);

export const photoSlice = createSlice({
    name: "photo",
    initialState: {
        photoData: [],
        loading: false,
        error: null,
    },


    extraReducers : {
        
        //read photos extraReducers
        [readPhotos.pending] : (state) => {
            state.loading = true;
        },
        [readPhotos.fulfilled] : (state, action) => {
            state.loading = false;
            state.photoData = action.payload;
        },
        [readPhotos.rejected] : (state) => {
            state.loading = false;
            state.error = state.payload;
        },

        //search photos extraReducers
        [searchPhotos.pending] : (state) => {
            state.loading = true;
        },
        [searchPhotos.fulfilled] : (state, action) => {
            state.loading = false;
            state.photoData = action.payload;
        },
        [searchPhotos.rejected] : (state) => {
            state.loading = false;
            state.error = state.payload;
        }
    }
});

export default photoSlice.reducer;
