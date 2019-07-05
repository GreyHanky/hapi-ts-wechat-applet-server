import { Plugin } from "hapi";

declare namespace hapiSwagger {
  // 配置选项地址 https://github.com/glennjones/hapi-swagger/blob/master/optionsreference.md
  interface IOptions {
    schemes?: string[];
    auth?: string | boolean;
    host?: string;
    cors?:boolean;

    jsonPath?: string;
    basePath?: string;
    pathPrefixSize?:number;

    info:{
      title:string;
      version: string;
    };

    grouping?: string;
    tags?: object[];
    swaggerUI?: boolean;
    documentationPage?: boolean;
    documentationPath?: string;
    payloadType?: string;
  }
}

declare const HapiSwagger: Plugin<hapiSwagger.IOptions>;

export = HapiSwagger;
