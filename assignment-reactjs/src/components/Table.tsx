import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SearchOutlined } from "@ant-design/icons";
interface IProduct {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const TableList: React.FC = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3001/product");
            const data = await response.json();
            setState(
                data.map((product: any) => {
                    return {
                        key: product.id,
                        ...product,
                    };
                })
            );
        })();
    }, []);
    const columns: ColumnsType<IProduct> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "",
            key: "action",
            render: (_, record) => (
                <Space size="large">
                    {/* <a>Invite {record.name}</a> */}
                    <Button type="primary">Delete</Button>
                </Space>
            ),
        },
    ];
    return <Table columns={columns} dataSource={state} />;
};

export default TableList;
