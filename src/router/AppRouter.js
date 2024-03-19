import React from "react";
import { Route, Routes } from "react-router-dom";
import { defaultRoutes, privateRoutes } from "../constants/routes";
import { AuthLayout, DefaultLayout } from "../layout";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Routes>
      {defaultRoutes.map(({ path, element: Element }, index) => {
        return (
          <Route
            key={index}
            path={path}
            element={
              <AuthLayout>
                <Element />
              </AuthLayout>
            }
          />
        );
      })}

      {privateRoutes.map(({ path, element: Element }, index) => {
        return (
          <Route
            key={index}
            path={path}
            element={
              <PrivateRoute>
                <DefaultLayout>
                  <Element />
                </DefaultLayout>
              </PrivateRoute>
            }
          />
        );
      })}

      <Route path="*" element="This is a error page" />
    </Routes>
  );
};

export default AppRouter;
