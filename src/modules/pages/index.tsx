import React from 'react';
import Home from './Home';
import Blog from './Blog';
import Art from './Art';
import Project from './Project';

const pages = [
    {
        index: true,
        element: <Home/>
    },
    {
        path: '/blog',
        element: <Blog/>
    },
    {
        path: '/art',
        element: <Art/>
    },
    {
        path: '/project',
        element: <Project/>
    }
]

export default pages;