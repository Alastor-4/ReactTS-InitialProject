import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const Navigation = () => {
    const { pathname } = useLocation();
    return (
        <>
            <h2>LazyLayout Pages</h2>
            <ul>
                <li>
                    <Link to={`${pathname}/lazy1`}>Lazy Page 1</Link>
                </li>
                <li>
                    <Link to={`${pathname}/lazy2`}>Lazy Page 2</Link>
                </li>
                <li>
                    <Link to={`${pathname}/lazy3`}>Lazy Page 3</Link>
                </li>
            </ul>
            <Routes>
                <Route path={`${pathname}/lazy1`} element={<LazyPage1 />} />
                <Route path={`${pathname}/lazy2`} element={<LazyPage2 />} />
                <Route path={`${pathname}/lazy3`} element={<LazyPage3 />} />
                <Route path={`${pathname}/lazy3`} element={<Navigate to={`${pathname}/lazy1`} replace={true} />} />
            </Routes>
        </>
    )
}
