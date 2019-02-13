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
  image: String,
  facebook: String,
  telefono: Number,
  typeUSer: {
    type: String,
    enum: ['Normal', 'adoptar']
  },
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  })

const Usuario = mongoose.model('Usuario', usuarioSchema)
module.exports = Usuario;