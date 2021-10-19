import React from 'react';
import imge from '../../images/icon/logo-wide.png'

const Footer = () => {
    return ( 
            <div className=" mt-5">
                <div className="jumbotron bg-dark text-light " >
                    <div className="row">
                        <div className="col-sm-4">
                            <h5 className="text-warning">About Us</h5>
                            <img src={imge} alt="" />
                            <p className="p-4">
                          Our aim is to help people around all corners of Bangladesh to get the healthcare services in an easier process.
                            </p>
                           
                        </div>
                        {/* <div className="col-sm-4">
                            <ul>
                                <ol className="text-warning">Link</ol>
                                <ol >Home</ol>
                                <ol>About</ol>
                                <ol>Service</ol>
                               
                                <ol>Contact</ol>
                            </ul>
                        </div> */}
                        <div className="col-sm-8">
                          
                           <p>
                               <i className="fas fa-map-marked-alt " ></i>
                               
                               <br />
                                730/C, NG- 11, Shahid Baki Sarak,<br />
                                 Khilgoan, Opposite of Sonali Bank,<br />
                                  Beside Walton Showroom. Dhaka -1219, Bangladesh.</p>
                           <h5>Contuct us</h5>
                          <h4> <i className="fas fa-phone-volume"></i> 
                          +00-89-67-56-67
                         </h4>
                         <br />
                         <i className="fab fa-facebook-square m-2" style={{fontSize:'20px'}}></i>

                         <i className="fab fa-instagram m-2" style={{fontSize:'20px'}}></i>
                         <i className="fab fa-twitter-square m-2" style={{fontSize:'20px'}}></i>
                         <i className="fab fa-whatsapp m-2"  style={{fontSize:'20px'}}></i>
                        </div>
                    </div>  
                    <hr/>
                    <p>© Copyright Heath Care . All Rights Reserved </p>            
                </div> 
                
            </div>
       
    );
};

export default Footer;