import React, { useState } from "react";
import { useUpdateproductMutation } from "../sevices/products";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/Products";

type Props = {};

const ReactQueryUpdate = (props: Props) => {
    const [updateProduct, { isLoading }] = useUpdateproductMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProduct>();

    const onSubmitHandler: SubmitHandler<IProduct> = (data) => {
        updateProduct(data);
        console.log(data);
    };
    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        {...register("price", { required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="desc">Description</label>
                    <input
                        type="string"
                        {...register("description", { required: true })}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ReactQueryUpdate;
