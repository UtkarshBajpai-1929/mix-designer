import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Features from "./components/Features.jsx";
import InputCard from "./components/InputCard.jsx";
import Hero from "./components/Hero.jsx";
import inputStore from "./store/index.js";
import OutputCard from "./components/OutputCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        index: true, 
        element: <Hero />,
      },
      {
        path: "Feature",
        element: <Features />,
      },
      {
        path: "input",
        element: <InputCard />,
      },
        {
        path: "output",
        element:<OutputCard/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={inputStore}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
