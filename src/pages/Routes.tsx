import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeContent } from "./home";
import { Profile } from "./Profile";

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="profile" element={<Profile />} />
        </Routes>
    );
}
