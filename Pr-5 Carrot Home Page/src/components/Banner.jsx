import React from 'react';
import './Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Banner = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" id="carouselExampleSlidesOnly" data-bs-interval="5000">

                    {/* First Slide */}
                    <div className="carousel-item active" >
                        <div className="container-fluid banner d-flex">
                            <div className="col-12 row banner-content align-items-center w-100">
                                <div className="col-md-6">
                                    <h2><span>100%</span> Organic Fruits</h2>
                                    <h1>Explore fresh &<br />juicy fruits.</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet<br />reiciendis beatae consequuntur.</p>
                                    <div className="btn">
                                        <a href="#">Shop Now</a>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <img src='./src/assets/img.png' style={{ width: '500px' }} alt="Fruit" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Slide */}
                    <div className="carousel-item " >
                        <div className="container-fluid ss d-flex">
                            <div className="col-12 row banner-content align-items-center  w-100">
                                <div className="col-md-6">
                                    <h2><span>100% </span>Organic Vegetables</h2>
                                    <h1>The best way to <br /> stuff your wallet.</h1>
                                    <p>Experience the juicy burst of handpicked fruits. Fresh every day!</p>
                                    <div className="btn">
                                        <a href="#">Shop Now</a>
                                    </div>
                                </div>
                                <div className="col-6 d-flex justify-content-center align-items-center imgs">
                                    <img src="./src/assets/banner.jpg" style={{  maxWidth: "1100px",marginRight:"200px" }} alt="Fruit 2" />
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
};

export default Banner;
