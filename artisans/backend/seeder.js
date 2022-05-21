import mongoose from 'mongoose'
import dotenv from 'dotenv'
import products from './data/products.js'
import users from './data/users.js'
import helpers from './data/helpers.js'
import foods from './data/foods.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import Helper from './models/helperModel.js'
import Food from './models/foodModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData= async() =>{
    try{
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    await Helper.deleteMany()
    await Food.deleteMany()    

    const createdUsers= await User.insertMany(users)
    const adminUser= createdUsers[0]._id
    const sampleProducts= products.map(product =>{
        return {...product,user:adminUser}
    })
   
    const sampleHelpers= helpers.map(helper =>{
        return {...helper,user:adminUser}
    })
    const sampleFoods= foods.map(food =>{
        return {...food,user:adminUser}
    })
    await Product.insertMany(sampleProducts)
    await Helper.insertMany(sampleHelpers)
    await Food.insertMany(sampleFoods)
    console.log("Data Imported")
    process.exit()
    }
    catch(error)
    {
        console.error(`${error.message}`)
        process.exit(1)
    }
}
const destroyData= async() =>{
    try{
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    await Helper.deleteMany()
    await Food.deleteMany()
    console.log("Data Destroyed")
    process.exit()
    }
    catch(error)
    {
        console.error(`${error.message}`)
        process.exit(1)
    }
}
if(process.argv[2]==='-d'){
    destroyData()
}else {
    importData()
}