import {ArdesignConfigApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ArdesignConfigApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new ArdesignConfigApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
