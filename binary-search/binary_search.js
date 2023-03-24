function binary_search(list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const middle = Math.floor((low + high) / 2)
    const guess = list[middle]

    if (guess == item) {
      return middle
    } else if (guess > item) {
      high = middle - 1
    } else {
      low = middle + 1
    }
  }
  return null
}

const my_list = [1, 3, 5, 7, 9]

console.log(binary_search(my_list, 3))
console.log(binary_search(my_list, -1))
