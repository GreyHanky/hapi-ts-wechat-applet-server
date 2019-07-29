import * as Hapi from "hapi";
import { createConnection, Connection } from "typeorm";
import { IPluginOptions } from "./helper/plugin";
import Routes from "./api";

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
  // 创建数据库链接
  const connection: Connection = await createConnection();
  // 注册路由
  server.route(Routes)

  return server;
}
