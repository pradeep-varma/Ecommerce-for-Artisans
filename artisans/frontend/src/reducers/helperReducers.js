import { HELPER_CREATE_FAIL, HELPER_CREATE_REQUEST, HELPER_CREATE_RESET, HELPER_CREATE_REVIEW_FAIL, HELPER_CREATE_REVIEW_REQUEST, HELPER_CREATE_REVIEW_RESET, HELPER_CREATE_REVIEW_SUCCESS, HELPER_CREATE_SUCCESS, HELPER_DELETE_FAIL, HELPER_DELETE_REQUEST, HELPER_DELETE_SUCCESS, HELPER_DETAILS_FAIL, HELPER_DETAILS_REQUEST, HELPER_DETAILS_SUCCESS, HELPER_LIST_FAIL, HELPER_LIST_REQUEST, HELPER_LIST_SUCCESS, HELPER_UPDATE_FAIL, HELPER_UPDATE_REQUEST, HELPER_UPDATE_RESET, HELPER_UPDATE_SUCCESS } from '../constants/helperConstants'

export const helperListReducer= (state={helpers:[]}, action) =>{
    switch(action.type){
        case HELPER_LIST_REQUEST:
            return {loading:true,helpers:[]}
        case HELPER_LIST_SUCCESS:
            return {loading:false, helpers:action.payload} 
        case HELPER_LIST_FAIL:
            return {loading:false,error:action.payload}  
        default:
            return state         
    }
}

export const helperDetailsReducer= (state={helper:{reviews:[]}}, action) =>{
    switch(action.type){
        case HELPER_DETAILS_REQUEST:
            return {loading:true,...state}
        case HELPER_DETAILS_SUCCESS:
            return {loading:false, helper:action.payload} 
        case HELPER_DETAILS_FAIL:
            return {loading:false,error:action.payload}  
        default:
            return state         
    }
}

export const helperDeleteReducer= (state={}, action) =>{
    switch(action.type){
        case HELPER_DELETE_REQUEST:
            return {loading:true}
        case HELPER_DELETE_SUCCESS:
            return {loading:false, success:true} 
        case HELPER_DELETE_FAIL:
            return {loading:false,error:action.payload}  
        default:
            return state         
    }
}

export const helperCreateReducer= (state={}, action) =>{
    switch(action.type){
        case HELPER_CREATE_REQUEST:
            return {loading:true}
        case HELPER_CREATE_SUCCESS:
            return {loading:false, success:true, helper:action.payload} 
        case HELPER_CREATE_FAIL:
            return {loading:false,error:action.payload}  
        case HELPER_CREATE_RESET:
            return {}    
        default:
            return state         
    }
}

export const helperUpdateReducer= (state={helper:{}}, action) =>{
    switch(action.type){
        case HELPER_UPDATE_REQUEST:
            return {loading:true}
        case HELPER_UPDATE_SUCCESS:
            return {loading:false, success:true, helper:action.payload} 
        case HELPER_UPDATE_FAIL:
            return {loading:false,error:action.payload}  
        case HELPER_UPDATE_RESET:
            return {helper:{}}    
        default:
            return state         
    }
}

export const helperReviewCreateReducer= (state={}, action) =>{
    switch(action.type){
        case HELPER_CREATE_REVIEW_REQUEST:
            return {loading:true}
        case HELPER_CREATE_REVIEW_SUCCESS:
            return {loading:false, success:true} 
        case HELPER_CREATE_REVIEW_FAIL:
            return {loading:false,error:action.payload}  
        case HELPER_CREATE_REVIEW_RESET:
            return {}   
        default:
            return state         
    }
}