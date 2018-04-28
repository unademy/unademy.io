var express = require('express');  
var session = require('express-session');  
var passport = require('passport');  
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({ type: 'application/*+json'});
var crypto = require("crypto");
var objectId = require('mongodb').objectID;
var cookieParser = require('cookie-parser');

var Slider = require('../models/Slider');
var User = require('../models/user');
var fileUpload = require('express-fileupload');

var path = require('path');




const cloudinary = require('cloudinary');

const config  = require('../config/enviroment.js').cloudinary;



/*configure our cloudinary*/
cloudinary.config({
    cloud_name: config.cloud_name, 
    api_key: config.api_key, 
    api_secret: config.api_secret 
});

cloudinary.v2.uploader.upload("/home/my_image.jpg", function(error, result) {
  console.log(result)
});
/* GET home page. */
router.get('/error', function(req, res, next) {
  res.render('error.ejs');
});

/* GET home page. */
router.get('/test', function(req, res, next) {

      if(!req.user){
              res.render('test.ejs', { isLoggedIn: false });

          }else{
              res.render('test.ejs', { isLoggedIn: true });
          }
});

/* GET home page. */
router.get('/', function(req, res, next) {

          if(!req.user){
              res.render('index.ejs', { isLoggedIn: false });

          }else{
              res.render('index.ejs', { isLoggedIn: true });
          }
});
/* GET home page. */
router.get('/index', function(req, res, next) {
          if(!req.user){
              res.render('index.ejs', { isLoggedIn: false });

          }else{
              res.render('index.ejs', { isLoggedIn: true });
          }
});/* GET home page. */

router.get('/home', function(req, res, next) {

          if(!req.user){
              res.render('index.ejs', { isLoggedIn: false });

          }else{
              res.render('index.ejs', { isLoggedIn: true });
          }
  
});





router.get('/createNew', function(req, res, next) {
         if(!req.user){
              res.render('createSlide.ejs', { isLoggedIn: false });

          }else{
              res.render('createSlide.ejs', { isLoggedIn: true });
          }
});






router.get('/liveSlides', function(req, res, next) {



            var db = req.db;
            db.collection('sliders').find({},{sort: {courseName: 1}}).toArray(function(err, results){

                      
                      if(!req.user){

                                res.render('liveSlides.ejs', { sliders:results,isLoggedIn: false });

                      }else{


                                var db = req.db;
                                  db.collection('sliders').find({},{sort: {courseName: 1}}).toArray(function(err, results){

                                        res.render('liveSlides.ejs', {sliders:results,isLoggedIn: true });
                                        console.log(results);

                                });
                                res.render('liveSlides.ejs', { isLoggedIn: true });
                            
                      }

            });

      



});

router.get('/registration', function(req, res, next) {
  if(!req.user){
              res.render('signup.ejs', { isLoggedIn: false });

  }else{

              res.render('profile.ejs', {user : req.user, isLoggedIn:true });
  }
   
});

router.get('/login', function(req, res, next) {
     res.render('login.ejs',{isLoggedIn:false});
});

router.get('/editSlider', function(req, res, next) {
     res.render('editSlider.ejs');
});


router.get('/about', function(req, res, next) {
     res.render('about.ejs');
});






router.post('/editSlider', function(req, res){
  

      Slider.findById(req.body.id, function(err, results1) { 
      if (err) {
                res.status(500).send(err)
      }
      console.log('results '+results1);
      res.render('editSlider.ejs', { slider : results1});
            
    });   
    

});

router.post('/createNewSlider', function(req, res, next) {
          
      var currentTime = new Date().toLocaleString(); 

      var newSlider = Slider({

        name :req.body.name,
        description:req.body.description,
        createdOn:currentTime,
        noodles:0,
        author:'annonymous',
        sliderSections:[],
        slides:[]
          
     });
     
      newSlider.save(function(err) {
      if (err) throw err;

          res.redirect('');
        
      });
}); 

router.post('/addSection', function(req,res){
      

      console.log('addddd sectioms');

      console.log(req.body);

      Slider.findById(req.body.id,function(err, slider) {
        
            slider.sliderSections  = req.body.sects || slider.sliderSections;

            slider.save(function (err, slider) {
            if (err) {
                res.status(500).send(err)
            }
             res.redirect('');
            });
    });
});

router.post('/saveSlide', function(req,res){
      


  
      var searchForSlider = req.body.slider;
      
   

      var name    = req.body.slide_name;
      var content = req.body.content;
      var author  = req.body.author;
      var type    = req.body.type;
      var section = req.body.section; 

      var slide = {

                      slide_name:name,
                      content:content,
                      author:author,
                      type:type,
                      section:section
      }

      console.log(slide);
                      
      console.log(searchForSlider);
            
       Slider.findOne({ name: searchForSlider }, function(err, slider) {
                if (err) throw err;

                slider.slides.push(slide);

                 slider.save(function (err, user) {
                  if (err) {
                      res.status(500).send(err)
                  }
                   res.redirect('');
                  });
                
      });           
    
            
    
});


router.get('/upload', function(req, res, next) {
     res.render('upload.ejs');
});


router.post('/uploadTwo', function(req,res){
          
    if(!req.files){
      res.send("Please Sumbit A File.");
    }else{
      console.log(req.body);
    }
    
      
});


router.post('/upload', function(req,res){
        
        if(!req.files){
          res.send("Please Sumbit A File.");
        }else{

            var file = req.files.imgInp;
            console.log(file);
            var extenstion = path.extname(file.name);
            console.log(extenstion);

            if(extenstion !== '.png' && extenstion !== '.gif' && extenstion !== '.jpeg' && extenstion !== '.jpg' ){
              res.send('Only Images Please');
            }else{
                file.mv(__dirname='uploads/'+file.name,function(err){
                if(err){
                  console.log('couldnt find uploads path i think');
                  res.status(500).send(err);
                }else{
                 
                  
                    cloudinary.v2.uploader.upload('uploads/'+file.name, function(error, cloudResults) {
              
                      if(error){res.status(500).send(error);}else{

                          console.log(cloudResults)


                          var currentTime = new Date().toLocaleString();

                          var newSlider = Slider({

                            name :req.body.sliderName,
                            description:req.body.sliderDesc,
                            createdOn:currentTime,
                            noodles:0,
                            costs:[
                              {
                                cost_type:'centralized',
                                amount:req.body.centralizedCost,
                                currency_code:req.body.centralizedCurrency
                              },
                              {
                                cost_type:'decentralized',
                                amount:req.body.decentralizedCost,
                                currency_code:req.body.decentralizedCost
                              }
                            ],
                            images:[
                              {
                                img_loc:'display',
                                cloud_meta:[cloudResults]
                              }
                            ],
                            videos:[],
                            author:req.body.author,
                            sliderSections:[],
                            slides:[]
                                                        
                            });
                          
                            newSlider.save(function(err) {
                              
                              if (err) throw err;
                              res.redirect('mySlides');
                                         
                            });
                      }           
          });
        }
      });
    }
  }
});




  // process the signup form
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/register', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


    // process the login form
    router.post('/signin', passport.authenticate('local-login', {
        successRedirect : '/mySlides', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    router.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {user : req.user, isLoggedIn:true });
    });

    router.get('/mySlides', isLoggedIn, function(req, res) {
  
         var db = req.db;
            db.collection('sliders').find({},{sort: {courseName: 1}}).toArray(function(err, results){

          
                    res.render('mySlides.ejs', {sliders:results,isLoggedIn: true,user : req.user});
                                 

            });
    });



// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}


module.exports = router;
