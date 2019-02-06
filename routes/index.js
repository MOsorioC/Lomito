const express = require('express');
const router  = express.Router();
const Mascotas = require('../models/mascota')
const Adoptantes = require('../models/adoptante')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
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





module.exports = router;
