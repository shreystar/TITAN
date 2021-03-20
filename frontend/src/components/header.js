import React,{ useState ,useContext} from 'react';
import { Link, NavLink,useHistory } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';

import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button} from 'reactstrap';
import AuthContext from '../context/AuthContext';
import axios from 'axios';


function Header (){
    const[login,setlogin]=useState(true);
    const {loggedIn} = useContext(AuthContext)
    console.log(loggedIn)

    const history = useHistory()

    const {getLoggedIn} = useContext(AuthContext)

    async function handleLogout()
    {
        await axios.get("http://localhost:5000/auth/logout")
        await getLoggedIn();
        setlogin(false);
        history.push("/home")
    }

        return(
           
           
            <React.Fragment>
            <Navbar dark expand="md" id="navbar">
                <div className="container container_excp">
                <NavbarBrand id="navlogo"><span className="s1">E</span><span className="s2">E</span><span className="s3">T</span><span className="s4">R</span><span className="s5">A</span><span className="s6">S</span><br></br><small>Focusing on comfort &#38; savings</small></NavbarBrand>
                    <NavbarToggler />
                    <NavbarBrand className='mr-auto' href="/"></NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/about'><span >About Us</span></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link" to='/contact'><span >Contact Us</span> </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav  navbar>
                            <NavItem>

                                    {loggedIn? <Button type="button" className= "btn-danger" onClick={handleLogout} 
                                     id='inoutbtn'><i className="fa fa-sign-out"></i> LogOut
                                    </Button>:<p></p>}
                                
                            </NavItem>
                        </Nav>
                 </div>
            </Navbar>
        </React.Fragment>
            
        );

}

export default Header;

