import React from 'react'   
import { MdLocationPin } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { IoIosSend } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer mt-5'>
            <div className="container">
                <div className="col-12 d-flex">
                    <div className="col-3">
                        <div className="footer-content">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/logo/logo.png" alt="" />
                            <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                            <ul>
                                <li><MdLocationPin className='icon' />51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</li>
                                <li><TfiEmail className='icon' /><a href="">example@email.com</a></li>
                                <li><a href=""><LuPhone className='icon' /> +91 123 4567890</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="company-content">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Delivery Information</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms & Conditions</a></li>
                                <li><a href="">contact Us</a></li>
                                <li><a href="">Support Center</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="company-content">
                            <h4>Category</h4>
                            <ul>
                                <li><a href="">Dairy & Bakery</a></li>
                                <li><a href="">Fruits & Vegetable</a></li>
                                <li><a href="">Snack & Spice</a></li>
                                <li><a href="">Juice & Drinks</a></li>
                                <li><a href="">Chicken & Meat</a></li>
                                <li><a href="">Fast Food</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="sub">
                            <h4>Subscribe Our Newsletter</h4>
                            <div className='in'>
                                <input type="text" placeholder='Search here...' />
                            </div>
                            <div className='iconss'>
                                <a href=""> <IoIosSend /></a>
                            </div>
                            <div className='box d-flex'>
                                <div className='box-1'>
                                    <a href=""> <TiSocialFacebook /></a>
                                </div>
                                <div className='box-1'>
                                    <a href=""> <RiTwitterXFill /></a>
                                </div>
                                <div className='box-1'>
                                    <a href=""><FaDribbble /> </a>
                                </div>
                                <div className='box-1'>
                                    <a href=""><FaInstagram /> </a>
                                </div>
                            </div>
                            <div className="image d-flex">
                                <div className="img-1">
                                    <a href=""><img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/1.jpg" alt="" /></a>
                                </div>
                                <div className="img-1">
                                    <a href=""><img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/2.jpg" alt="" /></a>
                                </div>
                                <div className="img-1">
                                    <a href=""><img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/3.jpg" alt="" /></a>
                                </div>
                                <div className="img-1">
                                    <a href=""><img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/4.jpg" alt="" /></a>
                                </div>
                                <div className="img-1">
                                    <a href=""><img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/5.jpg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='last-footer '>
                <p>© 2025 <a href="">Carrot,</a> All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
