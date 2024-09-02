const express = require('express')

const { updateDoctor , getallDoctor , getDoctorById , deleteDoctor } = require('../Controllers/doctorController')
const router = express.Router();

router.get('/', getallDoctor);
router.get('/:id', getDoctorById);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

module.exports = router
