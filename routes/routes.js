
//TO CONNECT ALL THE FILE IN APP.JS (API/DEFINE)

const exp= require('express')
const router= exp.Router()
const functions= require('../controller/index')
const savedata = require('../controller/Mul.files/index')
const multer = require('../middleware/multer')



let routes=(app)=>
{
router.post('/register',functions.registration)
router.post('/fetchdata',functions.fetchdata)
router.post('/fetchdetails',functions.fetchdetails)
router.post('/updatedata',functions.updatedata)
router.post('/updateall',functions.updateall)
router.put('/nameupdate',functions.nameupdate)
router.post('/login',functions.login)
// router.post('/uploadfile',multer.single("upload"),savedata.importuser);
//router.post('/uploadfile',multer.single("upload"),savedata.importuser);
router.post('/upload',multer.single("upload"),savedata.exceluser)
app.use('/api',router)
}


module.exports=
routes