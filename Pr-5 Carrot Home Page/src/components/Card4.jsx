import React from 'react'
import Card from 'react-bootstrap/Card';
import './Card4.css'
import { IoMdStar } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";

const Card4 = () => {
    return (
        <div className='container mb-5'>
            <div className="col-12 d-flex align-items-center">
                <div className="col-3">
                    <Card className='Card4' style={{ width: '16rem', height: "25rem" }}>
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/1.jpg" alt="" />
                        <div className='lock'>
                            <AiOutlineShopping />
                        </div>

                        <div className='Card4-content mt-3'>
                            <a href="">Snacks</a>
                            <div className="star d-flex justify-content-center">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <p>(0.5)</p>
                            </div>

                            <div className='a'>
                                <a href="">Best snakes with hazel <br /> nut mix pack 200gm</a>

                            </div>

                            <div className='cc d-flex '>
                                <span> $120.25</span>
                                <p>$123.25</p>
                            </div>

                        </div>

                    </Card>

                </div>
                <div className="col-3">
                    <Card className='Card4' style={{ width: '16rem', height: "25rem" }}>

                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/2.jpg" alt="" />

                        <div className='lock'>
                            <AiOutlineShopping />
                        </div>

                        <div className='Card4-content mt-3'>
                            <a href="">Snacks</a>
                            <div className="star d-flex justify-content-center">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <p>(0.5)</p>
                            </div>

                            <div className='a'>
                                <a href="">Sweet snakes crunchy <br /> nut
                                    mix 250gm
                                    pack </a>

                            </div>

                            <div className='cc d-flex '>
                                <span> $100.25</span>
                                <p>$110.25</p>
                            </div>

                        </div>

                    </Card>
                </div>
                <div className="col-3">
                    <Card className='Card4' style={{ width: '16rem', height: "25rem" }}>

                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/3.jpg" alt="" />

                        <div className='lock'>
                            <AiOutlineShopping />
                        </div>

                        <div className='Card4-content mt-3'>
                            <a href="">Snacks</a>
                            <div className="star d-flex justify-content-center">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <p>(0.5)</p>
                            </div>

                            <div className='a'>
                                <a href="">Sweet snakes crunchy <br /> nut
                                    mix 250gm
                                    pack </a>

                            </div>

                            <div className='cc d-flex '>
                                <span> $100.25</span>
                                <p>$110.25</p>
                            </div>

                        </div>

                    </Card>
                </div>

                <div className="col-3">
                    <div className="img-content">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/products-rightview.jpg" alt="" />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card4
