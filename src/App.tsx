import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./Components/Companies/Dashboard/Dashboard";
import { ExploreProjects } from "./Components/Companies/ExploreProjects/ExploreProjects";
import { HeroSection } from "./Components/Companies/HeroSection/HeroSection";
import { PostGigs } from "./Components/Companies/PostGigs/PostGigs";
import { SearchEngine } from "./Components/Companies/SearchEngine/SearchEngine";

import { Register } from "./Components/Register/Register";
import { FormPostGigs } from "./Components/Companies/PostGigs/FormPostGigs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeroSection children={undefined} />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "searchengine", element: <SearchEngine /> },
        { path: "postgigs", element: <PostGigs /> },
        { path: "exploreprojects", element: <ExploreProjects /> },
        { path: "formpostgig", element: <FormPostGigs /> },
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
