import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route path={route.link} element={route.element} key={route.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
