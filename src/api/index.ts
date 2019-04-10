import * as requireAll from "require-all";
import * as Hapi from "hapi";

// 自动引入routes.js
const allApi: object = requireAll({
  dirname: __dirname,
  filter: /routes.*$/,
});

export default (server: Hapi.Server): Hapi.Server => {
  const routes = [];

  function reduceRoute(routeNote: object) {
    Object.values(routeNote).forEach((route = {}) => {
      const module = route["routes.js"] || route["routes.ts"];
      if (module) {
        const [moduleDefault] = module.default(server);
        routes.push(moduleDefault);
      }
    });
  }

  reduceRoute(allApi);

  return server.route(routes);
};
