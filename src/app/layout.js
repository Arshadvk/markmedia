'use client';
import Header from '@/app/ui/Header';
import CustomCursor from '@/app/ui/CustomCursor';
import Footer from '@/app/ui/Footer';
import 'swiper/css';
import 'swiper/css/pagination';
import './scss/index.scss';
import { Poppins, Open_Sans } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--primary-font',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--secondary-font',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO Meta Tags */}
        <meta name="author" content="Mark Media" />
        <meta name="description" content="Mark Media - GCC’s leading photography agency specializing in commercial, event, and brand photography. Capture your vision with expert photographers." />
        <meta name="keywords" content="photography agency, commercial photography, event photography, brand photography, GCC photography, professional photographers, creative agency" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:title" content="Mark Media - GCC’s Top Photography Agency" />
        <meta property="og:description" content="We provide high-end photography services for brands, businesses, and events across the GCC. Let’s bring your vision to life!" />
        <meta property="og:image" content="https://markmedia.vercel.app/images/slider/slider_18.webp" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="business.business" />
        <meta property="og:site_name" content="Mark Media" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mark Media - GCC’s Leading Photography Agency" />
        <meta name="twitter:description" content="Expert photography services for businesses, brands, and events across the GCC. Capture your story with Mark Media." />
        <meta name="twitter:image" content="https://markmedia.vercel.app/images/slider/slider_18.webp" />
        <meta name="twitter:site" content="@yourtwitterhandle" />

        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" sizes="any" />

        <title>Mark Media - GCC Photography Agency</title>
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
