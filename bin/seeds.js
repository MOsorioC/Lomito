const mongoose = require("mongoose")
const Mascotas = require('../models/mascota')
const Usuarios = require('../models/user')
const Adoptar = require('../models/adopcion')

mongoose.connect('mongodb://localhost/lomito')

/*const Adopcion = [
    {
        mensaje:'hola soy un mensaje',
        fecha_solicitud:'14/09/1985',
        fecha_confirmada:'15/09/1985',
        adoptado:"adoptadp",
        fecha_adopcion:"16/09/1985"
    }
]*/

/*Adoptar.create(Adopcion).then(() => {
    console.log('se guardaron los adopciones')
    mongoose.connection.close()
}).catch((err) => {
    console.log(err)
})*/




const Usuario = [
    {
        nombre: 'Paulina',
        apellido: 'Espinosa',
        sexo: "H",
        email: 'pau@prueba.com',
        contraseña: "xs",
        edad: "foto",
        estado: "mexico",
        descripcion: "busco perrito bonito",
        image: "image",
        facebook: "tener un palacio",
        telefono: 5555555555,
        typeUser: "normal"


    }
]

const Pet = [
    {
        nombre: 'Momo',
        edad: 5,
        caracteristicas: 'amarillita',
        descripcion: 'perrito tranquilo, hermoso debes adpotarlo ya!!',
        raza: 'golden',
        talla: "chico",
        direccionAdopcion: "mexico",
        horasInicio: "10am",
        horasFin: "12am",
        requerimientos: "tener un palacio",
        user_id: '',
        image: 'https://cdn.newsapi.com.au/image/v1/67a523605bca40778c6faaad93883a3b'
    }
]


Usuarios.create(Usuario).then((user) => {
    //console.log(user);
    //mongoose.connection.close()
    Pet[0].user_id = user[0]._id
    Mascotas.create(Pet).then((pet) => {
        console.log(pet)
        mongoose.connection.close()
    }).catch((err) => {
        console.log(err)
    })
}).catch((err) => {
    console.log(err)
})

/**
 *   */

