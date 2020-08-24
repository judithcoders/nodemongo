var express = require('express');
var router = express.Router();

let mongoose =  require('./../config/conexion');
let Persona =  require('./../models/persona');

router.post('/persona/operar', function(req, res, next) {
  
    if(req.body._id ===""){
      let per =  new Persona({
         nombre: req.body.nombre,
         apellidos : req.body.apellidos,
         edad: req.body.edad
      });
      per.save();
    } else {
      Persona.findByIdAndUpdate(req.body._id, {$set: req.body}, {new:true}, (error, model) =>{
        if(error) throw error;
      });
    }
    res.redirect('/');
});

module.exports = router;
