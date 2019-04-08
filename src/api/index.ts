import * as  requireAll from 'require-all';

// 自动引入routes.js
const allApi: object = requireAll({
  dirname: __dirname,
  filter: /routes.js$/,
})

const routes = [];

function reduceRoute(routeNote: object) {
  Object.values(routeNote).forEach((route = {}) => {
    const module = route['routes.js'] || [];
    if (module) {
      const [moduleDefault] = module.default
      routes.push(moduleDefault);
    }
  });
}

reduceRoute(allApi)


export default routes;

