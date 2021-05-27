import "@tsed/ajv";
import { HealthCheckError } from "@godaddy/terminus";
import {Controller, PlatformApplication} from "@tsed/common";
import {Configuration, Inject} from "@tsed/di";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {Application} from "express";
import { Heatlh } from "../../src";
import "../../src";

export const rootDir = __dirname;

@Controller("/mongo")
class Mongo {
  @Heatlh("/heatlh")
  heatlh() {
    return Promise.resolve();
  }
}

@Controller("/redis")
class Redis {
  @Heatlh("/heatlh")
  heatlh() {
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
