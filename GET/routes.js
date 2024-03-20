// routes.js
import { exampleRouteHandler } from './handlers/exampleRouteHandler.js';
import { anotherDomainRouteHandler } from './handlers/anotherDomainRouteHandler.js';

export const routes = {
  'example.com': exampleRouteHandler,
  'anotherdomain.com': anotherDomainRouteHandler,
  'localhost':  exampleRouteHandler,
};
