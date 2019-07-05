import * as Hapi from "hapi";
import test from "./test";
import wxLogin from "./wxLogin";

export default (server: Hapi.Server) => {
  const routes = [...test(server), ...wxLogin(server)];

  server.route(routes);
};
