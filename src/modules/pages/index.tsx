import React from 'react';
import Home from './Home';
import Art from './Art';
import Projects from './Projects';

const pages = [
    {
        index: true,
        element: <Home/>
    },
    {
        path: '/art',
        element: <Art/>
    },
    {
        path: '/projects',
        element: <Projects/>
    }
]

export default pages;