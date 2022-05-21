import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreens from './screens/HomeScreens';
import ProductsScreens from './screens/ProductsScreens';
import ProductScreens from './screens/ProductScreens';
import SellerScreens from './screens/SellerScreens';
import HelpersScreens from './screens/HelpersScreens';
import HelperScreens from './screens/HelperScreens';
import FoodsScreens from './screens/FoodsScreens';
import FoodScreens from './screens/FoodScreens';
import CartScreen from './screens/CartScreen';
import LoginScreens from './screens/LoginScreens';
import RegisterScreens from './screens/RegisterScreens';
import ProfileScreens from './screens/ProfileScreens';
import ShippingScreens from './screens/ShippingScreens';
import PaymentScreens from './screens/PaymentScreens';
import PlaceOrderScreens from './screens/PlaceOrderScreens';
import OrderScreens from './screens/OrderScreens';
import UserListScreens from './screens/UserListScreens';
import UserEditScreens from './screens/UserEditScreens';
import ProductListScreens from './screens/ProductListScreens';
import ProductEditScreens from './screens/ProductEditScreens';
import HelperListScreens from './screens/HelperListScreens';
import HelperEditScreens from './screens/HelperEditScreens';
import FoodListScreens from './screens/FoodListScreens';
import FoodEditScreens from './screens/FoodEditScreens';
import OrderListScreens from './screens/OrderListScreens';
const App=() => {
  return (
    <Router>
     <Header />
     <main className='py-3'>
       <Container>
       <Route path='/' component={HomeScreens} exact />
       <Route path='/search/:keyword' component={ProductsScreens} exact />
       <Route path='/products' component={ProductsScreens} exact />   
       <Route path='/product/:id' component={ProductScreens}  />
       <Route path='/product/:id/seller' component={SellerScreens} exact />
       <Route path='/admin/product/:id/edit' component={ProductEditScreens}  />
       <Route path='/admin/helper/:id/edit' component={HelperEditScreens}  />
       <Route path='/admin/food/:id/edit' component={FoodEditScreens}  />
       <Route path='/helpers' component={HelpersScreens} exact />
       <Route path='/helper/:id' component={HelperScreens}  />
       <Route path='/foods' component={FoodsScreens} exact  />
       <Route path='/food/:id' component={FoodScreens}  />
       <Route path='/cart/:id?' component={CartScreen}  />
       <Route path='/admin/userlist' component={UserListScreens}  />
       <Route path='/admin/user/:id/edit' component={UserEditScreens}  />
       <Route path='/admin/productlist' component={ProductListScreens} exact />
       <Route path='/admin/helperlist' component={HelperListScreens} exact  />
       <Route path='/admin/foodlist' component={FoodListScreens} exact />
       <Route path='/admin/orderlist' component={OrderListScreens}  />
       <Route path='/login' component={LoginScreens} />
       <Route path='/register' component={RegisterScreens} />
       <Route path='/profile' component={ProfileScreens} />
       <Route path='/shipping' component={ShippingScreens} />
       <Route path='/payment' component={PaymentScreens} />
       <Route path='/placeorder' component={PlaceOrderScreens} />
       <Route path='/order/:id' component={OrderScreens} />
       </Container>
     </main>
     <Footer />
    </Router>
  );
}

export default App;
