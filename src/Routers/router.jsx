import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import HomePage from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/en", element: <HomePage></HomePage> },
      { path: "/ar", element: <HomePage></HomePage> },
    ],
  },
]);

export default router;
