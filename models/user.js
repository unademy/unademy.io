// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local:{
        email        : String,
        password     : String,
    },
    username:String,
    account_created:String,
    times_logged:String,
    account_type:String,
    courses_created:[{

        course_name:String,
        course_puplic_key :String,
        course_private_key:String
    }],
    courses_enrolled:[{

        course_name:String,
        course_puplic_key :String,
        course_work:[{

            question:{

                location:String,
                answer:String,
                qType:String 

            }
        }]

    }],
    entities_following:[],
    friends_list:[],
    facebook         : {
        id           : String,
        token        : String,
        name         : String,
        email        : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    been_validated:Boolean

});


userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('user', userSchema);