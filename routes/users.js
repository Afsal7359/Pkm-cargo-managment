var express = require('express');
const usercontroller = require('../controller/usercontroller');
var router = express.Router();

/* GET users listing. */
router.get('/',usercontroller.Userhome)

router.post('/userregister', usercontroller.userregister);

router.get('/login',usercontroller.loginpage);

router.post('/userlogin',usercontroller.userlogin);

router.get('/logout',usercontroller.userLogout);

router.get('/about',usercontroller.userAbout);

router.get('/service',usercontroller.userService);

router.get('/contact',usercontroller.userContact);

router.get('/projects',usercontroller.userProject);

router.get('/blog',usercontroller.userBlog);

router.get('/user',usercontroller.userinfo);

router.get('/booking',usercontroller.cargobooking);


module.exports = router;