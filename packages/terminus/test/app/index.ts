import {$log, Controller, Get} from "@tsed/common";
import {PlatformExpress} from "@tsed/platform-express";
import {Server} from "./Server";

if (process.env.NODE_ENV !== "test") {
  @Controller("/hello")
  class HelloWorld {
    @Get("/")
    get() {
      return 'hello';
    }
  }

  async function bootstrap() {
    try {
      const platform = await PlatformExpress.bootstrap(Server, {
        mount: {"/rest": [HelloWorld]}
      });

      await platform.listen();
      $log.debug("Server initialized");
    } catch (er) {
      console.error(er);
      $log.error(er);
    }
  }

  bootstrap();
}
