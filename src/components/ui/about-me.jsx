'use client';

import AOS from 'aos';
import { useEffect } from 'react';
import SocialMedia from './social-media';

export default function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
    AOS.refresh();
  }, []);

  return (
    <div id="about" className="pt-14">
      <div data-aos={'fade-up'} className="container">
        <h2 className="heading text-center">About Me</h2>
        <div className="mt-14 max-w-[1200px] mx-auto text-center text-md leading-9">
          <div className="flex flex-col gap-7">
            <p className="text-gray-500">
              I consider myself a versatile Data Analyst with experience interpreting and analyzing
              data. I have an excellent understanding and proficiency in platforms for practical
              data analyses, including SQL, Sheets, Excel, Tableau, R and Python. I also have strong
              communication, organizational, and analytical skills.
            </p>
            <p className="text-gray-500">
              I&apos;ve completed an extensive six-month job-ready Google Career Certificate
              training program. I&apos;ve demonstrated hands-on experience with data cleaning, data
              visualization, project management, and interpreting and communicating data analytics
              findings. Lastly, my confidence in transforming complex data into actionable and clear
              insights combined with a fluency in programming languages and a solid understanding of
              databases makes me a great candidate for many data analytical roles.
            </p>
            {/* <div className="flex items-center justify-center gap-2">
              <SocialMedia />
            </div> */}
          </div>

          {/* <div className="grid-item absolute right-0 top-0">
            <Image
              className="rounded-full shadow-xl"
              src={'/images/adebayo5.png'}
              alt="adebayo ade"
              width={400}
              height={300}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
