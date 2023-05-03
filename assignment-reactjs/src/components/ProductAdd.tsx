import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/Products";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { addProduct } from "../slice/products";
type Props = {};
const ProductAdd = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProduct>();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handlerSubmit: SubmitHandler<IProduct> = (data) => {
        dispatch(addProduct(data)).then(() => {
            navigate("/");
        });
    };
    return (
        <div>
            <h1>ProductAdd</h1>
            <form onClick={handleSubmit(handlerSubmit)}>
                <input type="text" {...register("name", { required: true })} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ProductAdd;
