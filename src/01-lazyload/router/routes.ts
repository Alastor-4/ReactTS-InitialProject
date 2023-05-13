import { LazyExoticComponent, lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

const LazyPage1 = lazy(() => import("../pages/LazyPage1"));
const LazyPage2 = lazy(() => import("../pages/LazyPage2"));
const LazyPage3 = lazy(() => import("../pages/LazyPage3"));

export const routes: Route[] = [
  {
    path: "/lazy1",
    Component: LazyPage1,
    name: "LazyPage-1",
  },
  {
    path: "/lazy2",
    Component: LazyPage2,
    name: "LazyPage-2",
  },
  {
    path: "/lazy3",
    Component: LazyPage3,
    name: "LazyPage-3",
  },
];