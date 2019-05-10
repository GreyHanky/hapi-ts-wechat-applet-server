import {
    Plugin,
    Request,
} from 'hapi';

declare namespace package {
  interface IRespons {
    version:string
  }
}


declare const Package: package.IRespons

export = Package;
