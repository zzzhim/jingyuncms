export function arrToDim(arr, num = 4) {
  const newArr = []
  const oldArr = [ ...arr ]
  for (let index = 0; index < Math.ceil(arr.length / num); index++) {
    newArr.push(oldArr.slice(index * num, index * num + num))
  }

  return newArr
}