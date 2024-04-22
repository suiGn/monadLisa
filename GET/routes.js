// routes.js
import { exampleRouteHandler } from './handlers/exampleRouteHandler.js';
import { anotherDomainRouteHandler } from './handlers/anotherDomainRouteHandler.js';
import { defaultHandler } from 'netget';  // Adjust the import path based on your structure

export const routes = {
  'example.com': exampleRouteHandler,
  '*.example.com': exampleRouteHandler,  // Will handle any subdomain of example.com
  'anotherdomain.com': anotherDomainRouteHandler,
  'localhost':  defaultHandler
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