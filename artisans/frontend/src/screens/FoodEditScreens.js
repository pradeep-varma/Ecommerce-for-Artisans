import axios from 'axios'
import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {listFoodDetails, updateFood } from '../actions/foodActions'
import {FOOD_UPDATE_RESET } from '../constants/foodConstants'


const FoodEditScreens = ({match,history}) => {  
     const foodId=match.params.id
     const [name,setName]= useState('')
     const [owner,setOwner]= useState()
     const [description,setDescription]= useState('')
     const [location,setLocation]=useState('')
     const [contact,setContact]=useState('')
     const [image,setImage]= useState('')
     const [uploading,setUploading]= useState(false)


     const dispatch = useDispatch()

     const foodDetails = useSelector(state=> state.foodDetails)
     const {loading,error,food} = foodDetails
     
     const foodUpdate = useSelector(state=> state.foodUpdate)
     const {loading:loadingUpdate,error:errorUpdate,success:successUpdate} = foodUpdate

     useEffect(()=>{

            if(successUpdate){
                dispatch({type:FOOD_UPDATE_RESET})
                history.push('/admin/foodlist')
            } else {
            if( ! food.name || food._id!==foodId){
                dispatch(listFoodDetails(foodId))
            } else {  
                setName(food.name)
                setOwner(food.owner)
                setDescription(food.description)
                setLocation(food.location)
                setContact(food.contact)
                setImage(food.image)
               
            }
        }   
        
     },[food,dispatch,history,foodId,successUpdate])

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
    

     const submitHandler= (e)=>{
         e.preventDefault()
         dispatch(updateFood({
             _id:foodId,
             name,
             location,
             image,
             owner,
             contact,
             description,
             
         }))
     }

    return(
            <> 
               <Link to='/admin/foodlist' className='btn btn-dark my-3'>
                   Go Back
               </Link>
               <FormContainer>
            <h1>Edit Food</h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
           {loading ? <Loader /> : error? <Message variant='danger'>{error}</Message> :(
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' placeholder='Enter Food Name' value={name} onChange={(e)=> setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <br />
                <Form.Group controlId='location'>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type='text' placeholder='Enter Location' value={location} onChange={(e)=> setLocation(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                 <br />
                <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>
                    <Form.Control type='text' placeholder='Enter Food Image url' value={image} onChange={(e)=> setImage(e.target.value)}></Form.Control>
                    <br />
                    <Form.File className='image-file' custom onChange={uploadFileHandler}></Form.File>
                   {uploading && <Loader />}
                </Form.Group>
                 <br />
                 <Form.Group controlId='owner'>
                <Form.Label>Owned By</Form.Label>
                    <Form.Control type='text' placeholder='Enter Owner/Community Name' value={owner} onChange={(e)=> setOwner(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                 <br />
                 <Form.Group controlId='contact'>
                <Form.Label>Contact</Form.Label>
                    <Form.Control type='text' placeholder='Enter Contact Details' value={contact} onChange={(e)=> setContact(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                 <br /> 
                 <Form.Group controlId='description'>
                <Form.Label>Description</Form.Label>
                    <Form.Control type='text' placeholder='Enter Description' value={description} onChange={(e)=> setDescription(e.target.value)}>
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

export default FoodEditScreens
