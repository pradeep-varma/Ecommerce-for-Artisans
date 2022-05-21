import React from 'react'
import {Carousel,Row,Col,Image} from 'react-bootstrap'
import Meta from '../components/Meta'
const HomeScreens = () => {
    return (
        <>
         <Meta title='Home' />
            <section  style={{textAlign:'center'}}>
               <Row>
                   <Col sm={12} >  
                    <Image style={{width:'450px'}} roundedCircle src="images/Artisanslogo.jpg"  fluid/>
                   </Col>
               </Row>
               
                <div>
                    <h1>
                        Welcome To Artsy Crafts
                    </h1>
                    <h4>
                        The Place where you find local Entreprenuers and their products and services.
                    </h4>
                </div>
            </section>
            <br/>
            <br/>
            <section>
                <div>
                    <p style={{fontSize:'20px'}}>
                    As the world surrendered to a global pandemic, our borderless lives were replaced with the need to look inwards. However while the world recuperates – and rightly so – the extraordinary COVID-19 situation has forced us to take a simple step back to our roots. Bringing local entrepreneurs and indigenous-influenced industries into the spotlight, the recent push for Indian brands has been a blessing in disguise. Not only has it helped replenish the national economy but also championed its creativity and sustainability. Indian designers across the spectrum have begun championing native styles through their respective mediums. Despite being a way of perpetuating the country’s rich culture, the new campaign has upheld the livelihood of the industry’s real backbone – countless weavers, craftspeople and tailors that bring the Indian ideal into reality.
Continuing our push to be #VocalForLocal,<bold> Artisans </bold>is paying ode to remarkable local entrepreneurs that are promoting Indian sensibilities through mediums of arts, handicrafts, services and food.
                    </p>
                </div>
            </section>
            <br />
            <br />
            <br />
            <section  style={{textAlign:'center'}}>
            <Row> 
            <Col lg={4} md={6} sm={12}>
                <div>
                    <Image src='/images/foods.jpg' style={{width:'400px',padding:'7%'}} fluid/>
                    <h4>#LOCALFOODS</h4>
                    <h5>The Taste Of India</h5>
                </div> 
            </Col> 
            <Col lg={4} md={6} sm={12}>
                <div>
                    <Image src='/images/handicrafts.jpg' style={{width:'400px',padding:'7%'}} fluid />
                    <h4>#LOCALHANDICRAFTS</h4>
                    <h5>The Vibe Of India</h5>
                </div> 
            </Col>     
            <Col lg={4} md={6} sm={12}>
                <div>
                    <Image src='/images/localartisans.jpg' style={{width:'400px',padding:'7%'}} fluid />
                    <h4>#LOCALSERVICES</h4>
                    <h5>The Help Of India</h5>
                </div> 
            </Col>                 
            </Row>
            </section>
            <br />
            <br />
            <br />
            <section  style={{textAlign:'center'}}>
                 <h3>Why Shop Local?</h3>
                  <Row>
                  <Col lg={4} md={6} sm={12}>
                <div>
                <Image src='/images/paint.jpg'  style={{width:'155px',padding:'7%'}} />
                    <h4>Love Where You Live</h4>
                    <p>For every Rupee spent at a Local Business, about <bold>₹0.89</bold>stays in the community.</p>
                     <h5>#PURCHASEWITHPURPOSE</h5>                    
                </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                <div>
                <Image src='/images/handmadelogo.jpg'  style={{width:'155px',padding:'7%'}} />
                    <h4>Supporl local Support small</h4>
                    <p>When you buy from a small business,an actual person does a little happy dance.</p>
                     <h5>Artisans</h5>
                </div>
                </Col>
                  
                <Col lg={4} md={6} sm={12}>
                <div>
                    <Image src='/images/paint1.jpg'  style={{width:'155px',padding:'7%'}} />
                    <h4>For the Love of Local</h4>
                    <p>Love local and Live local</p>
                     <h5>#SHOPLOCAL</h5>
                </div>
                </Col> 
                </Row>
            </section>
           <br />
           <br />
           <br />
          

           <section  style={{textAlign:'center',backgroundColor:'black'}} >
           <br />
           <br />
           <h1 style={{color:'#fff'}} >Our Users Opinions</h1>
           <br/>
        
             <Carousel style={{padding:'5%'}}>
                
                <Carousel.Item as="div" style={{padding:'5%'}}>
                   <h3 style={{color:'#fff'}}>“Going local does not mean walling off the outside world. It Means nurturing locally owned businesses which use local resources sustainably and serve primarily local consumers.”</h3>
                   <br />
                   <br />
                   <br />
                   <h5 style={{color:'#fff'}}>Pradeep</h5>
                </Carousel.Item>
               <Carousel.Item as="div" style={{padding:'5%'}} >
                    <h3 style={{color:'#fff'}}>“When you visit an independent local business,You celebrate the uniqueness of your community and encourage local prosperity.”</h3>
                   <Image roundedCircle style={{width:'150px'}}  alt="" />
                   <br />
                   <br />
                   <br />
                   <h5 style={{color:'#fff'}}>Jagadeesh</h5>
                </Carousel.Item>
               <Carousel.Item as="div" style={{padding:'5%'}}>
                    <h3 style={{color:'#fff'}}>“Money spent locally stays local, Environmentally better and Backbone of any town or city.”</h3>
                    <br />
                   <br />
                   <br />
                    <h5 style={{color:'#fff'}}>Harsha</h5>
                    </Carousel.Item>
                </Carousel>    
                <br />    
           </section>
           <br />
           <br />
            <section  style={{textAlign:'center'}}>
            <h3>Our Initiatives and Missions</h3>
            <Row> 
            <Col lg={3} md={6} sm={6}>
                <div>
                    <Image src='/images/makeinindia.png'  style={{width:'300px',height:'200px',padding:'7%'}} />
                </div> 
            </Col> 
            <Col lg={3} md={6} sm={6}>
                <div>
                    <Image src='/images/handmade.jpg'  style={{width:'200px',padding:'7%'}} />
                </div> 
            </Col>     
            <Col lg={3} md={6} sm={6}>
                <div>
                    <Image src='/images/men.jpg'  style={{width:'200px',padding:'7%'}} />
                </div> 
            </Col>     
            <Col lg={3} md={6} sm={6}>
                <div>
                    <Image src='/images/women.jpg'  style={{width:'200px',padding:'7%'}} />
                </div> 
            </Col>             
            </Row>
            </section>

            <br />
            <br />
            <br />

            <section style={{textAlign:'center'}}> 
                <h3>Contact Us</h3>
                <h5>Reach out to us for Associations and Collaborations at: </h5>
                <p style={{fontSize:'25px'}}><a href='mailto:ArtsyCrafts@gmail.com'>ArtsyCrafts@gmail.com</a></p>
            </section>

            <br />
            <br />

            <section style={{textAlign:'center'}}>
                 <h3>Connect Us On</h3>
                 <i  className='social-icon fab fa-facebook fa-2x'></i>
                 <i  className='social-icon fab fa-twitter fa-2x'></i>
                 <i  className='social-icon fab fa-instagram fa-2x'></i>
                 <i  className='social-icon fab fa-linkedin-in fa-2x'></i>
            </section>

        </>
    )
}

export default HomeScreens
