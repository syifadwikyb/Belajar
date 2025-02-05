import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {error && (
                <p>{error.statusText || error.message || "Unknown error occurred"}</p>
            )}
        </div>
    );
}
