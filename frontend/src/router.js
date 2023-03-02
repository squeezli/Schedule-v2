import React from "react";
import { Routes, Route } from "react-router-dom";
import { Groups } from "./pages/group/groups.jsx";
import { Group } from "./pages/group/group.jsx";
import { Teachers } from "./pages/teacher/teachers.jsx";
import { Teacher } from "./pages/teacher/teacher.jsx";
import { Classrooms } from "./pages/classroom/classrooms.jsx";
import { Classroom } from "./pages/classroom/classroom.jsx";

import { Home } from "./pages/home/home.jsx";


export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/group" element={<Groups />} />
            <Route path="/group/:id" element={<Group />} />
            <Route path="/teacher/" element={<Teachers />} />
            <Route path="/teacher/:id" element={<Teacher />} />
            <Route path="/classroom/" element={<Classrooms />} />
            <Route path="/classroom/:buildingId/:classroomId" element={<Classroom />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}
