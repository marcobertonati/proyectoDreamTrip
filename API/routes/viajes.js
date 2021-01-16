// RUTAS DE VIAJES
//requerimos express
const express = require('express');

//requerimos controllers
const viaje_controllers = require('../controllers/dreamTripControllers');

// definimos
const viajeRouter = express.Router();

viajeRouter.get('/',viaje_controllers.obtenerViaje);

viajeRouter.post('/agregar-viaje', viaje_controllers.agregarViaje);

// Exportamos las rutas
module.exports = viajeRouter;

