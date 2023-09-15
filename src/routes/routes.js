import { HeaderOnlyLayout } from "~/layouts";
import Account from "~/pages/Account";
import Astra from "~/pages/Astra";
import Home from "~/pages/Home";
import Order from "~/pages/Order";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/order", component: Order, layout: HeaderOnlyLayout },
  { path: "/profile", component: Profile, layout: HeaderOnlyLayout },
  { path: "/upload", component: Upload, layout: HeaderOnlyLayout },
  { path: "/astra", component: Astra, layout: HeaderOnlyLayout },
  { path: "/account", component: Account, layout: HeaderOnlyLayout },
  { path: "/order", component: Order, layout: HeaderOnlyLayout },
];
const privateRoute = [];
export { publicRoutes, privateRoute };
