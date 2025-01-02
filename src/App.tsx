import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthLayout from "./modules/Shared/Components/AuthLayout/AuthLayout";
import NotFound from "./modules/Shared/Components/NotFound/NotFound";
import Login from "./modules/Auth/Login/Login";
import Register from "./modules/Auth/Register/Register";
import ForgetPass from "./modules/Auth/ForgetPass/ForgetPass";
import ResetPass from "./modules/Auth/ResetPass/ResetPass";
import MasterLayout from "./modules/Shared/Components/MasterLayout/MasterLayout";
import Dashboard from "./modules/User/Dashboard/Dashboard";
import Companies from "./modules/User/Companies/Companies";
import Tasks from "./modules/User/Tasks/Tasks";

function App() {
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forget-password", element: <ForgetPass /> },
        { path: "reset-password", element: <ResetPass /> },
      ],
    },
    {
      path: "dashboard",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "companies", element: <Companies /> },
        { path: "tasks", element: <Tasks /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routs} />
    </>
  );
}

export default App;
