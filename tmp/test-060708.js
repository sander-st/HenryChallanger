let mascotas = ['Perros', 'Gatos']

let book = [{nombre: 'Elon', autor: 'Musk'},{nombre: 'Padre rico, Padre pobre', autor: 'Robert Kiyosaki'}]

// anadir un objeto al array

book.push({nombre: 'Aprende Javascript', autor: 'Carlos Azaustre'})

// devevolver un array con los nombres de book

let nameBook = book.map(val => {return val.nombre})



console.log(nameBook)

