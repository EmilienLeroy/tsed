import {Configuration, Inject, InjectorService, Service} from "@tsed/di/src";
import {HttpServer, HttpsServer} from "packages/common/src/platform";
import {createTerminus} from "@godaddy/terminus";

@Service()
export class TerminusService {
  @Inject()
  private injector: InjectorService;

  @Configuration()
  private configuration: Configuration;

  private getProviders() {
    return this.injector.getProviders().filter((provider) => {
      return provider.store.get("terminus");
    });
  }

  private getHealths() {
    const healths: {[k: string]: () => Promise<any>} = {};

    this.getProviders().forEach((provider) => {
      Object.keys(provider.store.get("terminus")).forEach((name) => {
        healths[`${provider.path}${name}`] = provider.store.get("terminus")[name];
      });
    });

    return healths;
  }

  public mount(httpServer?: HttpServer, httpsServer?: HttpsServer) {
    const {terminus} = this.configuration;

    if (httpServer) {
      createTerminus(httpServer, {
        logger: console.log,
        healthChecks: this.getHealths(),
        ...terminus
      });
    }

    if (httpsServer) {
      createTerminus(httpsServer, {
        logger: console.log,
        healthChecks: this.getHealths(),
        ...terminus
      });
    }
  }
}
