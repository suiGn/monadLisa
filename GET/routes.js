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
