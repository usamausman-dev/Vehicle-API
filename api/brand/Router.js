const express = require('express')
const router = express.Router()

const { getAllBrands, getBrandbyName, createBrand, deleteBrand, updateBrand } = require('./Controller')

router.get('/getAllBrands', getAllBrands)
router.get('/getBrandbyName', getBrandbyName)
router.post('/createBrand', createBrand)
router.delete('/deleteBrand', deleteBrand)
router.put('/updateBrand', updateBrand)



module.exports = router