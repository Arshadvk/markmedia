'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Portfolio from "@/app/ui/Portfolio";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import { useState } from "react";

const portfolioData = [
  {
    title: 'Space Property',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_1.jpg',
    type: 'p' ,
    category: 'portrait',
  },
  {
    title: 'Aravia',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_2.jpg',
    type: 'p' ,
    category: 'wedding',
  },
  {
    title: 'P C F',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_3.jpg',
    type: 'p' ,
    category: 'wedding',
  },
  {
    title: 'Max Office',
    subtitle: 'Live Link',
    type: 'l' ,
    src: '/images/portfolio/work_4.jpg' ,
    category: 'events',
  },
  {
    title: 'Maxhome property',
    subtitle: 'Live Link',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio/work_6.jpg' ,
    type: 'p' ,
    category: 'commercial',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio/work_7.jpg',
    type: 'p' ,
    category: 'fashion',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_5.jpg',
    type: 'l' ,
    category: 'events',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    type: 'p' ,
    src: '/images/portfolio/work_8.jpg',
    category: 'portrait',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_9.jpg',
    type: 'p' ,
    category: 'fashion',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_10.jpg',
    type: 'p' ,
    category: 'portrait',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_11.jpg',
    type: 'l' ,
    category: 'events',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_12.jpg',
    type: 'p' ,
    category: 'portrait',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_13.jpg',
    type: 'p' ,
    category: 'events',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_14.jpg',
    type: 'l' ,
    category: 'events',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_15.jpg',
    type: 'l' ,
    category: 'events',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_16.jpg',
    type: 'p' ,
    category: 'portrait',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_17.jpg',
    type: 'p' ,
    category: 'wedding',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_18.jpg',
    type: 'l' ,
    category: 'landscape',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_19.jpg',
    type: 'p' ,
    category: 'events',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_20.jpg',
    type: 'p' ,
    category: 'commercial',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_21.jpg',
    type: 'p' ,
    category: 'fashion',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_22.jpg',
    type: 'l' ,
    category: 'events',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_23.jpg',
    type: 'p' ,
    category: 'commercial',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_24.jpg',
    type: 'p' ,
    category: 'wedding',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_25.jpg',
    type: 'l' ,
    category: 'commercial',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_26.jpg',
    type: 'l' ,
    category: 'events',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    src: '/images/portfolio/work_27.jpg',
    type: 'p' ,
    category: 'portrait',
  },
];
const categoryMenu = [
  {
    title: 'Wedding',
    category: 'wedding',
  },
  {
    title: 'Portrait',
    category: 'portrait',
  },
  {
    title: 'Commercial',
    category: 'commercial',
  },
  {
    title: 'Fashion',
    category: 'fashion',
  },
  {
    title: 'Landscape',
    category: 'landscape',
  },
  {
    title: 'Events',
    category: 'events',
  },
]

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);

  return (
    <>
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                item.type === 'l' ? 'col-lg-8' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
      
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 9)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="info@markmedia"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
