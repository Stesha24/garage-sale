import React from 'react';
import './Portfolio.styles.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import slide_1 from './slide_1.jpg';
import slide_2 from './slide_2.jpg';
import slide_3 from './slide_3.jpg';
import slide_4 from './slide_4.jpg';
import slide_5 from './slide_5.jpg';
import arrow from './arrow.png';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const Portfolio = ({ breakpoint }) => (    
    <section className="portfolio">
        <div className="portfolio__title content">
            Наши работы
        </div>
        <CarouselProvider
            naturalSlideWidth={!breakpoint.sm ? 100 : 60}
            naturalSlideHeight={!breakpoint.sm ? 80 : 45}
            totalSlides={5}
            visibleSlides={!breakpoint.sm ? 3 : 1}
            infinite
        >
            <Slider>
                <Slide index={0}><Image src={slide_1} alt="" /></Slide>
                <Slide index={1}><Image src={slide_2} alt="" /></Slide>
                <Slide index={2}><Image src={slide_3} alt="" /></Slide>
                <Slide index={3}><Image src={slide_4} alt="" /></Slide>
                <Slide index={4}><Image src={slide_5} alt="" /></Slide>
            </Slider>
            <div className="portfolio__slider_buttons">
                <ButtonBack onClick="ym(57671344, 'reachGoal', 'BUTTON_BACK_CLICK'); return true;"><Image src={arrow} /></ButtonBack>
                <ButtonNext onClick="ym(57671344, 'reachGoal', 'BUTTON_NEXT_CLICK'); return true;"><Image src={arrow} /></ButtonNext>
            </div>
      </CarouselProvider>
    </section>
);