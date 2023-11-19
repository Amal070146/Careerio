import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./Components/Companies/Dashboard/Dashboard";
import { ExploreProjects } from "./Components/Companies/ExploreProjects/ExploreProjects";
import { HeroSection } from "./Components/Companies/HeroSection/HeroSection";
import { PostGigs } from "./Components/Companies/PostGigs/PostGigs";
import { SearchEngine } from "./Components/Companies/SearchEngine/SearchEngine";
import { Register } from "./Components/Register/Register";
import { FormPostGigs } from "./Components/Companies/PostGigs/FormPostGigs";
import { Project } from "./Components/Companies/ExploreProjects/Project";
import Profile from "./Components/Companies/Profile/Profile";
import Notify from "./Components/notification/Notify";
import Gig from "./Components/Companies/Gig/Gig";
import { FormPostProjects } from "./Components/Companies/ExploreProjects/FormPostProjects/FormPostProjects";
import { EditProfile } from "./Components/Companies/Profile/Update/EditProfile";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HeroSection />,
            children: [
                { path: "/", element: <Dashboard /> },
                { path: "searchengine", element: <SearchEngine /> },
                { path: "postgigs", element: <PostGigs /> },
                { path: "gig/:id", element: <Gig /> },
                { path: "exploreprojects", element: <ExploreProjects /> },
                { path: "formpostgig", element: <FormPostGigs /> },
                { path: "profile/:id", element: <Profile /> },
                { path: "editprofile", element: <EditProfile /> },
                { path: "project/:id", element: <Project /> },
                { path: "formpostprojects", element: <FormPostProjects /> },
                { path: "notification/:id", element: <Notify /> },
            ],
        },
        {
            path: "register",
            element: <Register />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
