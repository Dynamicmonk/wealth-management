import Signup from "../components/Home/SignUp/Signup";
import { SignIn } from "../components/Home/SignIn/SignIn";

import { SIGN_IN_PATH, SIGN_UP_PATH } from "./constants";

export const routes: routesTypes[] = [
  {
    path: "/",
    element: <h1>Pages are in progress!</h1>,
  },
  {
    path: SIGN_UP_PATH,
    element: <Signup />,
  },
  {
    path: SIGN_IN_PATH,
    element: <SignIn />,
  },
];
