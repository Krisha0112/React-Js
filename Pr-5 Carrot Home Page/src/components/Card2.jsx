import React from 'react'
import Card from 'react-bootstrap/Card';
import { RiRedPacketLine } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiTruckLight } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import './Card2.css'
const Card2 = () => {
    return (
        <div className='card-2 d-flex'>
            <Card style={{ width: '19rem' }}>
                <div className='icon d-flex justify-content-center mt-4'>
                    <RiRedPacketLine />
                </div>
                <Card.Body>
                    <h4>Product Packing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </Card.Body>
            </Card>
            <Card style={{ width: '19rem' }}>
                <div className='icon d-flex justify-content-center mt-4'>
                    <RiCustomerService2Line />
                </div>
                <Card.Body>
                    <h4>24X7 Support</h4>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing.</p>
                </Card.Body>
            </Card>
            <Card style={{ width: '19rem' }}>
                <div className='icon d-flex justify-content-center mt-4'>
                    <PiTruckLight />
                </div>
                <Card.Body>
                    <h4>Delivery in 5 Days</h4>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing.</p>
                </Card.Body>
            </Card>
            <Card style={{ width: '19rem' }}>
                <div className='icon d-flex justify-content-center mt-4'>
                    <MdPayment />

                </div>
                <Card.Body>
                    <h4>Payment Secure</h4>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing.</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Card2
