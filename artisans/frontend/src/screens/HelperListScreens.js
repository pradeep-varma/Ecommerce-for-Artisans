import React ,{useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listHelpers, deleteHelper,createHelper} from '../actions/helperActions'
import {HELPER_CREATE_RESET} from '../constants/helperConstants'

const HelperListScreens = ({history}) => {



    const dispatch= useDispatch()

    const helperList= useSelector(state => state.helperList)
    const {loading,error,helpers}= helperList

    const userLogin= useSelector(state => state.userLogin)
    const {userInfo}= userLogin

    const helperDelete= useSelector(state => state.helperDelete)
    const {loading:loadingDelete,error:errorDelete,success:successDelete}= helperDelete

    const helperCreate= useSelector(state => state.helperCreate)
    const {loading:loadingCreate,error:errorCreate,success:successCreate,helper:createdHelper}= helperCreate

    useEffect(()=>{
        dispatch({type:HELPER_CREATE_RESET})

        if(!userInfo.isAdmin) {
            history.push('/login')
        }

        if(successCreate){
            history.push(`/admin/helper/${createdHelper._id}/edit`)
        } else {
            dispatch(listHelpers())
        }

    },[dispatch,history,userInfo,successDelete,successCreate,createdHelper])

    const deleteHandler= (id)=>{

        if(window.confirm('Are you sure')){
            dispatch(deleteHelper(id))
        }
    }

    const createHelperHandler= () =>{
          dispatch(createHelper())
    }

    return (
        <>
             <Row className='align-items-center'>
                 <Col>
                     <h1>Services</h1>
                 </Col>
                 <Col className='text-right'>
                     <Button className='my-3' onClick={createHelperHandler}>
                        <i className='fas fa-plus'></i> Create Service
                     </Button>
                 </Col>
             </Row>

             {loadingDelete && <Loader />}
             {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

             {loadingCreate && <Loader />}
             {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

            {loading? <Loader />: error? <Message variant='danger'>{error}</Message>: (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>SERVICE</th>
                            <th>LOCATION</th>
                            <th>CONTACT</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {helpers.map(helper =>(
                            <tr key={helper._id}>
                                <td>{helper._id}</td>
                                <td>{helper.name}</td>
                                <td>{helper.occupation_type}</td>
                                <td>
                                  {helper.place}
                                </td>
                                <td>{helper.contact}</td>
                                <td>
                                    <LinkContainer to={`/admin/helper/${helper._id}/edit`}>

                                    <Button variant='light' className='btn-sm'>
                                        <i className='fas fa-edit'></i>
                                    </Button>

                                    </LinkContainer>
                                    <Button variant='danger' className='btn-sm' onClick={()=> deleteHandler(helper._id)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </td>
                            </tr>
                        )

                        )}
                    </tbody>
                </Table>
               
               
            )}
        </>
    )
}

export default HelperListScreens
