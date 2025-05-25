import React from 'react'
import './News.css'
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from "react-icons/fa";

const News = () => {
    return (
        <div className='news justify-content-center'>
            <div className=" news-content ">
                <h2>Latest News</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    <br />
                    incididunt ut labore lacus vel facilisis.</p>

            </div>

            <div className="container">
                <div className="col-12 d-flex">
                    <div className="col-4">
                        <Card className='Card ' style={{ width: '25rem', height:'26rem'}}>

                            <div className='dd'>
                                <span>By Admin <a href="">Food</a></span>

                                <h5>Best guide to Shopping for organic ingredients.</h5>

                                <div className='icon'>
                                    <a href="">Read More <FaArrowRight /></a>
                                </div>


                            </div>
                            <div className='imgs'>
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/1.jpg" alt="" />
                            </div>

                        </Card>
                    </div>
                    
                    <div className="col-4">
                        <Card className='Card ' style={{ width: '25rem', height:'26rem'}}>

                            <div className='dd'>
                                <span>By Admin <a href="">Snacks</a></span>

                                <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>

                                <div className='icon'>
                                    <a href="">Read More <FaArrowRight /></a>
                                </div>


                            </div>
                            <div className='imgs'>
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/3.jpg" alt="" />
                            </div>

                        </Card>
                    </div>
                    <div className="col-4">
                        <Card className='Card ' style={{ width: '25rem', height:'26rem'}}>

                            <div className='dd'>
                                <span>By Admin <a href="">Vegetable</a></span>

                                <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>

                                <div className='icon'>
                                    <a href="">Read More <FaArrowRight /></a>
                                </div>


                            </div>
                            <div className='imgs'>
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/2.jpg" alt="" />
                            </div>

                        </Card>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default News
