const express = require('express');
const router  = express.Router();
const estados = require('../models/estados')
const Mascotas = require('../models/mascota')
const Usuarios = require('../models/user')
const Adopcion = require('../models/adopcion')

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/login', (req, res, next) => {
  res.render('Login/login');
});

router.get('/signup', (req, res, next) => {
  res.render('Login/signup');
});

router.post('/signup', (req, res, next) => {
  const {name, sex, lastname, age, email, password} = req.body
  
  if (email === "" || password === "") {
    res.render("Login/signup", { message: "Indicate username and password" });
    return;
  }


  Usuarios.findOne({ email })
    .then(user => {
      if (user !== null) {
        res.render("Login/signup", { message: "The username already exists" });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new Usuarios()
      newUser.nombre = name
      newUser.apellidos = lastname
      newUser.edad = age
      newUser.email = email
      newUser.password = hashPass
      newUser.sexo = sex

      //guardamos el nuevo usuario
      newUser.save().then(newUser => {
        res.render('Login/signup_step_2', { newUser, estados })
      }).catch(ex => {
        console.log(ex)
        next(ex)
      })
    })
    .catch(error => {
      next(error)
    })
});

router.post('/signup_step_2', (req, res, next) => {
  const { _id, estado, phone, about_me, about_pet, userprofile_picture} = req.body

  Usuarios.updateOne({ "_id": _id }, { estado: estado,
      telefono: phone,
      descripcion: about_me,
      mascota_ideal: about_pet,
      image: userprofile_picture})
      .then( user => {
        res.redirect('/')
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
});

router.get('/mascotas/new', (req, res) => {
  res.render('mascotas/new')
})

/*router.post('/mascotas/', (req, res) => {
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
})*/

module.exports = router;
