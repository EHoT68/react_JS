import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ isAuth, to = "/", ...rest }) {
  return isAuth ? <Route {...rest} /> : <Redirect to={to} />;
}

export function PublicRoute({ isAuth, to = "/", ...rest }) {
  return !isAuth ? <Route {...rest} /> : <Redirect to={to} />;
}
