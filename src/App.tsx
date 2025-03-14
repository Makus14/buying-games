import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SearchGamePage from "./pages/SearchGamePage";
import CheckingProfilePage from "./pages/CheckingProfilePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchGamePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:uniqueCode",
    element: <CheckingProfilePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
