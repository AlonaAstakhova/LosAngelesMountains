let carouselImages = document.querySelectorAll('.slide')

let dots = document.querySelectorAll('.dots')

let counter = 0

function carouselNext() {
  carouselImages[counter].style.animation = 'next1 1s ease-in forwards'
  if (counter >= carouselImages.length - 1) {
    counter = 0
  } else {
    counter++
  }
  carouselImages[counter].style.animation = 'next2 1s ease-in forwards'
  indicators()
}

function autoCarouseling() {
  deletInterval = setInterval(timer, 2000)
  function timer() {
    carouselNext()
    indicators()
  }
}

autoCarouseling()

function indicators() {
  dots.forEach((el, i) => {
    dots[i].className = dots[i].className.replace(' active', '')
  })
  dots[counter].className += ' active'
}

let links = document.querySelectorAll('.menu-item > a')
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute('data-link'))
      .scrollIntoView({ behavior: 'smooth' })
  }
}

let links2 = document.querySelectorAll('.middle-menu-item > a')
for (let i = 0; i < links2.length; i++) {
  links2[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute('data-link'))
      .scrollIntoView({ behavior: 'smooth' })
  }
}
