import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Main from './Main';
import pages from './pages';

export const router = createHashRouter([
    {
        path: '/',
        element: <Main/>,
        children: pages
    }
]);