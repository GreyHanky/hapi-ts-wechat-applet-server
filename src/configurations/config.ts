import * as nconf from "nconf";
import * as path from "path";

const configs = new nconf.Provider({
  env: true,
  argv: true,
  store: {
    type: "file",
    file: path.join(
      __dirname,
      `../../config.${process.env.NODE_ENV || "dev"}.json`
    )
  }
});

export default configs;