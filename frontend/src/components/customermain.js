import React,{ Component,useState,useEffect } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import Header from './header';
import Footer from './footer';
import axios from "axios"

import { Navbar,NavbarBrand,Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardHeader, BreadcrumbItem, Breadcrumb,Modal,ModalBody,ModalHeader,
    Form, FormGroup, Input, Label,Media } from 'reactstrap';



function Customer (){
    
    const [image,setImage] = useState("")
    const [description,setdescription] = useState("");
    const [pickUp,setpickUpaddress] = useState("");
    const [destination,setshipaddress] = useState("");
    const [terms,setterms] = useState("");
    const [maxPrice,setmaxprice] = useState("");

    const[prodetails,setProDetails] = useState()
    const[loading,setLoading] = useState(true)
    //

    useEffect(()=>{
        console.log("Effect Called")
        const getResult = async ()=>{
            try{
                const res = axios.get("http://localhost:5000/bid/cproductDetails")
                setProDetails(res.data)
            }
            catch(e)
            {
                console.log(e)
            }
        }
        getResult()
    },[])

    console.log("Product Details : ",prodetails)

    const [orders,setorders]=useState([
        {
            id:1,
            shipment_name:'vikash arya',
            time:60,
            date:'20/02/2021'
        },
        {
            id:2,
            shipment_name:'Dhruv Updhyay',
            time:30,
            date:'20/02/2021'
        },
        {
            id:3,
            shipment_name:'Jai Singham',
            time:50,
            date:'20/02/2021'
        },
        {
            id:4,
            shipment_name:'Bachhu ',
            time:20,
            date:'20/02/2021'
        },
        {
            id:5,
            shipment_name:'Vikash Arya',
            time:60,
            date:'20/02/2021'
        },
        {
            id:6,
            shipment_name:'sarthak mishra',
            time:40,
            date:'20/02/2021'
        },
        {
            id:7,
            shipment_name:'rishabh garg',
            time:55,
            date:'20/02/2021'
        }
    ]);


    async function productForm(e)
    {
        e.preventDefault()

        try{
            const productData = {
                image,
                description,
                pickUp,
                destination,
                maxPrice,
                terms
            }
            await axios.post("http://localhost:5000/bid/customerbid",productData)
        }
        catch(err)
        {
            console.log(err)
        }
    }

   /* const [counter, setCounter] = React.useState(60);
    React.useEffect(() => {
        const timer =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }, [counter]); */
    const [ismodalopen,setmodal]=useState(false);


        console.log("Good")
        const ordercards = orders.map((data) => {
            return (
              <div key={data.id} >
                <Media className="ordercard">
                    <Media left className="timer"></Media>
                    <Media body>
                        <div className="row">
                            <div className="col-5">
                                <h5><b>{data.shipment_name}</b></h5> 
                            </div>
                            <div className="col-3">
                                {data.date}
                            </div>
                            <div className="col-4">
                                <Link to="/productdetails"><Button className="btn btn-dark detailsbtn">view details</Button></Link>
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
                    <Button  onClick={()=>setmodal(!ismodalopen)} className="top_btn_orange" title="add product"><i className="fa fa-plus"></i></Button>
                    <Link to='/customerhistory'> <Button  className="top_btn_blue" title="product history"><i className="fa fa-history"></i></Button></Link>
                    

                </div>
                <div className="row">
                    <div className="col-5">
                        <Card id="customercard">
                            <CardHeader className="cardhead"><h4 >Customer Profile</h4></CardHeader>
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
                        {console.log("worked")}
                    </div>
                        <div className="col-7 orderssection">
                        <h2 className="sidesecheading">Your Orders</h2>
                        <div className="orderssubsection">
                        {ordercards}
                        </div>
                    </div>
                    
                </div>
                <Modal isOpen={ismodalopen}  toggle={()=>setmodal(!ismodalopen)}>
                    <ModalHeader toggle={()=>setmodal(!ismodalopen)}>Add Product</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={productForm}> 
                                <FormGroup>
                                    <Label htmlFor="description">Product Description</Label>
                                    <Input type="text" id="description" name="description"  onChange={(e)=>setdescription(e.target.value)}value={description}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="shipaddress">PickUp Address</Label>
                                    <Input type="text" id="shipaddress" name="shipaddress"  onChange={(e)=>setpickUpaddress(e.target.value)}value={pickUp}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="shipaddress">Shipping Address</Label>
                                    <Input type="text" id="shipaddress" name="shipaddress"  onChange={(e)=>setshipaddress(e.target.value)}value={destination}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="maxprice">Max Price</Label>
                                    <Input type="number" id="maxprice" name="maxprice"  onChange={(e)=>setmaxprice(e.target.value)}value={maxPrice}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="terms">Terms &#38; Conditions</Label>
                                    <Input type="text" id="terms" name="terms"  onChange={(e)=>setterms(e.target.value)}value={terms}/>
                                </FormGroup>
                                <FormGroup className="file-upload-wrapper">
                                    <Input type="file" id="productimage" accept="image/x-png,image/gif,image/jpeg,image/jpg" />
                                </FormGroup>
                                <Button type="submit" value="submit" color="success" className="modalbtn">submit</Button>
                                <Button color="danger" onClick={()=>setmodal(!ismodalopen)}>Cancel</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Footer/>
            </div>
            
        );

}
export default Customer ;
/*<div>Countdown: {counter}</div>*/