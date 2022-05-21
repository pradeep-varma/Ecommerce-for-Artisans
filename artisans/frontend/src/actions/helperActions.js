import { HELPER_CREATE_FAIL, HELPER_CREATE_REQUEST, HELPER_CREATE_REVIEW_FAIL, HELPER_CREATE_REVIEW_REQUEST, HELPER_CREATE_REVIEW_SUCCESS, HELPER_CREATE_SUCCESS, HELPER_DELETE_FAIL, HELPER_DELETE_REQUEST, HELPER_DELETE_SUCCESS, HELPER_DETAILS_FAIL, HELPER_DETAILS_REQUEST, HELPER_DETAILS_SUCCESS, HELPER_LIST_FAIL, HELPER_LIST_REQUEST, HELPER_LIST_SUCCESS, HELPER_UPDATE_FAIL, HELPER_UPDATE_REQUEST, HELPER_UPDATE_SUCCESS } from '../constants/helperConstants'
import axios from 'axios'

export const listHelpers= () => async(dispatch) =>{
    try{
        dispatch({type:HELPER_LIST_REQUEST})
        const {data}= await axios.get(`/api/helpers`)
        dispatch({type:HELPER_LIST_SUCCESS,
        payload:data,
        })
} catch(error){
    dispatch({type:HELPER_LIST_FAIL,
     payload: error.response && error.response.data.message?error.response.data.message:error.message,
    })
}
}

export const listHelperDetails= (id) => async(dispatch) =>{
    try{
        dispatch({type:HELPER_DETAILS_REQUEST})
        const {data}= await axios.get(`/api/helpers/${id}`)
        dispatch({type:HELPER_DETAILS_SUCCESS,
        payload:data,
        })
} catch(error){
    dispatch({type:HELPER_DETAILS_FAIL,
     payload: error.response && error.response.data.message?error.response.data.message:error.message,
    })
}
}

export const deleteHelper = (id) => async(dispatch,getState) =>{
    try{
        dispatch({
            type: HELPER_DELETE_REQUEST,
        })

        const { userLogin: {userInfo},} = getState()

        const config = {
            headers:{
                Authorization : `Bearer ${userInfo.token}`, 
            },
        }

         await axios.delete(`/api/helpers/${id}`,config)
 
        dispatch({
            type:HELPER_DELETE_SUCCESS,
            
        })  

    } catch(error){
        dispatch({type:HELPER_DELETE_FAIL,
            payload: error.response && error.response.data.message?error.response.data.message:error.message,
           })
    }
    }   
    
    export const createHelper = () => async(dispatch,getState) =>{
        try{
            dispatch({
                type: HELPER_CREATE_REQUEST,
            })
    
            const { userLogin: {userInfo},} = getState()
    
            const config = {
                headers:{
                    Authorization : `Bearer ${userInfo.token}`, 
                },
            }
    
            const {data}= await axios.post(`/api/helpers`,{},config)
     
            dispatch({
                type:HELPER_CREATE_SUCCESS,
                payload:data 
                
            })  
    
        } catch(error){
            dispatch({type:HELPER_CREATE_FAIL,
                payload: error.response && error.response.data.message?error.response.data.message:error.message,
               })
        }
        }    

        export const updateHelper = (helper) => async(dispatch,getState) =>{
            try{
                dispatch({
                    type: HELPER_UPDATE_REQUEST,
                })
        
                const { userLogin: {userInfo},} = getState()
        
                const config = {
                    headers:{
                        'Content-Type':'application/json',
                        Authorization : `Bearer ${userInfo.token}`, 
                    },
                }
        
                const {data}= await axios.put(`/api/helpers/${helper._id}`,helper,config)
         
                dispatch({
                    type:HELPER_UPDATE_SUCCESS,
                    payload:data 
                    
                })  
        
            } catch(error){
                dispatch({type:HELPER_UPDATE_FAIL,
                    payload: error.response && error.response.data.message?error.response.data.message:error.message,
                   })
            }
            }   
            
            export const createHelperReview = (helperId,review) => async(dispatch,getState) =>{
                try{
                    dispatch({
                        type: HELPER_CREATE_REVIEW_REQUEST,
                    })
            
                    const { userLogin: {userInfo},} = getState()
            
                    const config = {
                        headers:{
                            'Content-Type':'application/json',
                            Authorization : `Bearer ${userInfo.token}`, 
                        },
                    }
            
                 await axios.post(`/api/helpers/${helperId}/reviews`,review,config)
             
                    dispatch({
                        type:HELPER_CREATE_REVIEW_SUCCESS,
                        
                    })  
            
                } catch(error){
                    dispatch({type:HELPER_CREATE_REVIEW_FAIL,
                        payload: error.response && error.response.data.message?error.response.data.message:error.message,
                       })
                }
                }  