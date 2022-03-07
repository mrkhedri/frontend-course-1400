const arr = [1, 3 , 7, 13, 15, 8, 4, 10]

// return all items greater than 9
arr.filter((item) => {
  return item > 9
})

// plus 1 all items
arr.map(item => item + 1)
const arr1 = []
arr.forEach(item => arr1.push(item + 1))
console.log(arr1)

// if item 7 exist return true
arr.some(item => item === 7)

// if item 7 exist return index
arr.findIndex(item => item === 7)
arr.indexOf(7)

// plus all items from index 4
arr.slice(4).reduce((total, item) => total + item)
let num = 0
arr.forEach((item, index) => {
  if (index >= 4) num += item
})
console.log(num)
arr.reduce((total, item, index) => {
  if (index >= 4) return total + item
  return total
}, 0)


console.log('new Date() -> ', new Date())



















