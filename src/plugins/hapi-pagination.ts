import * as Hapipagination from 'hapi-pagination';
import * as Hapi from 'hapi';
import { IPlugin } from '../interfaces/plugin';

const options = {
  query: {
    page: {
      name: 'page',
      default: 1,
    },
    limit: {
      name: 'limit',
      default: 25,
    },
    pagination: {
      name: 'pagination',
      default: true,
    },
    invalid: 'defaults',
  },
  meta: {
    name: 'meta',
    count: {
      active: true,
      name: 'count',
    },
    totalCount: {
      active: true,
      name: 'totalCount',
    },
    pageCount: {
      active: true,
      name: 'pageCount',
    },
    self: {
      active: true,
      name: 'self',
    },
    previous: {
      active: true,
      name: 'previous',
    },
    next: {
      active: true,
      name: 'next',
    },
    first: {
      active: true,
      name: 'first',
    },
    last: {
      active: true,
      name: 'last',
    },
    page: {
      active: false,
      // name == default.query.page.name
    },
    limit: {
      active: false,
      // name == default.query.limit.name
    },
  },
  results: {
    name: 'results',
  },
  reply: {
    paginate: 'paginate',
  },
  routes: {
    include: [
      '/shops',
      '/shops/{shopId}/goods',
    ],
    exclude: [],
  },
};
async function register(server: Hapi.Server): Promise<void> {
  try {
    return server.register({
      plugin: Hapipagination,
      options
    });
  } catch (error) {
    console.log(`Error registering hapi-pagination plugin: ${error}`);
  }
}

export default (): IPlugin => {
  return {
    register,
    info() {
      return { name: "Hapi-pagination", version: "2.0.0" }
    }
  }
}