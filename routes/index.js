const express = require('express');
const router  = express.Router();
const estados = require('../models/estados')
const Mascotas = require('../models/mascota')
const Usuarios = require('../models/user')
const Adopcion = require('../models/adopcion')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('Login/signup_step_2', {estados});
});
router.get('/mascotas/new', (req, res) => {
  res.render('mascotas/new')

})

router.post('/mascotas/', (req, res) => {
  const { nombre, edad, caracteristicas, descripcion, raza, talla, image, lugarAdopcion, horasVisitas, mail, requerimientos } = req.body
  const newMascota = new Mascotas({ nombre, edad, caracteristicas, descripcion, raza, talla, image, lugarAdopcion, horasVisitas, mail, requerimientos })
  newMascota.save()
    .then(mascotas => res.redirect(301, '/mascotas'))
    .catch(err => res.render('mascotas/new'))
})

router.get('/mascotas/:id', (req, res) => {
  let idMascotas = req.params.id
  Mascotas.findOne({ _id: idMascotas }).then(mascotas => {
    res.render('mascotas/show', { mascotas })
  }).catch(err => console.log(err))

})


router.post('/mascotas/:id/delete', (req, res) => {
  let idMascotas = req.params.id
  Mascotas.findByIdAndRemove(idMascotas).then(() => res.redirect(301, '/mascotas'))
    .catch(err => console.log(err))
})

router.get('/mascotas', (req, res) => {
  Mascotas.find()
    .then(mascotas => {
      res.render('mascotas/listaMascotas', { mascotas })
    })
})




router.get('/usuario/new', (req, res) => {
  res.render('usuario/new')

})
router.post('/usuarios', (req, res, next) => {
  const { nombre, apellido, sexo, email, contraseña, edad, estado, descripcion, image, facebook, telefono  } = req.body
  const newUsuario = new Usuarios({ nombre, apellido, sexo, email, contraseña, edad, estado, descripcion, image, facebook, telefono  })
  newUsuario.save()
    .then(usuarios => res.redirect(301, '/usuario'))
    .catch(err => next(err))
})


router.get('/usuario/:id', (req, res) => {
  let idAUsuarios = req.params.id
  Usuarios.findOne({ _id: idUsuarios }).then(usuarios => {
    res.render('usuario/show', { usuarios})
  }).catch(err => console.log(err))

})


router.get('/usuario', (req, res) => {
  Usuarios.find()
    .then(usuarios => {
      res.render('usuario/listaUsuarios', {usuarios})
    })
})

router.get('/adopcion/new', (req, res) => {
  res.render('adopcion/new')

})



router.post('/adopcion', (req, res, next) => {

  const { mensaje, fecha_solicitud, fecha_confirmada, adoptado, fecha_adopcion } = req.body
  console.log('entro')
  console.log(mensaje, fecha_solicitud, fecha_confirmada, adoptado, fecha_adopcion )
  const newAdopcion = new Adopcion({ mensaje, fecha_solicitud, fecha_confirmada, adoptado, fecha_adopcion })
  newAdopcion.save()
    .then(adopcion => res.redirect(301, '/adopcion'))
    .catch(err => next(err))
})


router.get('/adopcion/:id', (req, res) => {
  let idAdopcion = req.params.id
  Adopcion.findOne({ _id: idAdopcion }).then(adopcion => {
    res.render('adopcion/show', { adopcion })
  }).catch(err => console.log(err))

})

router.get('/adopcion', (req, res) => {
  Adopcion.find()
    .then(adopcion => {
      res.render('adopcion/listaAdopcion', { adopcion })
    })
})

module.exports = router;
