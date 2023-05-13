import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="text-white text-center text-3xl w-52 bg-gray-800 mr-5">
                <nav>
                    <img className="h-28 mt-4 mx-auto" src={reactLogo} alt="React Logo" />
                    <ul className="my-5">
                        <li>
                            <NavLink
                                to="/lazy1"
                                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                            >
                                LazyPage1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/lazy2"
                                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                            >
                                LazyPage2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/lazy3"
                                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
                            >
                                LazyPage3
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/lazy1" element={<LazyPage1 />} />
                <Route path="/lazy2" element={<LazyPage2 />} />
                <Route path="/lazy3" element={<LazyPage3 />} />

                <Route path="/*" element={<LazyPage1 />} />
            </Routes>
        </BrowserRouter>

    );
};
