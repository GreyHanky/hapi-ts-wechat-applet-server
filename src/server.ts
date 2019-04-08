import * as Hapi from "hapi";
import { IServerConfigurations } from "./interfaces/config";
import registerRoute from "./api";
import registerModels from "./db/models";

export async function init(
  configs: IServerConfigurations
): Promise<Hapi.Server> {
  const { host, port } = configs;
  const server = new Hapi.Server({
    debug: { request: ["error"] },
    port,
    host,
    routes: {
      cors: {
        origin: ["*"]
      }
    }
  });
  if (configs.routePrefix) {
    server.realm.modifiers.route.prefix = configs.routePrefix;
  }

  const plugins: string[] = configs.plugins;
  const pluginOptions = {
    // database: database,
    serverConfigs: configs
  };
  // 注册插件
  const pluginPromises: Promise<any>[] = plugins.map(
    async (pluginName: string) => {
      const pluginDefault = await import(`./plugins/${pluginName}`);
      const plugin = pluginDefault.default();
      console.log(
        `Register Plugin ${plugin.info().name} v${plugin.info().version}`
      );

      return plugin.register(server, pluginOptions);
    }
  );

  await Promise.all(pluginPromises);
  // 注册model
  registerModels();
  // 注册路由
  registerRoute(server);

  return server;
}
