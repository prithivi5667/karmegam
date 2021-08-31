import React from "react";
import './new.css';

const Contact  = () => {
    return (
<div>

       
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">KARMEGAM COLLECTIVE FARMERS PRODUCER</h1>
                    <h1 className="masthead-subheading mb-0">COMPANY LIMITED</h1>
                    <h3>SNEHALAYA AGRICULTURAL MANAGEMENT SOCIETY RESOURCE INSTITUTION EMPANELED</h3>
                    <h4>BY SFAC, GOVT OF INDIA ,NEW DELHI </h4>
                    <h5>CIN:U01111TZ2020PTC035132</h5>
                    
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
       
        <section id="scroll">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><p>More updates pls visit our youtube channel.</p>
                        <a className="btn btn-primary btn-xl rounded-pill mt-5" href="https://youtube.com/channel/UCQSNI5XBDCX-9rY1EnFo_dA">Learn More</a>
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">KARMEGAM seeds and fertilizer</h2>
                            <p>3/20-4 Pudhuvelliyam palayam</p>
                            <p>Nathakadaiyur,</p>
                            <p>Kangayam -Tirupur 638108</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        
        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img src={require('../rices.jpeg')} className="img-fluid rounded-circle" alt=" "/></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Registered Address</h2>
                            <p> 42,padiyandipalayam pudur, <br></br>Veeranampalayam P.O< br></br>kangayam,Tirupur-638701 <br></br>TamilNadu <br></br></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        
        
      
</div>
    );
}
    export default Contact;