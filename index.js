function breakOut(array, changeValue, stopValue) {
  for (let i in array)
    if ( array[i] === stopValue )
      break
    else
      array[i] = changeValue
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i in array)
    if ( array[i] === skipValue )
      continue
    else
      array[i] = changeValue
  return array
}

function findBy(array, findFn) {
  for (let i in array)
    { if ( findFn(array[i]) ) { return array[i] } }
  return null
}
