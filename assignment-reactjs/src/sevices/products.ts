import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../interfaces/Products";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
    }),
    tagTypes: ["IProduct"],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `product`,
            providesTags: ["IProduct"],
        }),
        getProduct: builder.query<IProduct[], void>({
            query: (id) => `product/${id}`,
        }),
        removeProduct: builder.mutation<void, IProduct>({
            query: (id) => {
                return {
                    url: `product/${id}`,
                    method: "DELETE",
                };
            },
        }),
        addProduct: builder.mutation<IProduct, Partial<IProduct>>({
            query: (product) => {
                return {
                    url: "product",
                    method: "POST",
                    body: product,
                };
            },
        }),
        updateproduct: builder.mutation<IProduct, Partial<IProduct>>({
            query: (product) => {
                return {
                    url: `product/${product.id}`,
                    method: "PUT",
                    body: product,
                };
            },
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useUpdateproductMutation,
    useRemoveProductMutation,
} = productApi;
