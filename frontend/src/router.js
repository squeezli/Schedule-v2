import React from "react";
import { Routes, Route } from "react-router-dom";
import { Group } from "./pages/group/group.jsx";

import { Home } from "./pages/home/home.jsx";


export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/group" element={<Group />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}