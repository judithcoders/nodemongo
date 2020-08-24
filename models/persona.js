let mongoose =  require('mongoose');
let Schema = mongoose.Schema;

let personaSchema =  new Schema({
   id: {type: String},
   nombre: {type: String},
   apellidos: {type:String},
   edad: {type: Number, min:0}
},{ versionKey:false});


let Persona = mongoose.model('Personas', personaSchema);
console.log(Persona);
module.exports = Persona;