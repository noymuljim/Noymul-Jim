import { createBrowserRouter } from "react-router";
import rootLayout from "../layout/rootLayout";
import Home from "../pages/Home/Home";
import projectsLayout from "../layout/projectsLayout";
import QuickparkDetails from "../pages/HomeElements/FeaturedProjects/Quickpark/QuickparkDetails";
import StyleDecorDetails from "../pages/HomeElements/FeaturedProjects/StyleDecor/StyleDecorDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: rootLayout,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  },
  {
    path: '/',
    Component: projectsLayout,
    children: [
      {
        path: '/QuickparkDetails',
        element: <QuickparkDetails></QuickparkDetails>
      },
      {
        path: '/StyleDecorDetails',
        element: <StyleDecorDetails></StyleDecorDetails>
      },

    ]
  },
]);