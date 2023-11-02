import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Search, Home } from "screens";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Search,
  },
  {
    path: "/:searchQuery",
    Component: Home,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
