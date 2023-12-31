import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import Thanks from "./pages/Thanks";

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <Welcome />
    },
    {
        path: '/step-one',
        element: <StepOne />
    },
    {
        path: '/step-two',
        element: <StepTwo />
    },
    {
        path: '/step-three',
        element: <StepThree />
    },
    {
        path: '/thanks',
        element: <Thanks />
    },
]);

const App = () => {
    return (
        <div className="App">
          <RouterProvider router={routerConfig} />
        </div>
    );
  };

export default App;