var express = require('express');
var router = express.Router();
var appointment = require('../controller/appointmentController')

router.get('/', appointment.getAllAppointment);

router.get('/:id', appointment.getAppointmentId);

router.post('/', appointment.createAppointment);

router.put('/:id', appointment.updateAppointement);

router.delete('/:id', appointment.deleteAppointment);

router.put('/status/:id', appointment.updateAppointmentStatus);

router.put('/feedback/:id', appointment.updateAppointementFeedback);

module.exports = router;