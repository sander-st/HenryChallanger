
String.prototype.repeatCharacters = function (str){
  let repeat = ''
  let len = this.length, i = 0

  for(; i<len; i++){
    repeat += this[i]
    repeat += this[i]
  }

  return repeat
}

console.log('Hola'.repeatCharacters())
