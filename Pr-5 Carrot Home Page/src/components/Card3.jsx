import React from 'react'
import Card from 'react-bootstrap/Card';
import { IoMdStar } from "react-icons/io";
import './Card3.css'
const Card3 = () => {
    return (
        <div className='container'> 
            <div className=" card3-content ">
                <h2 align="center">Great Words From People</h2>
                <p align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                   <br/> incididunt ut labore lacus vel facilisis.</p>

            </div>
            <div className="col-12 d-flex">
                <div className="col-4">
                    <Card className='Cards' style={{ width: '25rem' }}>
                        <div className='img'>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/1.jpg" alt="" />

                        </div>
                        <br />
                        <br />

                        <div className="content-card">
                            <h6>Co Founder</h6>
                            <h4>Stephen Smith</h4>
                            <p>“eiusmpsu dolor sit amet, conse cte tur  <br /> ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                            <div className="star">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-4">
                    <Card className='Cards' style={{ width: '25rem' }}>
                        <div className='img'>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/2.jpg" alt="" />

                        </div>
                        <br />
                        <br />

                        <div className="content-card">
                            <h6>Manager</h6>
                            <h4>Lorem Robinson</h4>
                            <p>“eiusmpsu dolor sit amet, conse cte tur  <br /> ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                            <div className="star">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-4">
                    <Card className='Cards' style={{ width: '25rem' }}>
                        <div className='img'>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/3.jpg" alt="" />

                        </div>
                        <br />
                        <br />

                        <div className="content-card">
                            <h6>Team Leader</h6>
                            <h4>Saddika Alard</h4>
                            <p>“eiusmpsu dolor sit amet, conse cte tur  <br /> ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                            <div className="star">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Card3
