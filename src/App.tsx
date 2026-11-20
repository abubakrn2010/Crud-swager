import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from './About';
import Layout from './Layout';
import Home from './Home';

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                }
            ]
        }
    ]);

    return (
        <div className="bg-white text-[#333333]">
            <RouterProvider router={router} />
        </div>
    )
}

export default App