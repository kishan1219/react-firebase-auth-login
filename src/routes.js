import { Dashboard, Login } from "./pages";

export const routes = [
  {
    path: "/",
    component: Login,
    exact: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    exact: false,
  },
];
