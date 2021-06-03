import {HttpServer, HttpsServer, Inject, InjectorService, Module, OnInit, PlatformApplication} from "@tsed/common";
import {TerminusService} from "./services/TerminusService";

@Module()
export class TerminusModule implements OnInit {
  @Inject()
  private terminusService: TerminusService;

  constructor(
    @Inject(HttpServer)
    private httpServer: HttpServer,
    @Inject(HttpsServer)
    private httpsServer: HttpsServer
  ) {}

  public $onInit() {
    this.terminusService.mount(this.httpServer, this.httpsServer);
  }
}
