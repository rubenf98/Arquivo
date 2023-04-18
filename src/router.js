import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Layout from "./components/Layout";
import Oncologia from './components/Oncologia';

function router() {
    return (
        <Layout>
            <Routes>
                <Route exact path="/oncologia" element={<Oncologia />} />
                <Route exact path="/" element={<Homepage />} />
            </Routes>
        </Layout>
    );
}

export default router;
