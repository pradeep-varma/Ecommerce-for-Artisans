import axios from 'axios'
import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {listHelperDetails, updateHelper } from '../actions/helperActions'
import { HELPER_UPDATE_RESET } from '../constants/helperConstants'


const HelperEditScreens = ({match,history}) => {  
     const helperId=match.params.id
     const [name,setName]= useState('')
     const [occupation_type,setOccupation_Type]= useState()
     const [description,setDescription]= useState('')
     const [place,setPlace]=useState('')
     const [contact,setContact]=useState('')
     const [image,setImage]= useState('')
     const [uploading,setUploading]= useState(false)


     const dispatch = useDispatch()

     const helperDetails = useSelector(state=> state.helperDetails)
     const {loading,error,helper} = helperDetails
     
     const helperUpdate = useSelector(state=> state.helperUpdate)
     const {loading:loadingUpdate,error:errorUpdate,success:successUpdate} = helperUpdate

     useEffect(()=>{

            if(successUpdate){
                dispatch({type:HELPER_UPDATE_RESET})
                history.push('/admin/helperlist')
            } else {
            if( ! helper.name || helper._id!==helperId){
                dispatch(listHelperDetails(helperId))
            } else {  
                setName(helper.name)
                setOccupation_Type(helper.occupation_type)
                setDescription(helper.description)
                setPlace(helper.place)
                setContact(helper.contact)
                setImage(helper.image)
               
            }
        }   
        
     },[helper,dispatch,history,helperId,successUpdate])

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
         dispatch(updateHelper({
             _id:helperId,
             name,
             place,
             image,
             occupation_type,
             contact,
             description,
             
         }))
     }

    return(
            <> 
               <Link to='/admin/helperlist' className='btn btn-dark my-3'>
                   Go Back
               </Link>
               <FormContainer>
            <h1>Edit Service</h1>
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
                <Form.Group controlId='place'>
                    <Form.Label>Place</Form.Label>
                    <Form.Control type='text' placeholder='Enter Place' value={place} onChange={(e)=> setPlace(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                 <br />
                <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>
                    <Form.Control type='text' placeholder='Enter Helper Image url' value={image} onChange={(e)=> setImage(e.target.value)}></Form.Control>
                    <br />
                    <Form.File className='image-file' custom onChange={uploadFileHandler}></Form.File>
                   {uploading && <Loader />}
                </Form.Group>
                 <br />
                 <Form.Group controlId='occupation_type'>
                <Form.Label>Profession</Form.Label>
                    <Form.Control type='text' placeholder='Enter Profession' value={occupation_type} onChange={(e)=> setOccupation_Type(e.target.value)}>

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

export default HelperEditScreens
