import './globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import { Suspense } from 'react';
import Spinner from '../components/ui/spinner';
import TopLoader from '../components/ui/top-loader';
import Toast from '../components/ui/toast';
import GoogleAnalytics from '@/components/ui/google-analytics';
import { description, googleAnalyticsTrackingID, keywords, siteTitle } from '@/constants/meta-data';

export const metadata = {
  title: siteTitle,
description: description,
  keywords: keywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {googleAnalyticsTrackingID && (
          <GoogleAnalytics googleAnalyticsTrackingID={googleAnalyticsTrackingID} />
        )}

        <TopLoader />
        <Toast />
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </body>
    </html>
  );
}
