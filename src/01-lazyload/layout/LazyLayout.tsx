import { Navigation } from "../router/Navigation";

export const LazyLayout = () => {
    return (
        <div className="flex-col">
            <h1>Lazy Layout - Main Page</h1>
            <Navigation />
        </div>
    )
}

export default LazyLayout;
