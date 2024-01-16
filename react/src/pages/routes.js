import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import BootstrapColumns from "./BootstrapColumns";

const routes = [
    {
        name: "Home",
        path: "/",
        element: <Home />
    },
    {
        name: "About",
        path: "/about",
        element: <About />
    },
    {
        name: "Auto Cols",
        path: "/cols-auto",
        element: <BootstrapColumns />
    },
    {
        name: "Users",
        path: "/users",
        element: <Users />
    },
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: routes,
    },
]);

export {
    routes,
    router,
}