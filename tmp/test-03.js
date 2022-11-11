
let num = 20

let prim = []

for(let i=2; i < num; i++){
  if(num % i == 0) prim.push(i)
}

console.log(prim)
