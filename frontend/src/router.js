import React from "react";
import { Routes, Route } from "react-router-dom";
import { Groups } from "./pages/group/groups.jsx";
import { Group } from "./pages/group/group.jsx";

import { Home } from "./pages/home/home.jsx";


export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/group" element={<Groups />} />
            <Route path="/group/:id" element={<Group />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}