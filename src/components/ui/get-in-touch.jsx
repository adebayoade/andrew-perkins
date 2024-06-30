'use client';

import AOS from 'aos';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from './button';
import SocialMedia from './social-media';
import toast from 'react-hot-toast';
import api from '@/config/axios';
import { LoaderIcon } from 'lucide-react';

export default function GetInTouch() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
    AOS.refresh();
  }, []);

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    message: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await api.post(`/api/email/contact`, userData);
      const data = await res.data;
      toast.success('Request received successfully.');
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
      setUserData({
        firstName: '',
        lastName: '',
        message: '',
        email: '',
      });
    }
  };

  return (
    <div data-aos={'fade-up'} id="hire-me" className="pt-14 hire-me">
      <div className="container">
        <h2 className="text-center mb-10 heading">Get In Touch</h2>
        <div className="mt-14 grid grid-cols-1 gap-20 justify-between md:max-w-[900px] mx-auto">
          <div className="">
            <p className="text-gray-400">Please fill in your information below.</p>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 mt-5">
              <div className="flex flex-col xl:flex-row gap-5">
                <div className="basis-full">
                  <label>First name:</label>
                  <input
                    value={userData.firstName}
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="basis-full">
                  <label>Last name:</label>
                  <input
                    value={userData.lastName}
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Email:</label>
                <input
                  value={userData.email}
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Message:</label>
                <textarea
                  value={userData.message}
                  type="text"
                  placeholder="Enter message"
                  name="message"
                  onChange={handleChange}
                  required
                />
              </div>

              <Button disabled={isLoading} className="w-max" size="lg" type="submit">
                {isLoading && <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />}
                Submit
              </Button>
            </form>

            <div className="flex flex-col gap-5 mt-5">
              <p>
                The more details about your project you include in your message, the faster I can
                get back to you. You&apos;ll hear back from me within 1-2 business days.
              </p>

              <div className="flex items-center gap-2">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
