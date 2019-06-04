import * as Hapi from "hapi";
import test from "./test";
import wxLogin from "./wxLogin";

const routes = [test, wxLogin];

export default (server: Hapi.Server) => {
  const api = routes.reduce((accountRoute, currenRoute) => {
    const apis = currenRoute(server);
    return accountRoute.concat(apis);
  }, []);

  server.route(api);
};
