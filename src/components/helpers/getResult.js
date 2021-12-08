import winningCombinations from './winningCombinations';

const getResult = (resultCell) => {
  let winningCombinaton, difference, result;
  for (let i = 0; i <= 27; i++) {
    difference = winningCombinations[i].filter(item1 => resultCell.indexOf(item1) === -1)
    if (difference.length === 0) {
      winningCombinaton = winningCombinations[i]
    }
  }
  winningCombinaton ? result = true : result = false
  return result
}

export default getResult

