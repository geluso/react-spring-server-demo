import "./Root.css";
import { Outlet, Link } from "react-router-dom";

import { routes, router } from "./routes";

const Root = () => {
    return <div id="root">
        <div>
            <nav>
                <ul>
                    {routes.map((route) => {
                        return <li key={route.name}>
                            <Link to={route.path}>{route.name}</Link>
                        </li>
                    })}
                </ul>
            </nav>
        </div>
        <div>
            <Outlet />
        </div>
    </div>;
}

export default Root;