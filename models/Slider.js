var mongoose = require('mongoose');  

var sliderSchema = mongoose.Schema({  

	 	name :String,
	 	author:String,
        description:String,
        createdOn:String,
        noodles:Number,
        costs:[{
            cost_type:String,
            amount:Number,
            currency_code:String
        }],
        images:[{

            img_loc:String,
            cloud_meta:[]
        }],
        videos:[{
            vid_loc:String,
            tube_meta:[]
        }],
        sliderSections:[],
        slides:[{

        	slide_name:String,
        	content:String,
        	author:String,
        	slide_type:String,
        	section:String

       	}],
        encap:String
      
});


module.exports = mongoose.model('Slider', sliderSchema);  