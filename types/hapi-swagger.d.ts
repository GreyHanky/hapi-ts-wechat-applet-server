import { Plugin } from "hapi";

declare namespace hapiSwagger {
  interface IOptions {
    jsonPath?: string;
    info: object;
    grouping?: string;
    tags?: object[];
    swaggerUI?: boolean;
    documentationPage?: boolean;
    documentationPath?: string;
    host?: string;
  }
}

declare const HapiSwagger: Plugin<hapiSwagger.IOptions>;

export = HapiSwagger;
