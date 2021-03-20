import React,{ Component, useState,useContext } from 'react';
import { Link,useHistory } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import axios from 'axios';


import {Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardHeader, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';
import AuthContext from '../context/AuthContext';



function RegisterTransporter(){

    const [name,settraname] = useState("")
    const [email,settraemail] = useState("")
    const [password,settrapassword] = useState("")
    const [phoneNumber,settraphone] = useState("")
    const [userType,setusertype] = useState("Contractor")

    const {getLoggedIn} = useContext(AuthContext)
    let history = useHistory();

    async function handleRegister(e)
    {
        e.preventDefault()

        try{
            const loginData = {
                name,
                email,
                password,
                phoneNumber,
                userType
            }
            await axios.post("http://localhost:5000/auth/registor",loginData)
            await getLoggedIn()
            history.push("/transportermain")
        }
        catch(err)
        {
            console.log(err)
        }
    }

        return(
            <div  className="container logincont"  style={{  
                backgroundImage: "url('/exc_back.jpg')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                
              }}  >
                <Header/>
                <div className="row">
                    <div className="col-4 offset-4">
                    <Card className="register">
                        <CardBody>
                            <CardTitle><b>Register Transporter</b></CardTitle>
                            <Form onSubmit={handleRegister}>
                            <FormGroup>
                                    <Label htmlFor="traname">Organization Name</Label>
                                    <Input type="text" id="traname" name="traname"
                                      onChange={(e)=>settraname(e.target.value)} value={name}  />
                                </FormGroup>
                                
                                
                                <FormGroup>
                                    <Label htmlFor="traemail">Email</Label>
                                    <Input type="email" id="traemail" name="traemail"
                                        onChange={(e)=>settraemail(e.target.value)} value={email}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="trapassword">Password</Label>
                                    <Input type="password" id="trapassword" name="trapassword"
                                        onChange={(e)=>settrapassword(e.target.value)} value={password}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="traphone">Phone no.</Label>
                                    <Input type="telnum" id="traphone" name="traphone"
                                       onChange={(e)=>settraphone(e.target.value)} value={phoneNumber} />
                                </FormGroup>
                                

                                <FormGroup>
                                    <Label htmlFor="usertype">User Type</Label>
                                    <Input type="text" id="usertype" name="usertype"
                                       value={userType}/>
                                </FormGroup>
                                
                                <Button type="submit" value="submit" >Register</Button>
                                <Link to='/home' className="backbtn"><Button >Home</Button></Link>
                            </Form>
                        </CardBody>
                    </Card>
                    </div>
                </div>
                <div>
                </div>
                <Footer/>
            </div>
        );
    }
export default RegisterTransporter;