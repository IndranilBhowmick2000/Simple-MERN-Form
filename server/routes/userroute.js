const express= require('express');
const LC= require('../controllers/LoginController')

//router object
const router= express.Router();

router.post('/register',LC.Employeemodel)
router.post('/login',LC.loguser)
router.post('/insert',LC.insertdata)
router.put('/update/:id',LC.upddata)
router.delete('/del/:id',LC.empdel)
router.get('/find',LC.empfind);

module.exports=router;