// function
function myFunc(a, b) {
  return a + b
}

// arrow function
const myArrowFunc = (a, b) => a + b

console.log('myFunc -> ', myFunc(2, 3))
console.log('myArrowFunc -> ', myArrowFunc(2, 3))



// toggle aside
const asideObj = document.getElementById('aside')

const handleOpenAside = () => asideObj.classList.add('show')

const handleCloseAside = () => asideObj.classList.remove('show')

// dark mode
const handleDarkMode = () => {
  const bodyObj = document.body

  if (bodyObj.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode')
  } else {
    document.body.classList.add('dark-mode')
  }
}

// handle change aside color
const handleChangeAsideColor = color => {
  const colors = ['white', 'black', 'red', 'green', 'purple']

  Array.from(colors).forEach(item => {
    if (asideObj.classList.contains(item)) {
      asideObj.classList.remove(item)
    }
  })

  asideObj.classList.add(color)
}