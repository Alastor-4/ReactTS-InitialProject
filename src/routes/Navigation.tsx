import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="text-white text-center text-3xl w-52 bg-gray-800 mr-5">
                <nav>
                    <img className="h-28 mt-4 mx-auto" src={reactLogo} alt="React Logo" />
                    <ul className="my-5">
                        <li>
                            <NavLink
                                to="/home"
                                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/users"
                                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="about" element={<h1>About Page</h1>} />
                <Route path="users" element={<h1>Users Page</h1>} />
                <Route path="home" element={<h1>Home Page</h1>} />

                <Route path="/*" element={<h1>Home Page</h1>} />
            </Routes>
        </BrowserRouter>

    );
};
