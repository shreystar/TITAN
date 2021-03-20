import React,{ Component ,useState,useContext} from 'react';
import { Link ,useHistory} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import axios from 'axios';

import {Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardHeader, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';
import AuthContext from '../context/AuthContext';




function LoginTransporter(){

    const[email,settraemail] = useState("")
    const[password,settrapassword] = useState("")
    const[userType,setusertype] = useState("Contractor")

    const {getLoggedIn} = useContext(AuthContext)
    let history = useHistory();

    async function handleLogin(e)
    {
        e.preventDefault()

        try{
            const loginData = {
                email,
                password,
                userType
            }
            await axios.post("http://localhost:5000/auth/login",loginData)
            await getLoggedIn()
            history.push("/transportermain");
            
        }
        catch(err)
        {
            console.log(err)
        }
    }

        return(
            <div className="container logincont"  style={{  
                backgroundImage: "url('/exc_back.jpg')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                
              }}   >
                <Header className="loginhead"  />
                <div className="row" >
                    <div className="col-4 offset-4">
                    <Card className="login" id="card3">
                        <CardBody>
                        <CardTitle><i className="fa fa-user"></i> <b>Transporter Login</b></CardTitle>

                            <Form onSubmit={handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="traemail">Email</Label>
                                    <Input type="email" id="traemail" name="traemail"
                                        onChange={(e)=>settraemail(e.target.value)} value={email} />
                                </FormGroup>
                               
                                <FormGroup>
                                    <Label htmlFor="trapassword">Password</Label>
                                    <Input type="password" id="trapassword" name="trapassword"
                                        onChange={(e)=>settrapassword(e.target.value)} value={password} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="usertype">User Type</Label>
                                    <Input type="text" id="usertype" name="usertype"
                                       value={userType}/>
                                </FormGroup>
                                <Button type="submit" value="submit" className="logbtn">Login</Button>
                                <Link to='/home' className="backbtn"><Button >Back</Button></Link>
                                
                            </Form>
                        </CardBody>
                    </Card>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
export default LoginTransporter;