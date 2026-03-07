import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/details",
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json();
        return data;
    }
)

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload
        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.items = action.payload
        })
    }
})

export default productSlice.reducer