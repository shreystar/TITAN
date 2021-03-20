import React,{ Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';

class Header2 extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar dark id="navbar">
             <div className="container container_excp2">
               <NavbarBrand id="navlogo2"><b>EETRAS</b><br></br><small>Focusing on comfort &#38; savings</small></NavbarBrand>
             </div>
           </Navbar>
            </React.Fragment>
        );
    }
}

export default Header2;