import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { RootState } from "../store";
import { fechProducts } from "../slice/products";
import { Link } from "react-router-dom";
type Props = {};

const ProductList = (props: Props) => {
    const dispatch = useAppDispatch();
    const { value: products } = useAppSelector(
        (state: RootState) => state.product
    );
    useEffect(() => {
        dispatch(fechProducts());
    }, []);

    return (
        <div>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <Link to="">{item.name}</Link>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
