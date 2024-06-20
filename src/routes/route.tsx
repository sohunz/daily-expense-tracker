import App from "@/App";
import Analytic from "@/pages/Analytic";
import HomePage from "@/pages/HomePage";
import Notification from "@/pages/Notification";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "analytic",
                element: <Analytic />,
            },
            {
                path: "notification",
                element: <Notification />,
            },
        ],
    },
]);
