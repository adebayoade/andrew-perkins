import Link from 'next/link';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitterSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function SocialMedia() {
  return (
    <>
      <Link
        className="hover:text-primary"
        href="https://www.linkedin.com/in/andrew-perkins-a60b2527/"
        target="_blank"
      >
        <FaLinkedin size={35} />
      </Link>
      <Link className="hover:text-primary" href="#" target="_blank">
        <FaGithubSquare size={35} />
      </Link>
      <Link
        className="hover:text-primary"
        href="https://twitter.com/AndrewPerkins"
        target="_blank"
      >
        <FaSquareXTwitter size={35} />
      </Link>
      <Link
        className="hover:text-primary"
        href="#"
        target="_blank"
      >
        <FaFacebookSquare size={35} />
      </Link>

      <Link
        className="hover:text-primary"
        href="#"
        target="_blank"
      >
        <FaInstagramSquare size={35} />
      </Link>
      <Link
        className="hover:text-primary"
        href="#"
        target="_blank"
      >
        <FaWhatsappSquare size={35} />
      </Link>
    </>
  );
}
