import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./login";
import Browser from "./browser";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "browser",
      element: <Browser></Browser>,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default Body;
