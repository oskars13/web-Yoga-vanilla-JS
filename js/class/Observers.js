

export class VisibilityHandler {
  #element; 
  #classNames = new Set();

  constructor(element){
    this.#element = element
    const classNames = element.classList.values()

    for (let className of classNames){
      if (className !== 'hide'){
        this.#classNames.add(className)
      }
    }
  }

  update(state){
    if (state){
      this.#classNames.delete('hide')
    }
    else {
      this.#classNames.add('hide')
    }

    this.#render()
  }

  #render(){
    this.#element.className = [ ...this.#classNames ].join(' ')
  }
}