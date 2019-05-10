import { Plugin, Request } from "hapi";
import { object, strict, string } from "joi";

declare namespace requireAll {
  interface IOptions {
    dirname: string;
    filter?: RegExp;
    excludeDirs?: RegExp;
    recursive?: boolean;
    map?: (name: string, path: string) => string;
    resolve?: (model: object) => object;
  }
}

declare const RequireAll: (options: requireAll.IOptions) => object;

export = RequireAll;
