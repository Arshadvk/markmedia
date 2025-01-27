'use client'
import Hero7 from "@/app/ui/Hero/Hero7";
import Hero2 from "./ui/Hero/Hero2";

const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Instagram',
    links: 'https://www.instagram.com/markmedia.ae/#',
  },
];
const heroData = [
  {
    title: 'Wedding',
    imageUrl: '/images/wedding.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Fashion',
    imageUrl: '/images/fashion.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Commercial',
    imageUrl: '/images/commercial.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Landscape',
    imageUrl: '/images/landscape.jpeg',
    href: '/service/service-details',
  },
];

const showcaseData = [
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_6.jpg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_7.jpg',
    href: '/case-study/case-study-details',
  }, 
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_8.jpg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'black' ,
    imgUrl: '/images/slider/slider_1.jpg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'white' ,
    imgUrl: '/images/slider/slider_2.jpg',
    href: '/case-study/case-study-details',
  },
  {
    title: '',
    color : 'white' ,
    imgUrl: '/images/slider/slider_3.jpg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'white' ,
    imgUrl: '/images/slider/slider_4.jpg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    color : 'white' ,
    imgUrl: '/images/slider/slider_5.jpg',
    href: '/case-study/case-study-details',
  },
];

export default function Home() {

    return (
      <>
        
        <Hero7
          heroSocialLinks={heroSocialLinks}
          socialLinksHeading="Follow Us"
          showcaseData={showcaseData}
        />
      </>
    );
}
