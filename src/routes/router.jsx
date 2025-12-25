import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Story from "../pages/About/Story/Story";
import Mission from "../pages/About/Mission/Mission";
import Success from "../pages/About/Success/Success";
import Team from "../pages/About/Team/Team";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
        children: [
          {
            index: true,
            element: <Navigate to="story" replace />,
          },
          {
            path: "story",
            Component: Story,
          },
          {
            path: "mission",
            Component: Mission,
          },
          {
            path: "success",
            Component: Success,
          },
          {
            path: "team",
            Component: Team,
          },
        ],
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
