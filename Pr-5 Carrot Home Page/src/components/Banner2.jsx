import React from 'react'
import Card from 'react-bootstrap/Card';
import './Banner2.css'

const Banner2 = () => {

    return (
        <div className='Banner w-100'>
            <div className="container-fluid px-0">
                <Card className='custom-card border-0'>
                    <div className='dd'>
                        <p><span>35%</span> OFF</p>
                    </div>
                    <Card.Body>
                        <h4>Great deal on organic food.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis.</p>
                        <h4 className='content'>
                            1315 : 03 : 24 : 45 <br />
                            <small>Days : Hrs : Min : Sec</small>
                        </h4>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Banner2;
