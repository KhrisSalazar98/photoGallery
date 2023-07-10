import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const readPhotos = createAsyncThunk(
    "readPhotos",
    async (args, { rejectWithValue }) => {
        const response = await fetch(

        );

        try {
            const result = await response.json();
            
            return result;

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
        searchString: ""
    },

    reducers: {
        searchResult: (state, action) => {
            state.searchString = action.payload;
        }
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
        }
    }
});

export default photoSlice.reducer;
export const {searchResult} = photoSlice.actions;