import React,{ Component,useState,useContext } from 'react';
import { Link,useHistory } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import axios from 'axios';

import {Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardHeader, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';
import AuthContext from '../context/AuthContext';




function RegisterCustomer(){
    
    const [name,setcustname] = useState("")
    const [email,setcustemail] = useState("")
    const [password,setcustpassword] = useState("")
    const [phoneNumber,setcustphone] = useState("")
    const [userType,setusertype] = useState("Customer")

    const {getLoggedIn} = useContext(AuthContext)

    let history = useHistory();

    async function handleRegistration(e)
    {
        e.preventDefault()

        try{
            const regData = {
                name,
                email,
                password,
                phoneNumber,
                userType
            }
            await axios.post("http://localhost:5000/auth/registor",regData)
            getLoggedIn()
            history.push("/customermain")
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
                        <CardTitle><b>Register Customer</b></CardTitle>

                            <Form onSubmit={handleRegistration}>
                                <FormGroup>
                                    <Label htmlFor="custname">Name</Label>
                                    <Input type="text" id="custname" name="custname" 
                                       onChange={(e)=>setcustname(e.target.value)} value={name} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="custemail">Email</Label>
                                    <Input type="email" id="custemail" name="custemail"
                                       onChange={(e)=>setcustemail(e.target.value)} value={email} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="custpassword">Password</Label>
                                    <Input type="password" id="custpassword" name="custpassword"
                                       onChange={(e)=>setcustpassword(e.target.value)} value={password} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="custphone">Phone no.</Label>
                                    <Input type="telnum" id="custphone" name="custphone"
                                       onChange={(e)=>setcustphone(e.target.value)} value={phoneNumber} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="usertype">User Type</Label>
                                    <Input type="text" id="usertype" name="usertype"
                                        value={userType} />
                                    
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
export default RegisterCustomer;