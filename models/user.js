const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const usuarioSchema = new Schema({
  nombre: String,
  apellido: String,
  sexo:{
    type: String,
    enum: ['H', 'M']
  },
  email: String,
  password: String,
  edad: String,
  estado: String,
  descripcion: String,
  mascota_ideal: String,
  image: String,
  facebook: String,
  telefono: Number,
  typeUSer: {
    type: String,
    enum: ['normal', 'adoptar'],
    default: 'normal'
  },
  role_user: {
    type: String,
    enum: ['GUEST', 'ADMIN'],
    default: 'GUEST'
  }
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  })

const Usuario = mongoose.model('Usuario', usuarioSchema)
module.exports = Usuario;
