import Image from 'next/image';
import React from 'react';

export default function Logo() {
  return <Image height={80} alt="logo" width={200} src={'/images/logo.png'} />;
}
