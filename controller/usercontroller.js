const userlogin = require("../models/userlogin");
const blog = require("../models/blogs");
const gallery = require("../models/gallery");
const banner = require('../models/homebanner')
const service = require('../models/service')


module.exports={
    
    loginpage: async(req,res)=>{
        try{
            if(req.session.userloggedIn){
                res.redirect('/')
            }else{
            res.render('user/login',{userlogin: true,usrlogerr:req.session.usrlogerr,userloggedIn:true })
            req.session.usrlogerr=false;
            }
        }catch(err){
            console.log(err);
        }
    },

    userregister: async (req,res)=>{
        try{
        const {name,email,phone,password}=req.body;
        // console.log(req.body);
        await userlogin.create({name,email,phone,password})
        console.log("register sucessfully");
        res.redirect('/')
        }catch(err){
            console.log(err);
        }
    },
    userlogin: async(req,res)=>{
        try{
            const{email,password}=req.body;

            const loginuser = await userlogin.findOne({email});
            if(!loginuser){
                req.session.usrlogerr= "email does not exist ....";
                res.redirect('/login')
            }
            let passwordCorrect
            if(password===loginuser.password){
                passwordCorrect=true
            }else{
                passwordCorrect=false
            }

            if(!passwordCorrect){
                req.session.usrlogerr = 'incorrect password .....';
                res.redirect('/userlogin')
            }else{
                req.session.userloginuser=loginuser;
                 console.log(email,loginuser);
                req.session.userloggedIn= true;
                req.session.usrlogerr=false;
                res.redirect('/')
            }
        }catch(err){
            console.log(err);
        }
    },
    userLogout: async(req,res)=>{
        try{
            req.session.userloggedIn=false;
            res.redirect('/')
        }catch(err){
            console.log(err);
        }
    },

    Userhome:async(req,res)=>{
        try{
        let user=req.session.userloggedIn
        let data=req.session.userloginuser
        let successMessage= req.session.successMessage; 
        const banners= await banner.find()
        const services = await service.find()
            res.render('user/home',{user,data,banners,services,successMessage});
        }catch(err){
            console.log(err);
    }

    },

    userAbout: async(req,res)=>{
        try{
            let user=req.session.userloggedIn
            res.render('user/about',{user});
        }catch(err){
            console.log(err);
    }

    },

    userService: async(req,res)=>{
        try{
            const services = await service.find()
            let user=req.session.userloggedIn
            res.render('user/service',{user,services});
        }catch(err){
            console.log(err);
    }

    },

    userContact: async(req,res)=>{
        try{
            let user=req.session.userloggedIn
            let successMessage2= req.session.successMessage2;
            res.render('user/contact',{user,successMessage2});
        }catch(err){
            console.log(err);
    }

    },

    userBlog: async(req,res)=>{
        try{
            const blogs= await blog.find()
            let user=req.session.userloggedIn
            res.render('user/blog',{user,blogs});
        }catch(err){
            console.log(err);
    }

    },

    usergallery: async(req,res)=>{
        try{
            const gallerys= await gallery.find()
            let user=req.session.userloggedIn
            res.render('user/gallery',{user,gallerys});
        }catch(err){
            console.log(err);
    }

    },

    userinfo:async(req,res)=>{
        let user=req.session.userloggedIn
        const data = req.session.userloginuser;
        res.render('user/userinfo',{data,user})
    },

    

    servicedetail:async(req,res)=>{
        try{
        const {id}=req.params
        const services = await service.findById(id);
        res.render('user/servicedetails',{services})
      }catch(err){
        console.log(err)
      }
    }, 








}