'use client';

import AOS from 'aos';
import { useEffect } from 'react';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import { Button } from './button';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="hero bg-[#292929] overflow-hidden xl:h-[750px]">
      <div className="container h-full relative pt-5">
        <Navbar />
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-between gap-20 xl:gap-0">
          <div className="mt-[50px] flex flex-col xl:items-start gap-10 text-center xl:text-start">
            <h2 data-aos="fade-up" className="text-white hero-heading">
              <span className="block pt-5">Meet Andrew Perkins</span>
            </h2>

            <p data-aos={'fade-right'} className="text-gray-300 text-xl leading-9">
              A professional Data Analyst with past experience working as an assistant editor at
              Tuts+ and I am very passionate about the Web, PHP, Ruby, Rails, JavaScript, and web
              frameworks in general.
            </p>

            <Link data-aos={'fade-right'} href={'/#hire-me'}>
              <Button size="lg">Hire Me</Button>
            </Link>
          </div>

          <Image
            data-aos="flip-left"
            className="mx-auto xl:mx-0 xl:absolute right-0 top-0 xl:mt-[85px]"
            src={'/images/professional.png'}
            alt="adebayo ade"
            width={650}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
