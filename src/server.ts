import * as Hapi from "hapi";
import { IPluginOptions } from "./helper/plugin";
import registerRoute from "./api";
import registerModels from "./db/models";

export async function init(configs: IPluginOptions): Promise<Hapi.Server> {
  const { serverConfigs, database } = configs;
  const { host, port } = serverConfigs;
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
  // 路由前缀
  if (serverConfigs.routePrefix) {
    server.realm.modifiers.route.prefix = serverConfigs.routePrefix;
  }

  const plugins: string[] = serverConfigs.plugins;
  // 注册插件
  const pluginPromises: Promise<any>[] = plugins.map(
    async (pluginName: string) => {
      const pluginDefault = await import(`./plugins/${pluginName}`);
      const plugin = pluginDefault.default();
      console.log(
        `Register Plugin ${plugin.info().name} v${plugin.info().version}`
      );

      return plugin.register(server, configs);
    }
  );

  await Promise.all(pluginPromises);
  // 注册model
  registerModels(database);
  // 注册路由
  registerRoute(server);

  return server;
}
