import { createBrowserRouter } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage";
import AddLinkPage from "../pages/Linkpage";
import PreviewPage from "../pages/PreviewPage/Index";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProfilePage />,
        children: [
            {
                path: "links",
                element: <AddLinkPage  />
            }

        ]
    },
    {
        path: "preview",
        element: <PreviewPage />
    },
])