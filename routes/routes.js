// routes.js
import { anotherDomainRouteHandler } from './handlers/anotherDomainRouteHandler.js';
import { exampleRouteHandler } from './handlers/exampleRouteHandler.js';
import { monadsHandler } from './handlers/monadsHandler.js';
import { defaultHandler } from 'netget';  // Adjust the import path based on your structure

export const routes = {
  'cleaker.me': defaultHandler,
  '*.cleaker.me': defaultHandler,  // Will handle any subdomain of example.com
  'anotherdomain.com': anotherDomainRouteHandler,
  '/monads': monadsHandler,
  '/example': exampleRouteHandler,
  'localhost': defaultHandler
};

/*{
  "example.com": {
    "port": 8080,
    "routes": "path/to/example_routes.js"
  },
  "anotherdomain.com": {
    "port": 9090,
    "routes": "path/to/another_routes.js"
  }
}
*/