import {
    Plugin,
    Request,
} from 'hapi';

declare namespace hapiPagination {
  interface IOptions {
    query?:object;
    meta?:object;
    results?:object;
    reply?:object;
    routes?:object
  }
}


declare const Hapipagination: Plugin<hapiPagination.IOptions>

export = Hapipagination;
