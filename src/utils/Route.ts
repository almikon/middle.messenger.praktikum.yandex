import Block from "./Block";

export default class Route {
  private block: Block | null = null;

  constructor(
    private pathname: string,
    private readonly blockClass: typeof Block,
    private readonly query: string) {
  }

  leave(){
      this.block=null
  }

  match(pathname:string) {
      return pathname === this.pathname
  }

  render() {
      if (!this.block) {
        this.block = new this.blockClass({});
        render (this.query, this.block)
        return;
      }
  }
}

function render(query: string, block: Block) {
    const root = document.querySelector(query);
  
    if (root === null) {
      throw new Error(`root not found by selector "${query}"`);
    }
  
    root.innerHTML = '';
  
    root.append(block.getContent()!);
  
    return root;
  }