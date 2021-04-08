import "@tsed/ajv";
import {PlatformApplication} from "@tsed/common";
import {Configuration, Inject} from "@tsed/di";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {Application} from "express";
import "../../src";

export const rootDir = __dirname;

@Configuration({
  port: 8081,
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
