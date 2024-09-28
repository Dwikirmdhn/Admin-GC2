import { createBrowserRouter, redirect } from "react-router-dom";
import Home from '../views/Home'
import BaseLayout from "../views/BaseLayout";
import LoginPage from "../views/Login";
import AddPage from "../views/AddPage";
import AddUserPage from "../views/AddUserPage"
import Edit from "../views/Editpage";
import ChangeImage from "../views/ChangeImage"
import Categories from "../views/Categories";

import Toastify from 'toastify-js'

const baseUrl = 'https://h8-phase2-gc.vercel.app'

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage baseUrl={baseUrl} />,
        loader: () => {
            if (localStorage.access_token) {
                Toastify({
                    text: "Already logged in",
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "#FF0000",
                    },
                    onClick: function () { } // Callback after click
                }).showToast();
                return redirect('/')
            }

            return null
        }
    },
    {
        element: <BaseLayout />,
        loader: () => {
            if (!localStorage.access_token) {
                Toastify({
                    text: "Please login first",
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "#FF0000",
                    },
                    onClick: function () { } // Callback after click
                }).showToast();
                return redirect('/login')
            }

            return null
        },
        children: [
            {
                path: "/",
                element: <Home baseUrl={baseUrl} />,
            },
            {
                path: "/add",
                element: <AddPage baseUrl={baseUrl} />,
            },
            {
                path: "/add-user",
                element: <AddUserPage baseUrl={baseUrl} />,
            },
            {
                path: "/categories",
                element: <Categories baseUrl={baseUrl} />,
            },
            {
                path: "/edit/:id",
                element: <Edit baseUrl={baseUrl} />,
            },
            {
                path: "/patch/:id",
                element: <ChangeImage baseUrl={baseUrl} />,
            },
        ],
    },
]);
export default router