

export class State {
  #state;
  #observers = new Set()

  constructor(state){
    this.#state = state
  }

  attach(observer){
    this.#observers.add(observer)
  }
  detach(observer){
    if (this.#observers.has(observer)){
      this.#observers.delete(observer)
    }
  }
  #notify(state){
    this.#observers.forEach( observer => {
      observer.update(state)
    })
  }

  get state(){ return this.#state }
  set state(state){ 
    this.#state = state
    this.#notify(state)
  }
}