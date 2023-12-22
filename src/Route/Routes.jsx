import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home/Home";
import ErrorElement from "../component/ErrorElement/ErrorElement";
import Login from "../component/Page/Login/Login";
import SignUp from "../component/Page/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: "/",
            element: <Home></Home> 
        },
        {
            path: "logIn",
            element: <Login></Login>
        },
        {
            path: "signUp",
            element: <SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;
