"use client";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import Hero from "@/app/ui/Hero";
import LogoList from "@/app/ui/LogoList";
import MovingText from "@/app/ui/MovingText";
import SectionHeading from "@/app/ui/SectionHeading";
import PortfolioSlider from "@/app/ui/Slider/PortfolioSlider";
import PostSlider from "@/app/ui/Slider/PostSlider";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import TimelineSlider from "@/app/ui/Slider/TimelineSlider";
import Spacing from "@/app/ui/Spacing";
import VideoModal from "@/app/ui/VideoModal";
import Card from "./ui/Card";
import { useState } from "react";
import Portfolio from "./ui/Portfolio";
import { Icon } from "@iconify/react";

// Hero Social Links
const heroSocialLinks = [
  {
    name: "Behance",
    links: "/",
  },
  {
    name: "Twitter",
    links: "/",
  },
];
// FunFact Data
const funfaceData = [
  {
    title: "Global Happy Clients",
    factNumber: "40K",
  },
  {
    title: "Project Completed",
    factNumber: "50K",
  },
  {
    title: "Team Members",
    factNumber: "245",
  },
  {
    title: "Digital products",
    factNumber: "550",
  },
];

const portfolioData = [
  {
    title: "Space Property",
    subtitle: "Live Link",
    href: "https://spaceproperties.ae/",
    src: "/images/work/space.jpg",
    category: "web_development",
  },
  {
    title: "Aravia",
    subtitle: "Live Link",
    href: "https://aravia.ae/",
    src: "/images/work/saloon.jpg",
    category: "web_development",
  },
  {
    title: "P C F",
    subtitle: "Live Link",
    href: "https://pcfgcc.com/",
    src: "/images/work/pdp.jpg",
    category: "web_development",
  },
  {
    title: "Max Office",
    subtitle: "Live Link",
    href: "https://www.maxoffice.ae/",
    src: "/images/work/maxoffice.jpg",
    category: "web_development",
  },
  {
    title: "Maxhome property",
    subtitle: "Live Link",
    href: "/portfolio/portfolio-details",
    src: "/images/work/maxhome.jpg",
    category: "web_development",
  },
  {
    title: "Colorful Art Work",
    subtitle: "Live Link",
    href: "/portfolio/portfolio-details",
    src: "/images/work/phone.jpg",
    category: "mobile_apps",
  },
  {
    title: "Colorful Art Work",
    subtitle: "Live Link",
    href: "/portfolio/portfolio-details",
    src: "/images/work/flower shop.jpg",
    category: "web_development",
  },
  {
    title: "Colorful Art Work",
    subtitle: "Live Link",
    href: "/portfolio/portfolio-details",
    src: "/images/work/amt.jpg",
    category: "web_development",
  },
  {
    title: "Colorful Art Work",
    subtitle: "Live Link",
    href: "/portfolio/portfolio-details",
    src: "/images/work/caffe.jpg",
    category: "web_development",
  },
];
const categoryMenu = [
  {
    title: "Web Development",
    category: "web_development",
  },
  {
    title: "Mobile Apps",
    category: "mobile_apps",
  },
];

const educationData = [
  {
    title: "Bachelor of Computer Applications",
    subTitle: "Rabindranath Tagore University | 2021-2024",
  },
];

const experienceData = [
  {
    title: "Web Developer",
    subTitle: "Flyseosys | 2022-2024",
  },
  {
    title: "Software Developer",
    subTitle: "Maxhome Property | 2022-2024",
  },
];
export default function Home() {
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(7);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Creativity In <br/>Our Blood Line"
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX design"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="React.js Development"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Technology"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === "all" ? "active" : ""}>
                <span onClick={() => setActive("all")}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? "active" : ""}
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
                index === 3 || index === 6 ? "col-lg-8" : "col-lg-4"
              } ${
                active === "all"
                  ? ""
                  : !(active === item.category)
                  ? "d-none"
                  : ""
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
            ""
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
      <Spacing lg="90" md="45" />

      {/* Start Resume Section */}
      <section
        className="cs-fixed_bg"
        style={{ backgroundImage: `url(/images/resume_bg.jpeg)` }}
      >
        <div className="cs-height_145 cs-height_lg_75" />
        <div className="container">
          <SectionHeading
            title="Education & experience"
            subtitle=""
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <div className="cs-list_2_group">
            <ul className="cs-list cs-style_2 cs-mp0">
              {educationData.map((item, index) => (
                <li key={index}>
                  <svg
                    width={25}
                    height={19}
                    viewBox="0 0 25 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cs-accent_color"
                  >
                    <g clipPath="url(#clip0_1848_11192)">
                      <path
                        d="M0 6.13134C0.169315 5.45889 0.625163 5.0963 1.2373 4.81281C4.43475 3.35584 7.62568 1.8725 10.8166 0.395744C11.9302 -0.118483 13.0503 -0.131668 14.1638 0.382558C17.446 1.89887 20.7281 3.41517 24.0036 4.93148C24.6353 5.22156 24.9935 5.70282 25 6.40823C25 7.11365 24.6418 7.6015 24.0167 7.89158C20.7281 9.41448 17.4394 10.9374 14.1508 12.4537C13.0373 12.9679 11.9172 12.9481 10.8036 12.4273C7.59312 10.9374 4.38265 9.44085 1.15916 7.97069C0.566554 7.70039 0.156291 7.31802 0 6.67853C0 6.49394 0 6.31594 0 6.13134Z"
                        fill="currentColor"
                      />
                      <path
                        d="M4.70088 11.3525C4.86368 11.4251 5.00044 11.4844 5.13719 11.5437C6.77824 12.3019 8.4193 13.0534 10.0603 13.8248C11.6949 14.5961 13.3229 14.5895 14.9575 13.8248C16.6767 13.0139 18.4024 12.2294 20.1216 11.4317C20.1737 11.4053 20.2258 11.3921 20.3039 11.3591C20.3104 11.4448 20.3234 11.5174 20.3234 11.5833C20.3234 12.6315 20.3365 13.6732 20.3234 14.7214C20.3039 16.0992 19.6787 17.1211 18.4414 17.6749C14.4951 19.4483 10.5227 19.4417 6.57637 17.6683C5.34558 17.1211 4.72693 16.0992 4.70088 14.7346C4.68785 13.6863 4.70088 12.6447 4.70088 11.5965C4.68785 11.5239 4.69437 11.4514 4.70088 11.3525Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.4438 9.88916C23.4438 10.3045 23.4438 10.6869 23.4438 11.0627C23.4438 12.3812 23.4438 13.6931 23.4438 15.0116C23.4438 15.4336 23.1507 15.7632 22.76 15.8159C22.3823 15.8621 22.0111 15.6116 21.9134 15.2292C21.8874 15.1369 21.8874 15.0314 21.8874 14.9391C21.8874 13.5744 21.8874 12.2098 21.8809 10.8385C21.8809 10.6737 21.9199 10.5946 22.0762 10.5286C22.519 10.3309 22.9554 10.1199 23.4438 9.88916Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1848_11192">
                        <rect width={25} height={19} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>{item.title}</h3>
                  <p className="mb-0">{item.subTitle}</p>
                </li>
              ))}
            </ul>
            <ul className="cs-list cs-style_2 cs-mp0">
              {experienceData.map((item, index) => (
                <li key={index}>
                  <svg
                    width={22}
                    height={19}
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cs-accent_color"
                  >
                    <g clipPath="url(#clip0_1848_1169)">
                      <path
                        d="M0 16.7139C0 14.1904 0 11.667 0 9.14355C0.0229107 9.14949 0.0400937 9.14949 0.0630044 9.15543C3.45952 10.3311 6.85603 11.5007 10.2525 12.6764C10.7451 12.8486 11.2262 12.8545 11.7246 12.6882C15.0695 11.5304 18.4202 10.3786 21.7709 9.22074C21.8396 9.19699 21.9141 9.17324 21.9885 9.14949C21.9943 9.19699 22 9.22074 22 9.24449C22 11.6551 22.0057 14.0657 21.9885 16.4764C21.9885 16.8089 21.9026 17.1592 21.7652 17.462C21.284 18.5129 20.4593 18.9998 19.3366 18.9998C13.7865 18.9939 8.24212 18.9998 2.69201 18.9998C2.59464 18.9998 2.49154 18.9998 2.39417 18.9939C1.33455 18.9523 0.378027 18.1626 0.0973705 17.0998C0.0630044 16.9692 0.034366 16.8386 0 16.7139Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0 5.13606C0.0400937 4.98762 0.0687321 4.83324 0.114554 4.68481C0.446759 3.58043 1.39755 2.85606 2.53736 2.85012C4.03801 2.84418 5.54439 2.85012 7.04504 2.85012C7.13096 2.85012 7.21114 2.85012 7.33142 2.85012C7.33142 2.50574 7.3257 2.17918 7.33142 1.85856C7.35433 0.956057 7.93856 0.231682 8.79198 0.0416819C8.91799 0.0119944 9.04973 0.00605686 9.17574 0.00605686C10.3843 0.00605686 11.5985 0.000119357 12.8071 0.00605686C13.7235 0.0119944 14.4337 0.617619 14.617 1.52606C14.6514 1.68637 14.6514 1.85262 14.6514 2.01293C14.6571 2.28012 14.6514 2.54731 14.6514 2.85012C14.7488 2.85012 14.829 2.85012 14.9149 2.85012C16.3983 2.85012 17.8761 2.85012 19.3595 2.85012C20.9117 2.85012 21.9885 3.96637 21.9885 5.58137C21.9885 6.19887 21.9828 6.81637 21.9943 7.42793C21.9943 7.57637 21.9599 7.64762 21.8167 7.69512C18.3114 8.90043 14.806 10.1176 11.295 11.317C11.1174 11.3764 10.8883 11.3823 10.7165 11.3229C7.16532 10.1117 3.60844 8.88262 0.0572768 7.65949C0.0343661 7.65356 0.017183 7.64168 0 7.62981C0 6.79856 0 5.96731 0 5.13606ZM9.17001 2.83824C10.4015 2.83824 11.6043 2.83824 12.8185 2.83824C12.8185 2.52356 12.8185 2.22074 12.8185 1.91793C11.5928 1.91793 10.3843 1.91793 9.17001 1.91793C9.17001 2.23262 9.17001 2.52356 9.17001 2.83824Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1848_1169">
                        <rect width={22} height={19} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>{item.title}</h3>
                  <p className="mb-0">{item.subTitle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cs-height_150 cs-height_lg_80" />
      </section>
      {/* End Resume Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
