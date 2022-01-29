var express = require('express');
var router = express.Router();
const { allUsers,userForm,saveUser,editUser,updateUser,viewUser,deleteUser} = require('../controllers/UserController')

/* GET home page. */
router.get('/', allUsers);
router.get('/create', userForm);
router.post('/create', saveUser);
router.get('/edit/:id', editUser);
router.post('/update/:id', updateUser);
router.get('/view/:id', viewUser);
router.get('/delete/:id', deleteUser);
module.exports = router;
