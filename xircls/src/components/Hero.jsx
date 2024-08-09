import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from 'react-bootstrap/Button';
import { A11y, Autoplay } from 'swiper/modules';
import Container from 'react-bootstrap/esm/Container'
import hammer from '../assets/hammer.png'
import leaf from '../assets/leaf.png'
import pvr from '../assets/pvr.png'
import rebelfoods from '../assets/rebelfoods.png'
import snitch from '../assets/snitch.png'
import trueelements from '../assets/trueelements.png'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';


const Hero = () => {

    const items = [
        { title1: 'Intuition', data1: 'User-friendly interfaces that predict customer needs and deliver seamless experiences.' },
        { title2: 'Attraction', data2: 'Powerful strategies that propel your sales pipeline forward for greater revenue generation.' },
        { title3: 'Personalization', data3: 'Tailored to individual preferences and fully customizable.' },
        { title4: 'Value Addition', data4: 'UAdvanced offer creation & collaborative distribution tools that add value.' },
        { title5: 'Loyalty', data5: 'From traditional points-based systems to partner rewards and cashback - we have it all.' },
        { title6: 'Goodwill', data6: 'Customers become brand ambassadors and are incentivized to spread the love.' }
    ];

    const products = [
        { title: 'IDENTITY', ltitle: 'Zero-Party Data Collection', lbtitle: 'Democrazy', data: 'Customer demographic data collection to curate personalized buying experiences.' },
        { title: 'VERIFY', ltitle: 'Visitor Authentication', lbtitle: 'SuperLeadz', data: 'Ground zero tools that detect & verify high-intent shoppers within the first few seconds of arrival.' },
        { title: 'INCENTIVIZE', ltitle: 'Shopping Engagement', lbtitle: 'Reviews, Social Shop', data: 'Solutions that instantly lock shoppers into buying mode and activate the cart journey.', ltitle2: 'Rewards & Incentives', lbtitle2: 'Infiniti & Semper Fi', data2: 'Timely offers, delivered discreetly, to delight shoppers and convert them into customers guaranteed to return.' },


    ]



    return (
        <>
            <div className='hero-container d-flex align-items-center justify-content-center text-center my-5 mx-5'>
                <Container fluid>
                    <div className=''>
                        <h1 className='display-2 text-center main-heading fw-bold'>From First Visit <br></br>
                            To Forever Loyal.</h1>
                        <h3 className='text-center text-black mt-3 fw-lighter'>An end-to-end martech stack to optimize every step of the buyer journey.</h3>
                    </div>
                </Container>
            </div>


            <div className='mx-5'>
                <div className='grey align-items-center d-flex'>
                    <Swiper
                        modules={[Autoplay, A11y]}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false
                        }}
                        spaceBetween={50}
                        slidesPerView={5}


                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide><img src={hammer} width={180} alt="brandlogo" /></SwiperSlide>
                        <SwiperSlide><img src={leaf} width={180} alt="brandlogo" /></SwiperSlide>
                        <SwiperSlide><img src={pvr} width={180} alt="brandlogo" /></SwiperSlide>
                        <SwiperSlide><img src={rebelfoods} width={180} alt="brandlogo" /></SwiperSlide>
                        <SwiperSlide><img src={snitch} width={180} alt="brandlogo" /></SwiperSlide>
                        <SwiperSlide><img src={trueelements} width={180} alt="brandlogo" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className='hero-container d-flex align-items-center justify-content-center text-center my-5 mx-5'>
                <Container fluid>
                    <div className=''>
                        <h1 className='display-2 text-center main-heading fw-bold'>Trust is Everything.</h1>
                        <h3 className='text-center text-black mt-3 fw-lighter'>We prioritize digital interactions built on trust, transparency, and 100% consent of your valued customers.</h3>
                    </div>
                </Container>
            </div>

            <div className='d-flex align-items-center justify-content-center text-center my-5 mx-5'>
                <Container fluid>
                    <div className=''>
                        <h1 className='display-2 text-center main-heading fw-bold'>Technology That Sells.<br></br>
                            The Way You Would.</h1>
                        <h3 className='text-center text-black mt-3 fw-lighter'>A human-first approach to martech that prioritizes a personal experience for each customer.</h3>
                    </div>
                </Container>
            </div>

            <div className='m-auto justify-content-center mx-5 mt-0 mt-md-2 row'>
                <div className="col-md-6 col-lg-4">
                    <div className='mt-2 mt-md-3 p-2'>
                        {items.map((item) => (
                            <div className='row'>
                                <div className='row'>
                                    <h2 className='fw-bold'>{item.title1}</h2>
                                    <h4 className='fw-lighter'>{item.data1}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className='mt-2 mt-md-3 p-2'>
                        {items.map((item) => (
                            <div>
                                <h2 className='fw-bold'>{item.title2}</h2>
                                <h4 className='fw-lighter'>{item.data2}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className='mt-2 mt-md-3 p-2'>
                        {items.map((item) => (
                            <div>
                                <h2 className='fw-bold'>{item.title3}</h2>
                                <h4 className='fw-lighter'>{item.data3}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className='mt-2 mt-md-3 p-2'>
                        {items.map((item) => (
                            <div>
                                <h2 className='fw-bold'>{item.title4}</h2>
                                <h4 className='fw-lighter'>{item.data4}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className='mt-2 mt-md-3 p-2'>
                        {items.map((item) => (
                            <div>
                                <h2 className='fw-bold'>{item.title5}</h2>
                                <h4 className='fw-lighter'>{item.data5}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className='mt-2 mt-md-3 p-2'>
                        {items.map((item) => (
                            <div>
                                <h2 className='fw-bold'>{item.title6}</h2>
                                <h4 className='fw-lighter'>{item.data6}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div >

            <div className='row d-flex justify-content-center align-items-center border-bottom my-5 mx-5'>
                <div className='col-md-6'>
                    <h1 className='display-4 text-left main-heading fw-bold'>All You Need.<br></br>
                        All In One Place.</h1>
                </div>
                <div className='col-md-6'>
                    <h3 className='text-right text-black mt-3 fw-lighter'>A human-first approach to martech that prioritizes a personal experience for each customer.</h3>
                </div>
            </div>
            <div className=''>
                <ul className='row'>
                    {products.map((product) => (
                        <div className='row border-bottom my-3 mx-5'>
                            <div className='text-center my-3 mb-4 fs-2'>{product.title}</div>
                            <div className='col-md-6 mb-4'>
                                <div className='col-md-6 fs-4 fw-semibold'>{product.ltitle}</div>
                                <div className='col-md-6 fst-italic fw-light'>{product.lbtitle}</div>
                            </div>
                            <div className='col-md-6'>
                                <div className='w-light'>{product.data}</div>
                            </div>
                            <div className='col-md-6'>
                                <div className='col-md-6 fw-semibold'>{product.ltitle2}</div>
                                <div className='col-md-6 fst-italic fw-light'>{product.lbtitle2}</div>
                            </div>
                            <div className='col-md-6 mb-5'>
                                <div className='w-light'>{product.data2}</div>
                            </div>
                        </div>
                    ))}
                    <div></div>
                </ul>
            </div>

            <div className='hero-container d-flex justify-content-center align-items-center border-bottom my-5 mx-5'>
                <div className='row col-md-6'>
                    <h1 className='fs-5 mx-5 text-left main-heading fw-light'>SUPERLEADZ</h1>
                    <h1 className='display-2 mx-5 text-left main-heading fw-light'>Built to Convert</h1>
                    <h1 className='fs-4 mx-5 text-left main-heading fw-light'>Verified, high-intent lead generation.</h1>
                    <h1 className='fs-4 mx-5 text-left main-heading fw-light'>Minimize marketing wastage. Boost revenue.</h1>
                    <div className="d-grid col-md-6 mx-5 gap-2">
                        <Button variant="outline-dark" size="lg">
                            Learn more about Superleadz
                        </Button>
                    </div>
                </div>
                <div className='row col-md-6'></div>

            </div>

            <div d-flex justify-content-center align-items-center border-bottom my-5 mx-5>
                <Carousel>
                    <Carousel.Item>
                        <ExampleCarouselImage text="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Second slide" />
                    </Carousel.Item>
                </Carousel>
            </div>


        </>
    )
}

export default Hero