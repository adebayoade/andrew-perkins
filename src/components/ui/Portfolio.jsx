'use client';

import AOS from 'aos';
import { useEffect } from 'react';
import { Share } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { portfolio } from '@/constants/portfolio';

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
    AOS.refresh();
  }, []);

  return (
    <div id="portfolio" className="pt-14">
      <div data-aos={'fade-up'} className="pt-14 container">
        <h2 className="heading text-center">Portfolio</h2>
        <div className="mt-14 grid grid-cols-1 xl:grid-cols-3 gap-10">
          {portfolio.map((card, index) => (
            <div key={index} className="shadow bg-white rounded">
              <div className="relative overflow-hidden">
                {card.link ? (
                  <Link href={card.link}>
                    <Image
                      alt="image"
                      className="h-[200px] zoom mx-auto"
                      width={500}
                      height={400}
                      src={
                        card?.image ? `/images/${card?.image}` : `/images/project-placeholder.jpg`
                      }
                    />
                  </Link>
                ) : (
                  <Image
                    alt="image"
                    className="h-[200px] zoom mx-auto"
                    width={500}
                    height={400}
                    src={card?.image ? `/images/${card?.image}` : `/images/project-placeholder.jpg`}
                    // src={`/images/${card.image}` || `/images/project-placeholder.jpg`}
                  />
                )}
                {card.link && (
                  <Link
                    href={card.link}
                    className="share text-white bg-destructive h-[50px] w-[50px] hover:bg-destructive/90 flex flex-col items-center justify-center rounded-full absolute right-0 bottom-0 mr-5 z-10"
                  >
                    <Share />
                  </Link>
                )}
              </div>
              <div className="flex flex-col gap-5 p-5">
                <h2 className="text-xl font-medium">{card.title}</h2>
                <p className="text-gray-400">{card.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
