import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homescreen from "./profolio/Homescreen";
import AboutScreen from "./profolio/AboutScreen";
import Resume from "./profolio/Resume";
import ContactUs from "./profolio/ContactUs";
import Header from "./profolio/container/Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homescreen />,
  },
  {
    path: "/about",
    element: <AboutScreen />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
]);

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
