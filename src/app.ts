import * as Server from "./server";
import { Config, IServerConfig } from "./configurations";

const start = async ({ configs }) => {
  try {
    const server = await Server.init(configs);
    await server.start();

    console.log("Server running at:", server.info.uri);
  } catch (err) {
    console.error("Error starting server: ", err.message);
    throw err;
  }
};

const serverConifg = Config.get<IServerConfig>("server");

start({ configs: serverConifg });
