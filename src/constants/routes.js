const routes = {
  defaultRoutes: [
    {
      path: "/sign-in",
      element: "Sign In",
    },
    {
      path: "/sign-up",
      element: "Sign Up",
    },
    {
      path: "/verify",
      element: "Verification",
    },
    {
      path: "/forget-password",
      element: "Forget Password",
    },
    {
      path: "/reset-password",
      element: "Reset Password",
    },
  ],

  privateRoutes: [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/products",
      element: "Products",
    },
    {
      path: "/product/:id",
      element: "Product",
    },
    {
      path: "/cart",
      element: "Cart",
    },
  ],
};

export const { privateRoutes, defaultRoutes } = routes;
