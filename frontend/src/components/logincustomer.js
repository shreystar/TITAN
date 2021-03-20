import React,{ useState,useEffect,useContext} from 'react';
import { Link,useHistory } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import {Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardHeader, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import AuthContext from '../context/AuthContext';




function LoginCustomer(){

    const[email,setcustemail] = useState("")
    const[password,setcustpassword] = useState()
    const[userType,setusertype] = useState("Customer")

    const {getLoggedIn} = useContext(AuthContext)
    
    let history = useHistory();

    async function login(e)
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
            history.push("/customermain")
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
                <Header/>
                <div className="row">
                    <div className="col-4 offset-4">
                    <Card className="login" id="card4">
                        
                        <CardBody>
                        <CardTitle><i className="fa fa-user"></i><b> Customer Login</b></CardTitle>
                            <Form onSubmit={login}>
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
                                    <Label htmlFor="usertype">User Type</Label>
                                    <Input type="text" id="usertype" name="usertype"
                                       value={userType}/>
                                </FormGroup>
                                <Button type="submit" value="submit" >Login</Button>
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
export default LoginCustomer;