import "@tsed/ajv";
import { HealthCheckError } from "@godaddy/terminus";
import {Controller, PlatformApplication} from "@tsed/common";
import {Configuration, Inject} from "@tsed/di";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {Application} from "express";
import { Health } from "../../src";
import "../../src";

export const rootDir = __dirname;

@Controller("/mongo")
class Mongo {
  @Health("/health")
  health() {
    return Promise.resolve();
  }
}

@Controller("/redis")
class Redis {
  @Health("/health")
  health() {
    return Promise.reject(new HealthCheckError('failed', {
      redis: 'down',
    }));
  }
}


@Configuration({
  port: 8081,
  mount: {
    Mongo,
    Redis,
    '/test': Redis,
  },
  terminus: {
    statusError: 500,
  },
  middlewares: [
    cookieParser(),
    bodyParser.json(),
    bodyParser.urlencoded({
      extended: true
    }),
  ]
})
export class Server {
  @Inject()
  app: PlatformApplication<Application>;
}
