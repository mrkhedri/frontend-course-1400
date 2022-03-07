// go top
window.addEventListener('scroll', handleShowGoTopButton);

function handleShowGoTopButton() {
  const elm = document.getElementById('go-top')

  window.pageYOffset > 100 ? elm.classList.add('show') : elm.classList.remove('show')
}

function gotTop() {
  window.scroll({
    behavior: 'smooth',
    top: 0
  })
}


