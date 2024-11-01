

export const $ = (selector) => document.querySelector(selector)

export const $$ = (selector) => document.querySelectorAll(selector)

export const $id =(id) => document.getElementById(id)

export const slide = (images, idx = 0) => {
  const index = idx + 1 > images.length-1? 0:idx +1 

  setTimeout(() => {
    const image = images[index]
    image.state = !image.state

    const prevImage = images[idx]
    prevImage.state = !prevImage.state
    slide(images, index)
  }, 3000)
}