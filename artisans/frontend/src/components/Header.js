import React from 'react';
import {Route} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import SearchBox from './SearchBox'
import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {logout} from '../actions/userActions'
const Header = () => { 
      
    const dispatch= useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}= userLogin

    const logoutHandler= () =>{
      dispatch(logout())
    }


    return (
     <header>
        <Navbar className='bar' expand="lg" collapseOnSelect> 
          <Container>
          <LinkContainer to="/">
            <Navbar.Brand >Artsy Crafts</Navbar.Brand>
          </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">  
            <Route render={({history}) => <SearchBox history={history} />} />
             <Nav className='ms-auto'>
              <NavDropdown title="Promotion" id="basic-nav-dropdown">
               <LinkContainer to="/helpers">
               <NavDropdown.Item>Services</NavDropdown.Item>
               </LinkContainer>
               <LinkContainer to="/foods">
               <NavDropdown.Item>Famous Food</NavDropdown.Item>
               </LinkContainer>
                <NavDropdown.Divider />
              </NavDropdown>
              <LinkContainer to="/products">
              <Nav.Link> Products </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
              <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              </LinkContainer>
              {userInfo? ( 
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
              ) :( 
                <LinkContainer to="/login">
                   <Nav.Link href="/login"><i className='fas fa-user'></i> Sign In</Nav.Link>
                 </LinkContainer>
               )}
               {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/helperlist'>
                      <NavDropdown.Item>Services</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/foodlist'>
                      <NavDropdown.Item>Foods</NavDropdown.Item>
                    </LinkContainer>
               </NavDropdown>
               )}
             </Nav> 
            </Navbar.Collapse>
            </Container>
            </Navbar>
     </header>
    )
}

export default Header;
