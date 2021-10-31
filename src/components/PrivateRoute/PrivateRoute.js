import React from "react";
import useAuth from "../../hooks/useAuth";
import { Route, Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="text-center mt-3">
        <Spinner
          className="text-center mx-auto"
          animation="border"
          variant="danger"
        />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
