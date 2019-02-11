const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const petSchema = new Schema({
  nombre: String,
  edad: Number,
  caracteristicas: String,
  descripcion: String,
  raza: {
    type: String,
    enum: ['golden', 'chihuahua', 'labrador', 'extragrande ']
  },
  talla: {
    type: String,
    enum: ['chico', 'mediano', 'grande', 'extragrande '],
    required: function() {
      return this.bacon > 4;
    }
  },
  image: String,
  direccionAdopcion: String,
  horasInicio: String,
  horasFin: String,
  requerimientos:String,
  status: {
    type: String,
    enum: ['adoptado', 'no adoptado', 'en proceso de adopcion']
  },


  },{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  })
const Pet = mongoose.model('Pet', petSchema)
module.exports = Pet;