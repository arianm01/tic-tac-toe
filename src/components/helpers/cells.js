const cells = () => {
  let arr = []
  for (let i = 0; i <= 24; i++) {
    arr.push(i)
  }
  let cellsCopy = arr.map(number => {
    return {number: number, selected: false, player: ''}
  })
  return cellsCopy
}

export default cells