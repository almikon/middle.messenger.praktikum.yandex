import Block from "./Block";
import Route from "./Route";

class Router {
  private static __instance: Router;
  private routes: Route[] = [];
  private history: History = window.history;
  private currentRoute: Route | null = null;


  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    Router.__instance = this;
  }

  public use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, this.rootQuery);
    this.routes.push(route);
    return this
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const targetWindow = event.currentTarget as Window
      this._onRoute(targetWindow.location.pathname)
    }
    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render();
  }

  public go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname)
  }

  back() {
    window.history.back()
  }

  forward() {
    window.history.forward()
  }

  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}

export default new Router('#app')
