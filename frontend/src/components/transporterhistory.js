import React,{ useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import Header from './header';
import Footer from './footer';


import { Navbar,NavbarBrand,Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardHeader, BreadcrumbItem, Breadcrumb,Modal,ModalBody,ModalHeader,
    Form, FormGroup, Input, Label } from 'reactstrap';

import { Media } from 'reactstrap';


function TransHist (){
    const[ismodalopen,setmodal]=useState(false);
    const[bids,setbids]=useState([
        {
          id: 0,
          product_name:'bbhfhfbb',
          bid_price:'2000',
          additional_comment:'I am ready to give future discounts on all transprts.',
          date:'27/02/2021'                    
         },
         {
            id: 1,
            product_name:'ghghghgh',
            bid_price:'5400',
            additional_comment:'I am ready to give future discounts on all transprts.',
            date:'27/02/2021'                       
           },
           {
            id: 2,
            product_name:'bbhfhfbb',
            bid_price:'20500',
            additional_comment:'I am ready to give future discounts on all transprts.',
            date:'27/02/2021'                       
           },
           {
            id: 4,
            product_name:'bbhfhfbb',
            bid_price:'32000',
            additional_comment:'',
            date:'27/02/2021'                       
           },
           {
            id: 5,
            product_name:'bbhfhfbb',
            bid_price:'20000',
            additional_comment:'I am ready to give future discounts on all transprts.',
            date:'27/02/2021'                      
           }
       ]  );


        
        const cardData = bids.map((data) => {
            return (
              <div key={data.id} className="col-10 offset-1">
                <Card className="hist_product_card">
                  <CardHeader className="hist_product_card_header">{data.date}<Button color="danger"><i className="fa fa-trash"></i></Button><Button onClick={()=>setmodal(!ismodalopen)} color="dark">Details</Button></CardHeader>
                  <CardBody>
                      <div className="container">
                          <div className="row">
                              <div className="col-4">
                              <h6><b>Product Name : </b>{data.product_name}</h6>
                              </div>
                              <div className="col-3 comment" style={{overflow:'auto'}}>
                                <h6><b>Price : </b>&#8377; {data.bid_price}</h6> 
                              </div>
                              <div className="col-5">
                                <p><b>Comment :</b> {data.additional_comment}</p>
                              </div>
                          </div>
                      </div>        
                    </CardBody>
                </Card>
                <hr></hr>
              </div>
            );
        });
        return(
            <div className="container" >
                <Header/>
               
                <div className="row " id="btn_row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                
                <Link to='/transportermain'> <Button  className="top_btn_blue" title="home"><i className="fa fa-home"></i></Button></Link>
                

            </div>
                <div className="row" id="card_row">
                    {cardData}
                </div>
                <Modal  isOpen={ismodalopen} toggle={()=>setmodal(!ismodalopen)} >
                    <ModalHeader  toggle={()=>setmodal(!ismodalopen)} >Bid Details</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h6><b>Product Name : </b>3 Sofa sets</h6><hr></hr>
                                    <h6><b>Bid Price : </b>&#8377; 500000</h6><hr></hr>
                                    <h6><b>Shipping Address : </b>SRMIST,srm nagar,kattankulathur,kanchipuram,tamilnadu,603203</h6><hr></hr>
                                    <h6><b>Your Comment : </b>I have good drivers and can provide total safety of your lagguage</h6><hr></hr>
                                    <h6><b>Owner Name : </b>Bashir Khan</h6>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
                <Footer/>
            </div>
            
        );

}
export default TransHist ;