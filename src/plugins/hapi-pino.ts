import * as Hapi from "hapi";
import * as HapiPino from "hapi-pino";
import { IPlugin, IPluginOptions } from "../helper/plugin";

async function register(
  server: Hapi.Server,
  pluginOptions: IPluginOptions
): Promise<void> {
  try {
    await server.register({
      plugin: HapiPino,
      options: {
        prettyPrint: true,
        logEvents: ["log", "request", "response", "onPostStart", "onPostStop"]
      }
    });
  } catch (error) {
    console.log(`Error registering hapi-pino plugin: ${error}`);
  }
}

export default (): IPlugin => {
  return {
    register,
    info() {
      return { name: "Hapi plugin for the Pino logger", version: "6.0.1" };
    }
  };
};
