import * as inert from 'inert';
import * as vision from 'vision'
import * as pack from 'package'
import * as Hapi from 'hapi';
const hapiSwagger = require('hapi-swagger');

import { IPlugin } from '../interfaces/plugin';

async function register(
  server: Hapi.Server
): Promise<void> {
  try {

    return server.register([
      inert,
      vision,
      {
        plugin: hapiSwagger,
        options: {
          info: {
            title: '接口文档',
            version: pack.version,
          },
          // 定义接口以 tags 属性定义为分组
          grouping: 'tags',
          tags: [
            { name: 'tests', description: '测试相关' },
          ],
          swaggerUI: true,
          documentationPage: true,
          documentationPath: "/"
        }
      }
    ])
  } catch (error) {
    console.log(`Error registering swagger plugin: ${error}`);
  }
}


export default (): IPlugin => {
  return {
    register,
    info() {
      return { name: "Swagger Documentation", version: "9.4.2" }
    }
  }
};
