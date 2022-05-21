import asyncHandler from 'express-async-handler'
import Helper from '../models/helperModel.js'

const getHelpers= asyncHandler(async(req,res)=>{
    
    const helpers=await Helper.find({})
    res.json(helpers)
})

const getHelperById= asyncHandler(async(req,res)=>{
    const helper=  await Helper.findById(req.params.id)
    if(helper){
    res.json(helper)
    } else {
        res.status(404)
        throw new Error(`Helper not found`)
    }
})

const deleteHelper= asyncHandler(async(req,res) =>{

    const helper=  await Helper.findById(req.params.id)
    if(helper){
     await helper.remove()
     res.json({message:'Helper Removed'})
    } else {
        res.status(404)
        throw new Error(`Helper not found`)
    }
})

const createHelper= asyncHandler(async(req,res) =>{
     const helper= new Helper({
         name:'Sample',
         image:'/images/Lamp.jpeg',
         user:req.user._id,
         numReviews:0,
         description:'Sample Description',
         place:'Samplepuram',
         contact:'9999999999',
         occupation_type:'Sampler',

     })

     const createdHelper= await helper.save()
     res.status(201).json(createdHelper)
})

const updateHelper= asyncHandler(async(req,res) =>{
    const {name,image,description,place,contact,occupation_type}= req.body

    const helper= await Helper.findById(req.params.id)

    if(helper){
          helper.name=name
          helper.image=image
          helper.description=description
          helper.place=place
          helper.contact=contact
          helper.occupation_type=occupation_type

        const updatedHelper= await helper.save()
        res.json(updatedHelper)
    } else {
        res.status(404)
        throw new Error('Helper not found')
    }

   
})

const createHelperReview= asyncHandler(async(req,res) =>{
    const {rating,comment}= req.body

    const helper= await Helper.findById(req.params.id)

    if(helper){
        const alreadyReviewed=helper.reviews.find(r => r.user.toString()===req.user._id.toString())
        if(alreadyReviewed){
            res.status(400)
            throw new Error('Service already reviewed')
        }
        const review={
            name:req.user.name,
            rating:Number(rating),
            comment,
            user:req.user._id
        }

        helper.reviews.push(review)
        helper.numReviews=helper.reviews.length
        helper.rating=helper.reviews.reduce((acc,item)=> item.rating+acc,0)/helper.reviews.length
        await helper.save()
        res.status(201).json({message:'Review added'})
        
    } else {
        res.status(404)
        throw new Error('Service not found')
    }   
})

export {getHelpers,getHelperById,deleteHelper,createHelper,updateHelper,createHelperReview}