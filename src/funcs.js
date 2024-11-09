import { DOM_QUERIES } from "./js/const.js"
import { $ } from "./js/utils.js"


export const loadStyles = async () => {
  if (!CSS.supports('animation-timeline', 'scroll()')){
    $(DOM_QUERIES.mainHeader)
      .style.animation = 'none'
  }
}