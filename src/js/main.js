import { DOM_QUERIES } from "./const.js"
import { $, $$, slide } from "./utils.js"
import { State } from "./class/State.js"
import { VisibilityHandler } from "./class/Observers.js"
import { loadStyles } from "../funcs.js"


document.addEventListener('DOMContentLoaded', () => {
  loadStyles()

  const menu = $(DOM_QUERIES.menu)
  const menuIcon = $(DOM_QUERIES.menuIcon)

  const visibility = new State(false)
  const visibilityHandler = new VisibilityHandler(menu)

  visibility.attach(visibilityHandler)

  menuIcon.addEventListener('click', () => {
    visibility.state = !visibility.state
  })

  const sliderImages = $$(DOM_QUERIES.sliderImages)
  const images = []
  for (let image of sliderImages){
    const initialState = image.classList.contains('hide')? false:true
    const state = new State(initialState)
    state.attach(new VisibilityHandler(image))
    images.push(state)
  }
  slide(images)
})