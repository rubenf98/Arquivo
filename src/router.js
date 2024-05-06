import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Layout from "./components/Layout";
import Upload from './components/Upload';

function router() {
    return (
        <Layout>
            <Routes>
                <Route exact path="/model" element={<Upload />} />
                <Route exact path="/" element={<Homepage />} />
            </Routes>
        </Layout>
    );
}

export default router;
