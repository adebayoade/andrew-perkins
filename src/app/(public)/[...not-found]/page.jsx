import { notFound } from 'next/navigation';

export const metadata = {
  title: `404 | ${process.env.NEXT_PUBLIC_SITE_TITLE}`,
};

export default function NotFoundCatchAll() {
  notFound();
}
