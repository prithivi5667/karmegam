import React from "react";
import "../index.css";
const Home  = () => {
    return (
<div>

       
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">KARMEGAM COLLECTIVE FARMERS PRODUCER</h1>
                    <h1 className="masthead-subheading mb-0">COMPANY LIMITED</h1>
                    <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
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
                        <div className="p-5"><img src={require('../pesti.jpeg')} className="img-fluid rounded-circle" alt=" "/></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Pesticides...</h2>
                            <p>mixture of substances intended for preventing, destroying, repelling, or mitigating any pest.Any substance or mixture of substances intended for use as a plant regulator, defoliant, or desiccant.
Any nitrogen stabilizer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5"><img src={require('../rice.jpeg')} className="img-fluid rounded-circle" alt=" "/></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">Seed rice for you</h2>
                            <p>IR-20</p>
                            <p>Parentage – IR 262 X TKM 6
Duration (Days) – 130 - 135
Average yield (Kg/ha) – 5000
1000 grain weight (g) – 19
Grain type – Medium slender
Habit – Semi-dwarf
Rice color – White
Special features – Resistant to stem borer</p>
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
                            <h2 className="display-4">Contact</h2>
                            <p> 42,padiyandipalayam pudur, <br></br>Veeranampalayam P.O< br></br>kangayam,Tirupur-638701 <br></br>TamilNadu <br></br></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        
        
      
</div>
    );
}
    export default Home;