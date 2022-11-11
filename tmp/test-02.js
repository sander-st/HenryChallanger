
const c = console.log

let usuarios = {
    toni: {
        edad: 33,
        online: true
    },
    emi: {
        edad: 25,
        online: true
    },
    fran: {
        edad: 25,
        online: false
    },
    agus: {
        edad: 24,
        online: false
    }
}


let active = 0

for (let i in usuarios){
  if(usuarios[i].online == true) active++
}

c(active)