const mongoose = require("mongoose")
const Mascotas = require('../models/mascota')
const Adoptantes = require('../models/adoptante')

mongoose.connect('mongodb://localhost/lomito')


const Pet = [
    {
        nombre: 'Momo',
        edad: 5,
        caracteristicas: 'amarillita',
        descripcion: 'perrito tranquilo',
        talla:"xs",
        image:"foto",
        lugarAdopcion:"mexico",
        horasVisitas:"10am",
        mail:"prueba@mail.com",
        requerimientos:"tener un palacio"
    }
]




Mascotas.create(Pet).then(() => {
    console.log('se guardaron los pets')
    mongoose.connection.close()
}).catch((err) => {
    console.log(err)
})