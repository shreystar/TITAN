import React,{ useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import Header from './header';
import Footer from './footer';


import { Navbar,NavbarBrand,Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardHeader, BreadcrumbItem, Breadcrumb,Modal,ModalBody,ModalHeader,
    Form, FormGroup, Input, Label } from 'reactstrap';

import { Media } from 'reactstrap';


function CustHist (){
    
    const [orders,setorders]=useState([
        {
          id: 0,
          product_name:'bbhfhfbb',
          transporter_name:'dksbj bj',
          additional_comment:'I am ready to give future discounts on all transprts.',
          date:'27/02/2021'                    
         },
         {
            id: 1,
            product_name:'ghghghgh',
            transporter_name:'hkdvvfff',
            additional_comment:'I am ready to give future discounts on all transprts.',
            date:'27/02/2021'                       
           },
           {
            id: 2,
            product_name:'bbhfhfbb',
            transporter_name:'dksbj bj',
            additional_comment:'I am ready to give future discounts on all transprts.',
            date:'27/02/2021'                       
           },
           {
            id: 4,
            product_name:'bbhfhfbb',
            transporter_name:'dksbj bj',
            additional_comment:'I am ready to give future discounts on all transprts.',
            date:'27/02/2021'                       
           },
           {
            id: 5,
            product_name:'bbhfhfbb',
            transporter_name:'dksbj bj',
            additional_comment:'I am ready to give future discounts on all transprts.',
            date:'27/02/2021'                      
           }
       ]);

 
        
        const cardData = orders.map((data) => {
            return (
              <div key={data.id} className="col-10 offset-1">
                  <Card className="hist_product_card">
                  <CardHeader className="hist_product_card_header">{data.date}<Button color="danger"><i className="fa fa-trash"></i></Button><Link to="/productdetails"><Button color="dark">Details</Button></Link></CardHeader>
                  <CardBody>
                      <div className="container">
                          <div className="row">
                              <div className="col-4">
                              <h6><b>Product Name : </b>{data.product_name}</h6><br></br>
                              <h6><b>Transporter : </b>{data.transporter_name}</h6>
                              </div>
                              <div className="col-3 comment" style={{overflow:'auto'}}>
                                <h6><b>Price : </b>&#8377; {data.bid_price}</h6> 
                              </div>
                              <div className="col-5">
                                <p><b>Reviews :</b> </p><a href="/">Rate This Shipment</a>
                                
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
                
                <Link to='/customermain'> <Button  className="top_btn_orange" title="home"><i className="fa fa-home"></i></Button></Link>
                

            </div>
                <div className="row" id="card_row">
                    {cardData}
                </div>
                
                <Footer/>
            </div>
            
        );

}
export default CustHist ;