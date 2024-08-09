import React from 'react';
import brand from '../assets/brand.jpg'

const ExampleCarouselImage = () => {
    return (
        <div className="row" style={{ width: '100%', height: '100vh', backgroundColor: 'white' }}>
            <div className='col-md-6 mt-5 justify-content-center'><img src={brand} width="400" height="400" alt="brandlogo"/></div>
            <div className='col-md-6'>

                <div className='row'>
                    <p className='col-md-9 fs-3 text-dark p-5'>XIRCLS is disrupting the marketing industry through collaborative marketing, while helping all brands to increase their reach & sales.</p>

                    <p> Nilesh Karnani & Ashish Baheti, Co-founders</p>
                </div>

            </div>
        </div >
    );
};

export default ExampleCarouselImage;