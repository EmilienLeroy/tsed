import {HttpServer, Inject, InjectorService, Module, OnInit, PlatformApplication} from "@tsed/common";
import {createTerminus} from "@godaddy/terminus";

@Module()
export class TerminusModule implements OnInit {
  @Inject()
  app: PlatformApplication;

  @Inject()
  injector: InjectorService;

  constructor(@Inject(HttpServer) private httpServer: HttpServer) {}

  public $onInit() {
    createTerminus(this.httpServer, {
      logger: console.log,
      healthChecks: this.getHealths()
    });
  }

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
}
