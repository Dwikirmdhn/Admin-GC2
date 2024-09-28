import { createBrowserRouter } from "react-router-dom";
import Home from '../views/Home'
import BaseLayout from "../views/BaseLayout";
import Detail from '../views/Detail'
const url = 'https://h8-phase2-gc.vercel.app'


const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <Home url={url} />,
            },
            {
                path: "/detail/:id",
                element: <Detail url={url} />,
            },
        ]
    },
]);

export default router