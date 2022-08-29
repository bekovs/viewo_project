import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/profile",
      element: <UserProfilePage />,
      id: 2,
    },
    {
      link: "/chats",
      element: <ChatPage />,
      id: 3,
    }
  ];
  return (
    <Routes>
      {
        PUBLIC_ROUTES.map((route) => (
          <Route path={route.link} element={route.element} key={route.id}/>
        ))
      }
    </Routes>
  );
};

export default MainRoutes;