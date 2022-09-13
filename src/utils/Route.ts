import Block from "./Block";

export default class Route {
  _pathname: string;
  _blockClass: typeof Block;
  _block: any;
  _props: Record<string | number | symbol, any>;
  
  constructor(pathname:string, 
    view:typeof Block, 
    props:Record<string,string>) {
      this._pathname = pathname;
      this._blockClass = view;
      this._block = null;
      this._props = props;
  }

  navigate(pathname:string) {
      if (this.match(pathname)) {
          this._pathname = pathname;
          this.render();
      }
  }

  leave() {

  }

  match(pathname:string) {
      return pathname === this._pathname
  }

  render() {
      if (!this._block) {
                
          this._block = new this._blockClass('div',this._props)
          render(this._props.rootQuery, this._block);
          return;
      }

      this._block.render();
  }

}
function render(query:string, block: any) {
    const root = document.querySelector(query);
    root!.textContent = block.getContent();
    return root;
  }
