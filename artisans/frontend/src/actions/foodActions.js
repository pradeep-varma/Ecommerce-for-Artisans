import { FOOD_CREATE_FAIL, FOOD_CREATE_REQUEST, FOOD_CREATE_REVIEW_FAIL, FOOD_CREATE_REVIEW_REQUEST, FOOD_CREATE_REVIEW_SUCCESS, FOOD_CREATE_SUCCESS, FOOD_DELETE_FAIL, FOOD_DELETE_REQUEST, FOOD_DELETE_SUCCESS, FOOD_DETAILS_FAIL, FOOD_DETAILS_REQUEST, FOOD_DETAILS_SUCCESS, FOOD_LIST_FAIL, FOOD_LIST_REQUEST, FOOD_LIST_SUCCESS, FOOD_UPDATE_FAIL, FOOD_UPDATE_REQUEST, FOOD_UPDATE_SUCCESS } from '../constants/foodConstants'
import axios from 'axios'

export const listFoods= () => async(dispatch) =>{
    try{
        dispatch({type:FOOD_LIST_REQUEST})
        const {data}= await axios.get(`/api/foods`)
        dispatch({type:FOOD_LIST_SUCCESS,
        payload:data,
        })
} catch(error){
    dispatch({type:FOOD_LIST_FAIL,
     payload: error.response && error.response.data.message?error.response.data.message:error.message,
    })
}
}

export const listFoodDetails= (id) => async(dispatch) =>{
    try{
        dispatch({type:FOOD_DETAILS_REQUEST})
        const {data}= await axios.get(`/api/foods/${id}`)
        dispatch({type:FOOD_DETAILS_SUCCESS,
        payload:data,
        })
} catch(error){
    dispatch({type:FOOD_DETAILS_FAIL,
     payload: error.response && error.response.data.message?error.response.data.message:error.message,
    })
}
}

export const deleteFood = (id) => async(dispatch,getState) =>{
    try{
        dispatch({
            type: FOOD_DELETE_REQUEST,
        })

        const { userLogin: {userInfo},} = getState()

        const config = {
            headers:{
                Authorization : `Bearer ${userInfo.token}`, 
            },
        }

         await axios.delete(`/api/foods/${id}`,config)
 
        dispatch({
            type:FOOD_DELETE_SUCCESS,
            
        })  

    } catch(error){
        dispatch({type:FOOD_DELETE_FAIL,
            payload: error.response && error.response.data.message?error.response.data.message:error.message,
           })
    }
    }   
    
    export const createFood = () => async(dispatch,getState) =>{
        try{
            dispatch({
                type: FOOD_CREATE_REQUEST,
            })
    
            const { userLogin: {userInfo},} = getState()
    
            const config = {
                headers:{
                    Authorization : `Bearer ${userInfo.token}`, 
                },
            }
    
            const {data}= await axios.post(`/api/foods`,{},config)
     
            dispatch({
                type:FOOD_CREATE_SUCCESS,
                payload:data 
                
            })  
    
        } catch(error){
            dispatch({type:FOOD_CREATE_FAIL,
                payload: error.response && error.response.data.message?error.response.data.message:error.message,
               })
        }
        }    

        export const updateFood = (food) => async(dispatch,getState) =>{
            try{
                dispatch({
                    type: FOOD_UPDATE_REQUEST,
                })
        
                const { userLogin: {userInfo},} = getState()
        
                const config = {
                    headers:{
                        'Content-Type':'application/json',
                        Authorization : `Bearer ${userInfo.token}`, 
                    },
                }
        
                const {data}= await axios.put(`/api/foods/${food._id}`,food,config)
         
                dispatch({
                    type:FOOD_UPDATE_SUCCESS,
                    payload:data 
                    
                })  
        
            } catch(error){
                dispatch({type:FOOD_UPDATE_FAIL,
                    payload: error.response && error.response.data.message?error.response.data.message:error.message,
                   })
            }
            }   
            
            export const createFoodReview = (foodId,review) => async(dispatch,getState) =>{
                try{
                    dispatch({
                        type: FOOD_CREATE_REVIEW_REQUEST,
                    })
            
                    const { userLogin: {userInfo},} = getState()
            
                    const config = {
                        headers:{
                            'Content-Type':'application/json',
                            Authorization : `Bearer ${userInfo.token}`, 
                        },
                    }
            
                 await axios.post(`/api/foods/${foodId}/reviews`,review,config)
             
                    dispatch({
                        type:FOOD_CREATE_REVIEW_SUCCESS,
                        
                    })  
            
                } catch(error){
                    dispatch({type:FOOD_CREATE_REVIEW_FAIL,
                        payload: error.response && error.response.data.message?error.response.data.message:error.message,
                       })
                }
                }  