import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/Products";

type Stateproduct = {
    value: IProduct[];
    item: IProduct;
};
const initialState: Stateproduct = {
    value: [],
    item: { name: "" },
};

//fetch all Products
export const fechProducts = createAsyncThunk(
    "product/fetchProduct",
    async () => {
        const response = await fetch("http://localhost:8080/api");
        const data = await response.json();
        return data;
    }
);
//addProduct
export const addProduct = createAsyncThunk(
    "product/createProduct",
    async (product: IProduct) => {
        const response = await fetch("http://localhost:3001/product", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        return data;
    }
);
//UpdateProduct

//deleteProduct
export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",
    async (product: IProduct) => {
        const response = await fetch(
            "http://localhost:3001/product/" + product.id,
            {
                method: "DELETE",
            }
        );
    }
);
const productSlice = createSlice({
    initialState,
    name: "product",
    reducers: {},
    extraReducers: (builder) => {
        //fetch all
        builder.addCase(fechProducts.fulfilled, (state, action) => {
            state.value = action.payload;
        });
        //add
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.value.push(action.payload);
        });
        //update

        //delete
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.value;
        });
    },
});

export default productSlice.reducer;
