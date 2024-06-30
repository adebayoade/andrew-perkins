'use client';

import AOS from 'aos';
import { useEffect } from 'react';

export default function SuperPowers() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
    AOS.refresh();
  }, []);

  return (
    <div id="super-powers" className="pt-14">
      <div data-aos={'fade-up'} className="container">
        <h2 className="heading text-center">Services</h2>
        <div className="mt-14 grid grid-cols-1 xl:grid-cols-3 gap-10 justify-between">
          <div className="shadow-md bg-white px-10 pt-16 pb-20 rounded">
            <div className="flex flex-col gap-7 text-center">
              <h2 className="text-xl font-semibold">Data Analytics</h2>
              <p className="text-gray-400 text-md leading-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsum corporis
                blanditiis. Dicta quibusdam dolor vero neque reprehenderit suscipit velit?
              </p>
            </div>
          </div>

          <div className="shadow-md bg-white px-10 pt-16 pb-20 rounded">
            <div className="flex flex-col gap-7 text-center">
              <h2 className="text-xl font-semibold">Web Development</h2>
              <p className="text-gray-400 text-md leading-9">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero delectus
                voluptatem asperiores. Laborum recusandae autem quasi?
              </p>
            </div>
          </div>

          <div className="shadow-md bg-white px-10 pt-16 pb-20 rounded">
            <div className="flex flex-col gap-7 text-center">
              <h2 className="text-xl font-semibold">Consultancy</h2>
              <p className="text-gray-400 text-md leading-9">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque voluptatem nulla
                explicabo dolorum, ipsum perferendis aut ea pariatur, voluptate omnis error,
                provident iste similique amet?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
