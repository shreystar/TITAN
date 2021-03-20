import React,{useContext } from 'react';
import { BrowserRouter,Switch, Route, Redirect  } from 'react-router-dom';
import axios from "axios"

import './App.css';
import Home from './components/home';
import LoginTransporter from './components/logintransporter';
import LoginCustomer from './components/logincustomer';

import Transporter from './components/transportermain';
import Customer from './components/customermain';
import Product from './components/product';
import RegisterCustomer from './components/registercustomer';
import RegisterTransporter from './components/registertransporter';
import CustHist from './components/customerhistory';
import TransHist from './components/transporterhistory';
import AuthContext, { AuthContextProvider } from './context/AuthContext';

axios.defaults.withCredentials = true

function App(){

      const {loggedIn} = useContext(AuthContext)
      return(
         <BrowserRouter>
          <div className="App" > 
            <Switch>
              <Route path='/home' component={()=><Home/>} />

              {
                loggedIn === false &&<>
                <Route exact path='/login_customer' component= {()=><LoginCustomer/>}/>
                <Route exact path='/reg_customer' component= {()=><RegisterCustomer/>}/>
                <Route exact path='/login_transporter' component= {()=><LoginTransporter/>}/>
                <Route exact path='/reg_transporter' component= {()=><RegisterTransporter/>}/>
                
                </>
              }
              {
                loggedIn === true && <>
                  <Route exact path='/customermain' component= {()=><Customer/>}/>
                  <Route exact path='/transportermain' component= {()=><Transporter/>}/>
                  <Route exact path='/productdetails' component= {()=><Product/>}/>
                  <Route exact path='/transporterhistory' component= {()=><TransHist/>}/>
                  <Route exact path='/customerhistory' component= {()=><CustHist/>}/>
                </>
              }
              <Redirect to="/home"/>
            </Switch>
          </div>
         </BrowserRouter>
      );
}

export default App;
