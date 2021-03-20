import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import {Button, Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardHeader, BreadcrumbItem, Breadcrumb,Modal,ModalBody,ModalHeader,
    Form, FormGroup, Input, Label } from 'reactstrap';
import Header2 from './header2';
import Footer2 from './footer2';
import 'font-awesome/css/font-awesome.css';






class Home extends Component{


    render(){
        return(
            
            <div className="container homecont"  style={{  
                backgroundImage: "url('/assets/images/01.jpg')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                
              }}  >
                <Header2/>
                <div className="row">
                    <div className="col-8 offset-2 welcometext">
                    <h3 className="centertext"><b>Welcome to EETRAS </b>built for sole purpose of our users' comfort and economic transportation of their goods.Enjoy your shippings!</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3  cardHome1">
                        <Card id="card1">
                            <CardBody>
                                <h2><i className="fa fa-user"></i> Customer</h2>
                                <Link to='/login_customer'className="homebtn"><Button>Login</Button></Link>
                                <Link to='/reg_customer' className="homebtn"><Button>Register</Button></Link>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-3  cardHome2">
                        <Card id="card2">
                            <CardBody>
                                <h2><i className="fa fa-user"></i> Transporter </h2>
                                <Link to='/login_transporter' className="homebtn"><Button>Login</Button></Link>
                                <Link to='/reg_transporter' className="homebtn"><Button>Register</Button></Link>
                            </CardBody>
                        </Card>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-8 offset-2 clickhere">
                        <p>Why choose EETRAS over others ? <a href="/">click here</a></p>
                    </div>
                    
                </div>
              <Footer2/>
            </div>
        );
    }
}
export default Home;