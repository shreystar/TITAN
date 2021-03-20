import React from 'react';
import 'font-awesome/css/font-awesome.css';

function Footer2(props) {
    return(
    <div className="footer footer2">
        <div className="container ">
            <div className="row justify-content-center">             
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        
                        <a className="btn " href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn " href="http://www.linkedin.com/in/"><i className="fa fa-instagram"></i></a>
                        <a className="btn " href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn " href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn " href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p id="copyright2">© Copyright 2021 Team Titans</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer2;