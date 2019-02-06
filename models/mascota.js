const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const petSchema = new Schema({
  nombre: String,
  edad: Number,
  caracteristicas: String,
  descripcion: String,
  raza:String,
  talla:String,
  image: String,
  lugarAdopcion: String,
  horasVisitas: String,
  mail:String,
  requerimientos:String



}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  })

const Pet = mongoose.model('Pet', petSchema)
module.exports = Pet;