import React,{ useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import Header from './header';
import Footer from './footer';


import { Navbar,NavbarBrand,Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardHeader, BreadcrumbItem, Breadcrumb,Modal,ModalBody,ModalHeader,
    Form, FormGroup, Input, Label } from 'reactstrap';

import { Media } from 'reactstrap';


function Transporter (){
    const[ismodalopen,setmodal]=useState(false);
    const[ismodalopen1,setmodal1]=useState(false);
    const[bids,setbids]=useState([
        {
            id:1,
            shipment_name:'vikash arya',
            
            date:'20/02/2021'
        },
        {
            id:2,
            shipment_name:'Dhruv Updhyay',
            date:'20/02/2021'
        },
        {
            id:3,
            shipment_name:'Jai Singham',
            date:'20/02/2021'
        },
        {
            id:4,
            shipment_name:'Bachhu ',
            date:'20/02/2021'
        },
        {
            id:5,
            shipment_name:'Vikash Arya',
            date:'20/02/2021'
        },
        {
            id:6,
            shipment_name:'sarthak mishra',
            date:'20/02/2021'
        },
        {
            id:7,
            shipment_name:'rishabh garg',
            date:'20/02/2021'
        }
    ] );

        
        const bidcards = bids.map((data) => {
            return (
              <div key={data.id} >
                <Media className="ordercard">
                    <Media body>
                        <div className="row">
                            <div className="col-5">
                                {data.shipment_name} 
                            </div>
                            <div className="col-3">
                                {data.date}
                            </div>
                            <div className="col-4">
                                <Button  onClick={()=> setmodal(!ismodalopen)} className="btn btn-dark detailsbtn">Details</Button>
                                <Button  onClick={()=> setmodal1(!ismodalopen1)} className="btn btn-success detailsbtn">Bid</Button>
                            </div>
                        </div>
                        
                        
                    </Media>
                </Media>
              </div>
            );
        });
        return(
            <div className="container" >
                <Header/>
            <div className="row " id="btn_row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                
                <Link to='/transporterhistory'> <Button  className="top_btn_blue" title="bids history"><i className="fa fa-history"></i></Button></Link>
                

            </div>
            <div className="row" >
                <div className="col-5">
                    <Card id="customercard">
                    <CardHeader className="cardhead"><h4 >Transporter Profile</h4></CardHeader>

                        <CardBody>
                            <i className="fa fa-user customerphoto"></i>
                            <div className="customerdetails">
                                <p><b>Name : </b>John Doe</p>
                                <p><b>Phone no. : </b>7894561230</p>
                                <p><b>Email : </b>johndoetheking@gmail.com</p>
                                <p><b>Address : </b>SRMIST,srm nagar,kattankulathur,kanchipuram,tamilnadu,603203</p>
                            </div>

                        </CardBody>
                    </Card>
                </div>
                <div className="col-7 orderssection">
                <h2 className="sidesecheading">Ongoing Bids</h2>
                    <div className="orderssubsection">
                    {bidcards}
                    </div>
                </div>
                
            </div>
            <Modal isOpen={ismodalopen} toggle={()=>setmodal(!ismodalopen)}>
                <ModalHeader toggle={()=>setmodal(!ismodalopen)}>Product Detail</ModalHeader>
                <ModalBody>
                    <ul>
                        <li><b>Product Name : </b>ABSCDE</li>
                        <li><b>Owner Name : </b>Vishal</li>
                        <li><b>Shipping Address : </b>123 Rani park,near bus depot,delhi</li>
                    </ul>
                </ModalBody>
            </Modal>
            <Modal isOpen={ismodalopen1} toggle={()=>setmodal1(!ismodalopen1)}>
                <ModalHeader toggle={()=>setmodal1(!ismodalopen1)}>Bid Your Price</ModalHeader>
                <ModalBody>
                    <Form >
                            <FormGroup>
                                <Label htmlFor="bidprice">Your Price</Label>
                                <Input type="number" id="bidprice" name="bidprice"
                                     rows='6'/>
                            </FormGroup>
                           
                            
                            <Button type="submit" value="submit" color="success" className="modalbtn">submit</Button>
                            <Button color="danger" onClick={()=>setmodal1(!ismodalopen1)}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
            <Footer/>
        </div>
            
        );

}
export default Transporter ;