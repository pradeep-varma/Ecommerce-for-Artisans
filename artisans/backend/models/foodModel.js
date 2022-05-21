import mongoose from 'mongoose'

const reviewSchema= mongoose.Schema({
    name:{ type: String, required:true},
    rating:{type: Number, required:true},
    comment:{type: String, required:true},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    },
},{
    timestamps:true
})



const foodSchema =mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    reviews: [reviewSchema],
    contact:{
        type:String,
        required:true  
    },
    rating:{
        type:Number,
        required:true,
        default:0 
    },
    numReviews:{
        type:Number,
        required:true,
        default:0 
    },
    description:{
        type:String,
        required:true  
    },
    owner:{
        type:String,
        required:true  
    },
    
},{
     timestamps: true
})

const Food= mongoose.model('Food',foodSchema)

export default Food 