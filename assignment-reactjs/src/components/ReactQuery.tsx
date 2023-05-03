import { IProduct } from "../interfaces/Products";
import { Link } from "react-router-dom";
import {
    useGetProductsQuery,
    useRemoveProductMutation,
} from "../sevices/products";

type Props = {};

const ReactQuery = (props: Props) => {
    const { data: product, isLoading, error } = useGetProductsQuery();
    const [removeProduct] = useRemoveProductMutation();
    if (isLoading) return <div> Loading...</div>;
    if (error) return <div>Error</div>;

    const handleRemove = (id: any) => {
        removeProduct(id);
    };
    return (
        <div className="list-query">
            <Link to="../query-add">Add</Link>
            <table className="table-query">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Desc</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    {product?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        handleRemove(item.id);
                                    }}
                                >
                                    Xoa
                                </button>
                                |<Link to={`query-update/${item.id}`}>Sửa</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReactQuery;
