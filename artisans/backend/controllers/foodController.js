import asyncHandler from 'express-async-handler'
import Food from '../models/foodModel.js'

const getFoods= asyncHandler(async(req,res)=>{

    const foods=await Food.find({})
    res.json(foods)
})

const getFoodById= asyncHandler(async(req,res)=>{
    const food=  await Food.findById(req.params.id)
    if(food){
    res.json(food)
    } else {
        res.status(404)
        throw new Error(`Food not found`)
    }
})

const deleteFood= asyncHandler(async(req,res) =>{

    const food=  await Food.findById(req.params.id)
    if(food){
     await food.remove()
     res.json({message:'Food Removed'})
    } else {
        res.status(404)
        throw new Error(`Food not found`)
    }
})

const createFood= asyncHandler(async(req,res) =>{
     const food= new Food({
         name:'Sample',
         image:'/images/Lamp.jpeg',
         user:req.user._id,
         numReviews:0,
         description:'Sample Description',
         location:'Samplepuram',
         contact:'9999999999',
         owner:'Sampler',

     })

     const createdFood= await food.save()
     res.status(201).json(createdFood)
})

const updateFood= asyncHandler(async(req,res) =>{
    const {name,image,description,location,contact,owner}= req.body

    const food= await Food.findById(req.params.id)

    if(food){
          food.name=name
          food.image=image
          food.description=description
          food.location=location
          food.contact=contact
          food.owner=owner

        const updatedFood= await food.save()
        res.json(updatedFood)
    } else {
        res.status(404)
        throw new Error('Food not found')
    }

   
})

const createFoodReview= asyncHandler(async(req,res) =>{
    const {rating,comment}= req.body

    const food= await Food.findById(req.params.id)

    if(food){
        const alreadyReviewed=food.reviews.find(r => r.user.toString()===req.user._id.toString())
        if(alreadyReviewed){
            res.status(400)
            throw new Error('Food already reviewed')
        }
        const review={
            name:req.user.name,
            rating:Number(rating),
            comment,
            user:req.user._id
        }

        food.reviews.push(review)
        food.numReviews=food.reviews.length
        food.rating=food.reviews.reduce((acc,item)=> item.rating+acc,0)/food.reviews.length

        await food.save()
        res.status(201).json({message:'Review added'})
        
    } else {
        res.status(404)
        throw new Error('Food not found')
    }

   
})

export {getFoods,getFoodById,deleteFood,createFood,updateFood,createFoodReview}