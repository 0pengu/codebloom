import DashboardPage from "@/app/dashboard/Dashboard.page";
import LeaderboardPage from "@/app/leaderboard/Leaderboard.page";
import LoginPage from "@/app/login/Login.page";
import RootPage from "@/app/Root.page";
import SwaggerUIParent from "@/lib/swagger/swagger-ui";
import { createBrowserRouter } from "react-router-dom";
import SwaggerUI from "swagger-ui-react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/leaderboard",
    element: <LeaderboardPage />,
  },
  {
    path: "/swagger",
    element: import.meta.env.DEV ? (
      <SwaggerUIParent />
    ) : (
      <div>This endpoint is disabled in production.</div>
    ),
  },
]);
