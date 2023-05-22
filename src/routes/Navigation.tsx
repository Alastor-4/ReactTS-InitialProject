import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";

import { RegisterPage, FormikPage, FormikYupPage, FormikComponents, FormikAbstract } from '../03-forms/pages/';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="text-white text-center text-3xl w-52 bg-gray-800 mr-5">
                <nav>
                    <img className="h-28 mt-4 mx-auto" src={reactLogo} alt="React Logo" />
                    <ul className="my-5">
                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                            >
                                Register Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik"
                                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                            >
                                Formik
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik-yup"
                                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                            >
                                Formik Yup
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik-components"
                                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                            >
                                Formik Components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik-abstract"
                                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                            >
                                Formik Abstract
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="register" element={<RegisterPage />} />
                <Route path="formik" element={<FormikPage />} />
                <Route path="formik-yup" element={<FormikYupPage />} />
                <Route path="formik-components" element={<FormikComponents />} />
                <Route path="formik-abstract" element={<FormikAbstract />} />

                <Route path="/*" element={<h1>Home Page</h1>} />
            </Routes>
        </BrowserRouter>

    );
};
