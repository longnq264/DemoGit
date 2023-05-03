import React, { useState, useEffect } from "react";
import { useAddProductMutation } from "../sevices/products";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/Products";
import { useNavigate } from "react-router-dom";
type Props = {};

const ReactQueryAdd = (props: Props) => {
    const [addProduct, result] = useAddProductMutation();
    console.log(result);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProduct>();
    const onSubmitHandler: SubmitHandler<IProduct> = (data) => {
        addProduct(data).then(() => {
            navigate("/");
        });
    };
    return (
        <div>
            <h1>Add Product</h1>
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

export default ReactQueryAdd;
