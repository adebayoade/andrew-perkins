'use client';

import AOS from 'aos';
import { useEffect } from 'react';
import { QuoteIcon, TextQuoteIcon } from 'lucide-react';
import React from 'react';
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { testimonials } from '@/constants/testimonials';

// Settings for the slider
const settings = {
  dots: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 11000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  arrows: false,
};

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div data-aos={'fade-up'} id="testimonials" className="pt-14 testimonials">
      <div className="container max-w-[1000px] mx-auto">
        <h2 className="text-center mb-10 heading">Testimonials</h2>
        <div className="mt-14">
          <Slider {...settings}>
            {testimonials.map((card, index) => (
              <div key={index}>
                <div className="w-full flex flex-col items-center gap-7 mb-5 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className=""></div>
                    <QuoteIcon style={{ transform: 'rotate(180deg)' }} />
                    <h4 className="text-xl font-medium leading-9">{card.text}</h4>
                    <QuoteIcon />
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-lg">{card.name}</p>
                    {card.company && <p className="text-gray-400 text-md">{card.company}</p>}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
