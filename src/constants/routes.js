import {
  Cart,
  ForgetPassword,
  Home,
  Product,
  Products,
  ResetPassword,
  SignIn,
  SignUp,
  Verification,
} from "../components/features";

const routes = {
  defaultRoutes: [
    {
      path: "/sign-in",
      element: SignIn,
    },
    {
      path: "/sign-up",
      element: SignUp,
    },
    {
      path: "/verify",
      element: Verification,
    },
    {
      path: "/forget-password",
      element: ForgetPassword,
    },
    {
      path: "/reset-password",
      element: ResetPassword,
    },
  ],

  privateRoutes: [
    {
      path: "/",
      element: Home,
    },
    {
      path: "/products",
      element: Products,
    },
    {
      path: "/product/:id",
      element: Product,
    },
    {
      path: "/cart",
      element: Cart,
    },
  ],
};

export const { privateRoutes, defaultRoutes } = routes;
