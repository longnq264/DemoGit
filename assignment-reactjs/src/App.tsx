import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";
import ProductUpdate from "./components/ProductUpdate";
import ReactQuery from "./components/ReactQuery";
import ReactQueryAdd from "./components/ReactQueryAdd";
import Demo from "./components/Demo";
import ReactQueryUpdate from "./components/ReactQueryUpdate";
import { DatePicker } from "antd";
import AppLayout from "./components/Layout/Layout";
import ReactQueryDetail from "./components/ReactQueryDetail";
function App() {
    return (
        <div className="App">
            <Routes>
                {/* <Route path="/" element={<ProductList />} />
                <Route path="add" element={<ProductAdd />} />
                <Route path="edit" element={<ProductUpdate />} /> */}
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<ReactQuery />} />
                    <Route path="query-add" element={<ReactQueryAdd />} />
                    <Route
                        path="query-detail/:id"
                        element={<ReactQueryDetail />}
                    />
                    <Route
                        path="query-update/:id"
                        element={<ReactQueryUpdate />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
