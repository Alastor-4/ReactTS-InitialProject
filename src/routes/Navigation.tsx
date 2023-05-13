import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import { routes } from '../01-lazyload/router/routes';
import { Suspense } from "react";

export const Navigation = () => {
    return (
        <Suspense fallback={<h1 className="text-center">Loading</h1>}>
            <BrowserRouter>
                <div className="text-white text-center text-3xl w-52 bg-gray-800 mr-5">
                    <nav>
                        <img className="h-28 mt-4 mx-auto" src={reactLogo} alt="React Logo" />
                        <ul className="my-5">
                            {routes.map(({ path, name }) =>
                            (
                                <li key={name}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            )
                            )}

                        </ul>
                    </nav>
                </div>
                <Routes>
                    {routes.map(({ name, path, Component }) => (<Route key={name} path={path} Component={Component} />))}
                    <Route path='*' element={<Navigate to={routes[0].path} replace={true} />} />
                </Routes>
            </BrowserRouter>
        </Suspense>

    );
};
