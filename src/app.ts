import * as Server from './server';
import * as Configs from './configurations';

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

const serverConifg = Configs.getServerConfigs();
// const dbConfigs = Configs.getDatabaseConfig();

start({ configs: serverConifg });