const fs = require('fs')
const path = require('path')

let chirps = [
    { 
        chirp: 'chirp one',
    },
    { 
        chirp: 'chirp two'
    },
    { 
        chirp: 'chirp three'
    },
    {
        chirp: 'chirp four'
    },
    { 
        chirp: 'chirp five'
    }
]

fs.writeFile('chirps.json', JSON.stringify(chirps), (err) =>{
    console.log('write finished', err)
})

fs.readFile('./chirps.json', 'utf-8', (err, data) => {
    var data = JSON.parse(data)
    console.log(data)
})
