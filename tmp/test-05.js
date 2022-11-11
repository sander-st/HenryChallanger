
let texts = ['mariadbserver','Hola mi nombre es Alexander','soy de un programador','soy dalto']

let bigWord = texts.map(val => {
  let split = val.split(' '),
      wordCount = split.reduce((prev, current)=> Math.max(prev, current.length), 0)
  // console.log(split)
  return split.filter(val => val.length == wordCount)[0]
})

// console.log(bigWord)

let wordCount = bigWord.reduce((prev, current)=>Math.max(prev, current.length), 0)

// console.log(wordCount)

let result = bigWord.filter(val => val.length == wordCount)

console.log(result)