import { DOM_QUERIES } from "./const.js"
import { $ } from "./utils.js"
import { State } from "./class/State.js"
import { VisibilityHandler } from "./class/Observers.js"


document.addEventListener('DOMContentLoaded', () => {
  const menu = $(DOM_QUERIES.menu)
  const menuIcon = $(DOM_QUERIES.menuIcon)

  const visibility = new State(false)
  const visibilityHandler = new VisibilityHandler(menu)

  visibility.attach(visibilityHandler)

  menuIcon.addEventListener('click', () => {
    visibility.state = !visibility.state
  })
})