import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import TableList from "../Table";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const AppLayout: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    items={new Array(2).fill(null).map((_, index) => {
                        const key = index;
                        return {
                            key,
                            label: `Home ${key}`,
                        };
                    })}
                />
            </Header>
            <div className="wrapper">
                <Outlet />
            </div>
            <Content style={{ padding: "0 50px" }}>
                <div
                    className="site-layout-content"
                    style={{ background: colorBgContainer }}
                ></div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default AppLayout;
