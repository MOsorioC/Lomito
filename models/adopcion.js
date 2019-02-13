const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const adopcionSchema = new Schema({
    user_id: { type: Schema.ObjectId, ref: 'Usuario' },
    pet_id: { type: Schema.ObjectId, ref: 'Pet' },
    mensaje: String,
    fecha_solicitud: String,
    fecha_confirmada: String,
    adoptado: Boolean,
    fecha_adopcion:String
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})
const Adopcion = mongoose.model('Adopcion', adopcionSchema)
module.exports = Adopcion;