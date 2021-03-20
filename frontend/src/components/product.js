import React,{ Component,useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import Header from './header';
import Footer from './footer';


import { Navbar,NavbarBrand,Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardHeader, BreadcrumbItem, Breadcrumb,Modal,ModalBody,ModalHeader,
    Form, FormGroup, Input, Label,Media } from 'reactstrap';



function Product (){
    /*const [counter, setCounter] = React.useState(60);*/
    const[ismodalopen,setmodal]=useState(false);
    const [bids,setbids]=useState([
        {
            id:1,
            transporter:'Vikash Arya',
            bid_price:'2000',
            additional_comment:'I am ready to give future discounts on all transprts.',
            address:'SRMIST,srm nagar,kattankulathur,kanchipuram,tamilnadu,603203'
        },
        {
            id:1,
            transporter:'Dhruv Updhyay',
            bid_price:'2000',
            additional_comment:'please hume hi de do ye contract to gareeb ki dua lgegi.please hume hi de do ye contract to gareeb ki dua lgegi.',
            address:'SRMIST,srm nagar,kattankulathur,kanchipuram,tamilnadu,603203'
        },
        {
            id:1,
            transporter:'Jai Singham',
            bid_price:'2000',
            additional_comment:'',
            address:'SRMIST,srm nagar,kattankulathur,kanchipuram,tamilnadu,603203'
        },
        {
            id:1,
            transporter:'Bachhu',
            bid_price:'2000',
            additional_comment:'We provide complimentry services.Like malai kofta.',
            address:'SRMIST,srm nagar,kattankulathur,kanchipuram,tamilnadu,603203'
        },
        {
            id:1,
            transporter:'Vikash Arya',
            bid_price:'2000',
            additional_comment:'I am ready to give future discounts on all transprts.',
            address:'SRMIST,srm nagar,kattankulathur,kanchipuram,tamilnadu,603203'
        }
    ]);


    /*React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);*/
        
        const bidcards = bids.map((data) => {
            return (
              <div key={data.id} >
                <Media className="bidcard">
                    <Media left id="mediamg">
                        <i className="fa fa-user "></i>
                    </Media>
                    <Media body className="bidcardbody">
                    <h4>{data.transporter} <span className="bidprice">&#8377; {data.bid_price}</span></h4>
                        
                        <Button onClick={()=>setmodal(!ismodalopen)} className="btn btn-dark detailsbtn">contact info.</Button>
                    </Media>
                </Media>
              </div>
            );
        });
        return(
            <div className="container" >

                <Header/>
                <div className="row " id="btn_row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    
                    <Link to='/customermain'> <Button  className="top_btn_orange" title="home"><i className="fa fa-home"></i></Button></Link>
                    <Link to='/customerhistory'> <Button  className="top_btn_blue" title="product history"><i className="fa fa-history"></i></Button></Link>
                    

                </div>
                <div className="row" >
                    <div className="col-5">
                        <Card id="productcard">
                        <CardHeader className="cardhead"><h4 >Product Profile</h4></CardHeader>

                            <CardBody>
                            
                            <img src='/assets/images/01.jpg' id="productimg"></img>
                                <div className="productdetails">
                                    <p><b>Product Name : </b>John Doe</p>
                                    <p><b>Transporter Name : </b>John Doe</p>
                                    <p><b>Transporter Contact no. : </b>7894561230</p>
                                    <p><b>Date : </b>20/02/2021</p>
                                    <p id="shippingaddr"><b>Shipping Address : </b>SRMIST,srm nagar,kattankulathur,kanchipuram,tamilnadu,603203</p>
                                    <p><b>Status : </b>Delivered</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-7 bidssection">
                        <h2 className="sidesecheading">Bids On This Product</h2>
                        <div className="bidssubsection">
                            {bidcards}
                        </div>

                    </div>
                    
                </div>
                <Modal isOpen={ismodalopen}  toggle={()=>setmodal(!ismodalopen)} id="transportercontactmodel">
                    <ModalHeader  toggle={()=>setmodal(!ismodalopen)}>Transporter Contact Details</ModalHeader>
                    <ModalBody>
                        <div className="container">
                        <div className="row">
                            <div className="col-12 ">
                                <Button className="circle"><i className="fa fa-phone "></i></Button>
                                <p>+917845612390</p>

                            </div>
                            <div className="col-12">
                                <Button className="circle"><i className="fa fa-map-marker "></i></Button>
                                <p>SRMIST,srm nagar,kattankulathur,kanchipuram,tamilnadu,603203</p>

                            </div>
                            <div className="col-12">
                                <Button className="circle"><i className="fa fa-envelope "></i></Button>
                                <p>chamundatransports@gmail.com</p>

                            </div>
                        </div>
                        </div>
                        
                    </ModalBody>
                </Modal>
                <Footer/>
            </div>
            
        );

}
export default Product ;
/*<div>Countdown: {counter}</div>*/