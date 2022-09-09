class Block {
    getContent() { }
    show() {
      console.log('show');
    }
    hide() {
      console.log('hide');
    }
  }
  class Button extends Block {
    getContent() {
      return 'Button';
    }
  }
  function isEqual(lhs, rhs) {
    return lhs === rhs;
  }
  function render(query, block) {
    const root = document.querySelector(query);
    root.textContent = block.getContent();
    return root;
  }
  class Route {
      constructor(pathname, view, props) {
          this._pathname = pathname;
          this._blockClass = view;
          this._block = null;
          this._props = props;
      }
      navigate(pathname) {
        if (this.match(pathname)) {
            this.render(props.rootQuery, view)
          }else{
          }
      }
  
      leave() {
        this.block.hide()
      }
  
      match(pathname) {
          return isEqual(pathname, this._pathname);
      }
  
      render() {
        if(this.block !== null){
            this.block.show()
        }else{
            this.block === new Button()
            this.block.textContent = this.block.getContent()
        }
      }
  }
  
  const route = new Route('/buttons', Button, {
    rootQuery: '.app',
  });
  
  route.render();
  
  console.log(route._pathname, route._props); // /buttons, {rootQuery: '.app'}
  
  route.navigate('/buttons'); // show
  route.navigate('/trash'); // не будет никакого лога
  route.leave(); // hide

  /*Route
Блок Route получает в качестве аргументов путь, соответствующий ему блок и его свойства. Чтобы Route управлял отображением блока по URL, допишите три метода:
navigate — метод для отображения вьюшки, если переданный URL совпадает с URL текущего Route;
leave — вызывает hide у элемента;
render — создаёт блок, если тот ещё не был создан (нужно создавать блок только после первого перехода на страницу), иначе вызывает у блока метод show.*/
/*Проверьте, что блок не будет отрисован при переходе на несоответствующий ему роут;
Блок изначально равен null и инициализируется только в методе render, поэтому при обращении к методам блока не забывайте проверять, что он не равен null.*/