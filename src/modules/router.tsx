import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import pages from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: pages
    }
]);