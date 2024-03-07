const ts = [-1, -8, 4, -4, 10 ,32 ,64 ,16 , -14, 5, 3, 1, 2147483647]

const negatives = ts.filter(n => n < 0)
const positives = ts.filter(n => n >= 0)

const max = Math.max(...negatives)
const min = Math.min(...positives)

const result = Math.abs(max) < min ? max : min

console.log(Math.max(...negatives))
console.log(Math.min(...positives))

console.log(result)

console.log(Math.max(...ts))




