// import Block from "./Block";
import Route from "./Route";

export default class Router {
  static __instance: any;
  routes: Array<Route> = [];
  history!: History;
  _currentRoute!: Route | null | undefined;
  _rootQuery: any;
  
  constructor(rootQuery: string) {
      if (Router.__instance) {
          return Router.__instance;
      }

      this.routes = [];
      this.history = window.history;
      this._currentRoute = null;
      this._rootQuery = rootQuery;

      Router.__instance = this;
  }

  use(pathname: string, block: HTMLElement) {
      const route = new Route(pathname, block, {rootQuery: this._rootQuery});
      this.routes.push(route);
      return this
  }

  start() {
    window.onpopstate = ((event: PopStateEvent) => {
      if(event.currentTarget){
      const targetWindow = event.currentTarget as Window

      this._onRoute(targetWindow.location.pathname)
      }
    }).bind(this);
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname:string) {
      const route = this.getRoute(pathname);

      if (this._currentRoute) {
          this._currentRoute.leave();
      }

      this._currentRoute = route;
      route!.render();
  }

  go(pathname:string) {

    this.history.pushState({}, "", pathname);
    this._onRoute(pathname)
  }

  back() {
    window.history.back()
  }

  forward() {
    window.history.forward()
  }

  getRoute(pathname:string) {
      return this.routes.find(route => route.match(pathname));
  }
}
