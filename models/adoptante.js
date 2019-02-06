const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const adoptanteSchema = new Schema({
  status:Boolean,
  nombre: String,
  apellido: Number,
  sexo: Boolean,
  email: String,
  contraseña: String,
  edad: String,
  estado: String,
  descripcion: String,
  image: String,
  facebook: String,
  telefono: Number



}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  })

const Adoptante = mongoose.model('Adoptante', adoptanteSchema)
module.exports = Adoptante;