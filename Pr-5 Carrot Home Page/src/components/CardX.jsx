import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Card.css'


const CardX = () => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Card className='card'>
                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/3.jpg" alt="" />

                <Card.Body className='card-content'>
                    <h5>Fresh <br /> Snacks & Sweets</h5>
                    <div>
                        <p><span>35%</span> Off on first order</p>
                    </div>
                    <div className='btn'>
                        <a href="">shop now</a>
                    </div>
                </Card.Body>
            </Card>
            <Card className='card'>
                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/1.jpg" alt="" />

                <Card.Body className='card-content'>
                    <h5>Healthy  <br />  Bakery Products</h5>
                    <div>
                        <p><span>30%</span> Off on first order</p>
                    </div>
                    <div className='btn'>
                        <a href="">shop now</a>
                    </div>
                </Card.Body>
            </Card>
            <Card className='card'>
                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/2.jpg" alt="" />

                <Card.Body className='card-content'>
                    <h5>Fresh  <br /> Snacks & Sweets</h5>
                    <div>
                        <p><span>35%</span> Off on first order</p>
                    </div>
                    <div className='btn'>
                        <a href="">shop now</a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardX
