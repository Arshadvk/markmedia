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
    href: 'https://spaceproperties.ae/',
    src: '/images/work/space.jpg',
    category: 'web_development',
  },
  {
    title: 'Aravia',
    subtitle: 'Live Link',
    href: 'https://aravia.ae/',
    src: '/images/work/saloon.jpg',
    category: 'web_development',
  },
  {
    title: 'P C F',
    subtitle: 'Live Link',
    href: 'https://pcfgcc.com/',
    src: '/images/work/pdp.jpg',
    category: 'web_development',
  },
  {
    title: 'Max Office',
    subtitle: 'Live Link',
    href: 'https://www.maxoffice.ae/',
    src: '/images/work/maxoffice.jpg',
    category: 'web_development',
  },
  {
    title: 'Maxhome property',
    subtitle: 'Live Link',
    href: '/portfolio/portfolio-details',
    src: '/images/work/maxhome.jpg',
    category: 'web_development',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    href: '/portfolio/portfolio-details',
    src: '/images/work/phone.jpg',
    category: 'mobile_apps',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    href: '/portfolio/portfolio-details',
    src: '/images/work/flower shop.jpg',
    category: 'web_development',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    href: '/portfolio/portfolio-details',
    src: '/images/work/amt.jpg',
    category: 'web_development',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'Live Link',
    href: '/portfolio/portfolio-details',
    src: '/images/work/caffe.jpg',
    category: 'web_development',
  },
];
const categoryMenu = [
  {
    title: 'Web Development',
    category: 'web_development',
  },
  {
    title: 'Mobile Apps',
    category: 'mobile_apps',
  },]

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
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
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
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
                onClick={() => setItemShow(itemShow + 3)}
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
        title="arshadvk7560@gmail.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
