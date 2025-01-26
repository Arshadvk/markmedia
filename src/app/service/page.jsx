'use client'
import Card from "../ui/Card";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import PricingTableList from "@/app/ui/PricingTable/PricingTableList";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import Hero2 from "../ui/Hero/Hero2";

const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Instagram',
    links: '/',
  },
];

const heroData = [
  {
    title: 'Wedding',
    imageUrl: '/images/service/wedding.jpg',
    href: '/service/service-details',
  },
  {
    title: 'Fashion',
    imageUrl: '/images/service/fashion.jpg',
    href: '/service/service-details',
  },
  {
    title: 'Commercial',
    imageUrl: '/images/service/commercial.jpg',
    href: '/service/service-details',
  },
  {
    title: 'Landscape',
    imageUrl: '/images/service/landscape.jpg',
    href: '/service/service-details',
  },
];
export default function ServicesPage() {
  return (
    <>
      <Hero2 data={heroData} phoneNumber="+971 58 812 0002 " email="info@markmedia.com" />
      <Spacing lg='150' md='80'/>
      <TestimonialSlider/>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
