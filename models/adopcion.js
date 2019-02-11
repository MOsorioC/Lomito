const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const adopcionSchema = new Schema({
    mensaje: String,
    fecha_solicitud: String,
    fecha_confirmada: String,
    adoptado: String,
    fecha_adopcion:String


}, {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    })
const Adopcion = mongoose.model('Adopcion', adopcionSchema)
module.exports = Adopcion;