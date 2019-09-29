export const flatten = (arr) => {
  return [].concat( ...arr.map(x => Array.isArray(x) ? flatten(x) : x))
}

export const plus = (n) => {
  return n * (n + 1) / 2
}
