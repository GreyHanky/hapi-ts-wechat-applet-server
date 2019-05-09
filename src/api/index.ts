import * as requireAll from "require-all";
import * as Hapi from "hapi";

// 自动引入文件名为route的文件
const allApi: object = requireAll({
  dirname: __dirname,
  filter: /routes.*$/,
  map: function(name, path) {
    // 去除文件后缀
    return name.split('.')[0];
  }
});

export default (server: Hapi.Server): Hapi.Server => {
  const routes = [];

  function reduceRoute(routeNote: object) {
    Object.values(routeNote).forEach((route = {}) => {
      const module = route.routes;
      if (module) {
        const [...apiModules] = module.default(server);

        routes.push(...apiModules);
      }
    });
  }

  reduceRoute(allApi);

  return server.route(routes);
};
