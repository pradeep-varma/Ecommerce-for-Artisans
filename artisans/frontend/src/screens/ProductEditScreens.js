import axios from 'axios'
import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'


const ProductEditScreens = ({match,history}) => {  
     const productId=match.params.id
     const [name,setName]= useState('')
     const [price,setPrice]= useState(0)
     const [description,setDescription]= useState('')
     const [brand,setBrand]=useState('')
     const [category,setCategory]=useState('')
     const [image,setImage]= useState('')
     const [countInStock,setCountInStock]=useState(0)
     const [sellerName,setSellerName]=useState('')
     const [sellerImage,setSellerImage]= useState('')
     const [sellerDescription,setSellerDescription]=useState('')
     const [sellerAddress,setSellerAddress]= useState('')
     const [sellerContact,setSellerContact]= useState('')
     const [uploading,setUploading]= useState(false)


     const dispatch = useDispatch()

     const productDetails = useSelector(state=> state.productDetails)
     const {loading,error,product} = productDetails
     
     const productUpdate = useSelector(state=> state.productUpdate)
     const {loading:loadingUpdate,error:errorUpdate,success:successUpdate} = productUpdate

     useEffect(()=>{

            if(successUpdate){
                dispatch({type:PRODUCT_UPDATE_RESET})
                history.push('/admin/productlist')
            } else {
            if( ! product.name || product._id!==productId){
                dispatch(listProductDetails(productId))
            } else {  
                setName(product.name)
                setPrice(product.price)
                setDescription(product.description)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setImage(product.image)
                setSellerAddress(product.sellerAddress)
                setSellerContact(product.sellerContact)
                setSellerDescription(product.sellerDescription)
                setSellerImage(product.sellerImage)
                setSellerName(product.sellerName)

            }
        }   
        
     },[product,dispatch,history,productId,successUpdate])

     const uploadFileHandler = async (e) => {
         const file=e.target.files[0]
         const formData= new FormData()
         formData.append('image',file)
         setUploading(true)

         try{
            const config ={
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            }

            const {data} = await axios.post('/api/upload', formData, config)

            setImage(data)
            setUploading(false)
         } catch(error){
             console.error(error)
             setUploading(false)
         }
     }
     const uploadfileHandler = async(e) => {
        const file=e.target.files[0]
        const formData= new FormData()
        formData.append('image',file)
        setUploading(true)

        try{
           const config ={
               headers:{
                   'Content-Type': 'multipart/form-data'
               }
           }

           const {data} = await axios.post('/api/upload', formData, config)

           setSellerImage(data)
           setUploading(false)


        } catch(error){
            console.error(error)
            setUploading(false)
        }
    }

     const submitHandler= (e)=>{
         e.preventDefault()
         dispatch(updateProduct({
             _id:productId,
             name,
             price,
             image,
             brand,
             category,
             countInStock,
             description,
             sellerName,
             sellerImage,
             sellerDescription,
             sellerAddress,
             sellerContact,
         }))
     }

    return(
            <> 
               <Link to='/admin/productlist' className='btn btn-dark my-3'>
                   Go Back
               </Link>
               <FormContainer>
            <h1>Edit Product</h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
           {loading ? <Loader /> : error? <Message variant='danger'>{error}</Message> :(
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' placeholder='Enter Name' value={name} onChange={(e)=> setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <br />
                <Form.Group controlId='price'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type='number' placeholder='Enter Price' value={price} onChange={(e)=> setPrice(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                 <br />
                <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>
                    <Form.Control type='text' placeholder='Enter Product image url' value={image} onChange={(e)=> setImage(e.target.value)}></Form.Control>
                    <br />
                    <Form.File className='image-file' custom onChange={uploadFileHandler}></Form.File>
                   {uploading && <Loader />}
                </Form.Group>
                 <br />
                 <Form.Group controlId='brand'>
                <Form.Label>Brand</Form.Label>
                    <Form.Control type='text' placeholder='Enter Brand' value={brand} onChange={(e)=> setBrand(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                 <br />
                 <Form.Group controlId='category'>
                <Form.Label>Category</Form.Label>
                    <Form.Control type='text' placeholder='Enter Category' value={category} onChange={(e)=> setCategory(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                 <br /> 
                 <Form.Group controlId='countInStock'>
                <Form.Label>Count In Stock</Form.Label>
                    <Form.Control type='number' placeholder='Enter Count In Stock' value={countInStock} onChange={(e)=> setCountInStock(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                 <br />  
                 <Form.Group controlId='description'>
                <Form.Label>Description</Form.Label>
                    <Form.Control type='text' placeholder='Enter Description' value={description} onChange={(e)=> setDescription(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                 <br />  
                 <Form.Group controlId='sellerName'>
                <Form.Label>Seller Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter Seller Name' value={sellerName} onChange={(e)=> setSellerName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                 <br />  
                 <Form.Group controlId='sellerImage'>
                <Form.Label>Seller Image</Form.Label>
                    <Form.Control type='text' placeholder='Enter Seller Image url' value={sellerImage} onChange={(e)=> setSellerImage(e.target.value)}>
                    </Form.Control>
                    <br />
                    <Form.File className='image-file'  custom onChange={uploadfileHandler}></Form.File>
                           {uploading && <Loader />}
                </Form.Group>
                 <br />  
                 <Form.Group controlId='sellerDescription'>
                <Form.Label>Seller Description</Form.Label>
                    <Form.Control type='text' placeholder='Enter Seller Description' value={sellerDescription} onChange={(e)=> setSellerDescription(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                 <br />  
                 <Form.Group controlId='sellerAddress'>
                <Form.Label>Seller Address</Form.Label>
                    <Form.Control type='text' placeholder='Enter Seller Address' value={sellerAddress} onChange={(e)=> setSellerAddress(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                 <br />  
                 <Form.Group controlId='sellerContact'>
                <Form.Label>Seller Contact</Form.Label>
                    <Form.Control type='text' placeholder='Enter Seller Contact Number' value={sellerContact} onChange={(e)=> setSellerContact(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                 <br />  
                <Button  type='submit' variant='primary'>
                  Update
                </Button>
            </Form>
           )}
           
            
        </FormContainer>
            </>

        
    )   
} 

export default ProductEditScreens
