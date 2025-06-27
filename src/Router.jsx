import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import App from './App';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      index: true,
      Component:Home
    }]
  },
]);
