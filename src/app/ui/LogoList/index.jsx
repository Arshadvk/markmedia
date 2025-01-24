import React from 'react';
import Div from '../Div';

const partnerLogos = [
  {
    src: '/images/logo/react.svg',
    alt: 'React',
  },
  {
    src: '/images/logo/laravel.svg',
    alt: 'Laravel',
  },
  {
    src: '/images/logo/tailwindcss.svg',
    alt: 'Tailwind',
  },
  {
    src: '/images/logo/python.svg',
    alt: 'Python',
  },
  {
    src: '/images/logo/next-js.svg',
    alt: 'Next Js',
  },
  
];
const partnerLogos_2 = [

  {
    src: '/images/logo/html.svg',
    alt: 'HTML',
  },
  {
    src: '/images/logo/nodejs.svg',
    alt: 'Node js',
  },
  {
    src: '/images/logo/mongodb.svg',
    alt: 'Mongo DB',
  },
  {
    src: '/images/logo/mysql.svg',
    alt: 'My Sql',
  },
  {
    src: '/images/logo/bootstrap.svg',
    alt: 'Bootstrap',
  },
];

const partnerLogos_3 = [

  {
    src: '/images/logo/github.svg',
    alt: 'github',
  },
  {
    src: '/images/logo/aws.svg',
    alt: 'aws',
  },
  {
    src: '/images/logo/sass.svg',
    alt: 'sass',
  },
  {
    src: '/images/logo/typescript.svg',
    alt: 'Typescript',
  },
  {
    src: '/images/logo/cpanel.svg',
    alt: 'cpanel',
  },
];
export default function LogoList() {
  return (
    <>
    <h3 className='text-center'>My Skills</h3>
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
          <p className='text-center pt-2'>{partnerLogo.alt}</p>
        </div>
      ))}
    </Div>
    <Div className="cs-partner_logo_wrap">
      {partnerLogos_2.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
          <p className='text-center pt-2'>{partnerLogo.alt}</p>
        </div>
      ))}
    </Div>

    <Div className="cs-partner_logo_wrap">
      {partnerLogos_3.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
          <p className='text-center pt-2'>{partnerLogo.alt}</p>
        </div>
      ))}
    </Div>
      </>
  );
}