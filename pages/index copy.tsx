import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import CustomCarousel from "./components/Carousel";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Parallax, useParallax } from "react-scroll-parallax"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

const Home: NextPage = () => {




  const parallax = useParallax<HTMLDivElement>({
    easing: 'easeOutCirc',
    speed: 2,
    translateY: [40, 0],
  });

  const textHeading = useParallax<HTMLDivElement>({
    easing: 'easeOutCirc',
    scale: [2, 1],
    translateY: [2, 0],
    opacity: [0, 1],
  });

  const imageFirst = useParallax<HTMLDivElement>({
    easing: 'ease',
    speed: 2,
    translateY: [50, 0],
  });

  const culture = useParallax<HTMLDivElement>({
    easing: 'easeOutCirc',
    speed: 2,
    translateY: [30, 0],
  });

  const imageMain = useParallax<HTMLDivElement>({
    easing: 'easeOutCirc',
    speed: 2,
    translateY: [50, -10],
  });
  const imageSecond = useParallax<HTMLDivElement>({
    easing: 'easeOutCirc',
    speed: 20,
    translateY: [40, 0],
  });

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const mainTextRef = useRef(null)
  const image1 = useRef(null)
  const image2 = useRef(null)
  const image3 = useRef(null)

  const image4 = useRef(null)
  const foodWrapperRef = useRef(null)
  const sliderRef = useRef(null)


  useEffect(() => {
    const element = ref.current;

    gsap.set('.banner', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
    gsap.set('.scrollDist', {width:'100%', height:'200%'})
    gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
        .fromTo('.sky', {y:0},{y:-200}, 0)
        .fromTo('.cloud1', {y:100},{y:-800}, 0)
        .fromTo('.cloud2', {y:-150},{y:-500}, 0)
        .fromTo('.cloud3', {y:-50},{y:-650}, 0)
        .fromTo('.mountBg', {y:-10},{y:-100}, 0)
        .fromTo('.mountMg', {y:-30},{y:-250}, 0)
        .fromTo('.mountFg', {y:-50},{y:-600}, 0)


    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: mainTextRef.current,
        start: "top bottom",
        end: "top top"
      }
    })

      .to(mainTextRef.current, { opacity: 0, y: 300 })
      .to(mainTextRef.current, { opacity: 1, y: 0, duration: 0.8 },
        0.5)

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: foodWrapperRef.current,
        start: "top center",
        end: " center center",
        markers: true,

        pin: true,
        scrub: true,
       
        pinSpacing: true
      }
    })
      .to(image1.current, { opacity: 1, }, 0)
      .to(image2.current, { opacity: 1, }, 1)
      .to(image3.current, { opacity: 1, }, 4)
      .to(image4.current, { opacity: 1, }, 3)


  });

  const images = ["/lakhe.png", "/deuda.png", "/mask.png"];


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link
          href="http://fonts.cdnfonts.com/css/sansation"
          rel="stylesheet"
        ></link>
      </Head>

      <main ref={ref} className={styles.main}>

      <div className="scrollDist"></div>
<div className={`${styles.banner} banner section`}>
  <svg width="100%" height="100vh" xmlns="http://www.w3.org/2000/svg">
    <mask id="m">
      <g className="cloud1">
        <rect fill="#fff" width="100%" height="800" y="799" />
        <image href="https://assets.codepen.io/721952/cloud1Mask.jpg" width="100%" height="800"/>
      </g>
    </mask>
    
    <image className="sky" href="https://assets.codepen.io/721952/sky.jpg"  width="100%" height="590" />
    <image className="mountBg" href="https://assets.codepen.io/721952/mountBg.png" width="100%" height="800"/>    
    <image className="mountMg" href="https://assets.codepen.io/721952/mountMg.png" width="100%" height="800"/>    
    <image className="cloud2" href="https://assets.codepen.io/721952/cloud2.png" width="100%" height="800"/>    
    <image className="mountFg" href="https://assets.codepen.io/721952/mountFg.png" width="100%" height="800"/>
    <image className="cloud1" href="https://assets.codepen.io/721952/cloud1.png" width="100%" height="800"/>
    <image className="cloud3" href="https://assets.codepen.io/721952/cloud3.png" width="100%" height="800"/>
    <text fill="#fff" x="350" y="200">EXPLORE</text>
    <polyline className="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
    
    <g mask="url(#m)">
      <rect fill="#fff" width="100%" height="100%" />      
      <text x="350" y="200" fill="#162a43">FURTHER</text>
    </g>
    
    <rect id="arrowBtn" width="100" height="100" opacity="0" x="550" y="220" style={{"cursor":"pointer"}}/>
  </svg>
</div>

        {/* <div className={`${styles.banner} banner section`}>
          <div style={{ opacity: 0 }} ref={mainTextRef} className={styles.banner_text}>
            <h1 className={styles.title}>NEPAL</h1>
            <p className={styles.description}>
              Experience you will always remember
            </p>
          </div>
          <div className="mx-auto down p-3" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>          </div>
        </div> */}
        <div className={`${styles.block_why_nepal} container-fluid section`}>
          <p>WHAT MAKE NEPAL THE BEST COUNTRY TO TRAVEL</p>
          <h2 className={styles.section_heading}>Why Nepal</h2>
          <div className="row mt-5 w-80">
            <div className="col pt-4 mt-5" ref={culture.ref}>
              <ul className={styles.block_why_nepal_list}>
                <li className={styles.block_why_nepal_item}>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="p-4">
                      <img src="/mountain.svg"></img>
                    </div>
                    <h3>Spectacular Places</h3>
                    <p>
                      Nepalis a country of contrasts. Spectacular natural riches
                      combine with a vibrant culture and sense of history.{" "}
                    </p>
                  </div>
                </li>
                <li className={`${styles.block_why_nepal_item} `}>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="p-4 ">
                      <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={"3px"} viewBox="0 0 512 512" fill="#ffffff" width={44} height={44}><path d="M508.405 234.268a10.206 10.206 0 0 0-8.252-2.293l-5.509.903a931.152 931.152 0 0 0-91.383 19.724C400.5 173.755 335.509 110.458 256 110.458c-79.511 0-144.505 63.3-147.26 142.151a930.33 930.33 0 0 0-91.383-19.731l-5.509-.903A10.198 10.198 0 0 0 0 242.04v242.755a10.2 10.2 0 0 0 10.199 10.21h491.602c5.632 0 10.199-4.566 10.199-10.199V242.04a10.2 10.2 0 0 0-3.595-7.772zM256 130.857c70.007 0 126.964 56.955 126.964 126.964 0 .164-.005.331-.006.496a929.83 929.83 0 0 0-126.961 47.565 930.622 930.622 0 0 0-126.957-47.559c0-.165-.004-.336-.004-.502 0-70.009 56.957-126.964 126.964-126.964zM20.398 254.069a910.184 910.184 0 0 1 211.475 63.342A929.719 929.719 0 0 0 20.398 461.469v-207.4zm471.204 220.539H36.272C164.445 359.225 321.382 283.17 491.601 254.07v220.538zM253.573 16.994c-5.632 0-10.199 4.566-10.199 10.199v42.484c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199V27.193c0-5.633-4.567-10.199-10.199-10.199zM154.785 100.827l-24.972-34.37c-3.312-4.558-9.69-5.567-14.246-2.256-4.557 3.311-5.567 9.689-2.256 14.246l24.972 34.37a10.185 10.185 0 0 0 8.259 4.205c2.079 0 4.178-.633 5.987-1.949 4.557-3.31 5.567-9.689 2.256-14.246z" /><path d="M84.923 190.089 44.519 176.96c-5.356-1.739-11.111 1.19-12.852 6.548-1.74 5.359 1.191 11.113 6.549 12.853L78.62 209.49c1.046.34 2.108.502 3.154.502 4.299 0 8.298-2.741 9.698-7.051 1.74-5.358-1.192-11.111-6.549-12.852zM480.511 176.583c-1.74-5.357-7.494-8.29-12.852-6.548l-40.404 13.128c-5.358 1.741-8.289 7.495-6.549 12.852 1.4 4.31 5.398 7.05 9.698 7.05a10.21 10.21 0 0 0 3.154-.502l40.404-13.128c5.358-1.741 8.289-7.495 6.549-12.852zM392.968 59.919c-4.558-3.311-10.937-2.301-14.246 2.256l-24.971 34.37c-3.312 4.558-2.301 10.936 2.256 14.247a10.145 10.145 0 0 0 5.987 1.948c3.154 0 6.264-1.458 8.259-4.205l24.971-34.37c3.312-4.556 2.301-10.935-2.256-14.246zM314.135 439.586h-11.219c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h11.219c5.632 0 10.199-4.566 10.199-10.199.001-5.633-4.567-10.199-10.199-10.199zM466.784 439.586H354.932c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h111.852c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.199-10.199z" /></svg>
                    </div>
                    <h3>Spectacular Places</h3>
                    <p>
                      Nepalis a country of contrasts. Spectacular natural riches
                      combine with a vibrant culture and sense of history.{" "}
                    </p>
                  </div>
                </li>
                <li className={styles.block_why_nepal_item}>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="p-4">
                      <img src="/mountain.svg"></img>
                    </div>
                    <h3>Spectacular Places</h3>
                    <p>
                      Nepalis a country of contrasts. Spectacular natural riches
                      combine with a vibrant culture and sense of history.{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col px-5">
              <div className="position-relative d-block w-100 h-100">
                <div ref={imageMain.ref} className={styles.why_name_image_second}>
                  <img
                    src={"/temple.jpg"}
                    style={{ width: "100%" }}
                  ></img>
                </div>
                <div className={styles.why_name_image_first}    >
                  <div ref={imageFirst.ref} >
                    {/* <div style={{position:"absolute",top:'0px',left:'0',width:"100%",height:"100%",objectFit:"cover"}}> */}

                    <div style={{ position: "relative" }} ref={imageSecond.ref}
                    >
                      <img
                        src={"/mane.jpg"}
                        style={{ width: "100%" }}
                      ></img>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mt-5 pt-4">
              <div className="d-flex flex-column ">
                <h3>Best country to travel</h3>
                <p>
                  Beautiful Nepal is a land of friendly and engaging people,
                  where deities mingle with mortals and magnificent temples,
                  monasteries and historical monuments can be found at almost
                  every turn. This is the home of Sagarmatha “Goddess Mother of
                  the World”, the iconic Mount Everest, and her snow-capped
                  counterparts making up the weather-beaten Himalayas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.block_culture} section container-fluid  p-0 m-0`}>
          {/* create a div that loops through these threee image lakhe.png,deuda.png,mask.png. SHow the image on top of each other */}





          <div className={styles.block_culture_prayer_flag}></div>
          <div className={`${styles.block_culture_content} container`}>
            <div className="row justify-content-center h-100 align-items-center ">
              <div className="col-5 mx-auto">


                <div id="cf4a">
                  {images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      className="mx-auto d-block fade"
                      width={300}
                    />
                  ))}
                </div>
              </div>
              <div className="col-7 center  p-5  h-100  m-0 justify-content-center d-flex flex-column" >
                <div className={`${styles.section_heading} `}>
                  {" "}
                  Experience the Culture
                </div>
                <div className="mt-2">

                  <h1 className={styles.sub_section_heading}>
                    LIVING HERITAGE
                  </h1>
                  <p className={styles.section_text}>
                    Geographically diverse landscapes from Mukhiyapatti
                    Musharniya 59 m (194 ft) to Mount Everest 8,848 m (29,029
                    ft), hospitable, hospitable, and ever-engaging people,
                    richness in culture and ethnicity, centuries of antique
                    monuments, arts, and architecture add to the beauty of this
                    nation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={foodWrapperRef} className={`${styles.block_food} container `}>
          <div className="d-flex align-items-center flex-column">
            <h2 className={`${styles.section_heading}`}>Experience Food</h2>
          </div>
          <div className="row mt-5">
            <div className="col-7 align-items-center">
              <div className={styles.block_food_image_wrapper}>
                <img src="/food-main.png" className={styles.block_food_image}></img>
                <img src="/food-1.png" ref={image1} className={styles.block_food_image}></img>
                <img src="/food-2.png" ref={image2} className={styles.block_food_image}></img>
                <img src="/food-3.png" ref={image3} className={styles.block_food_image}></img>
                <img src="/food-4.png" ref={image4} className={styles.block_food_image}></img>
              </div>
            </div>
            <div className={`col-5 p-5 ${styles.block_food_text}`}>
              <h1 className={styles.sub_section_heading}>
                AUTHENTIC FOOD
              </h1>
              <p>Nepali food has been influenced by Indian and Tibetan styles of cooking. Authentic Nepali taste is found in Newari and Thakai cuisines. Most Nepalis do not use cutlery but eat with their right hand.The regular Nepali meal is dal (lentil soup), bhat (boiled rice) and tarkari (curried vegetables), often accompanied by achar (pickle). </p>
            </div>
          </div>

        </div>
        <div className={`${styles.block_visit} container `}>
          <div className="row gx-5">
            <div className="col">
              <h2 className={styles.section_heading}>
                Places you have never seen before.
              </h2>
              <p>
                Nepal has mixture of people from different races. As a result,
                there are plenty of heritages and architecture you can see
                through out the county.
              </p>
            </div>
            <div ref={sliderRef} className="col-9">
              <CustomCarousel></CustomCarousel>
            </div>
          </div>

          {/* <div className={styles.block_visit_slider_wrapper}>
                <div className={styles.block_visit_slider}>
                </div>

                <div className={styles.block_visit_slider}>
                </div>
                <div className={styles.block_visit_slider}>
                </div>
                <div className={styles.block_visit_slider}>
                </div>
                <div className={styles.block_visit_slider}>
                </div>
              </div>

            </div> */}
        </div>

        <div className={styles.block_image}>
          <div className={styles.block_image_content}>
            <h2 ref={textHeading.ref} className={styles.section_heading} >Experience to Remember</h2>
            <p>
              hello hello there
            </p>
          </div>
          <div className="block_image_background">
            <img
              src="/footer-clouds.png"
              className={styles.block_image_cloud}
              style={{ width: "100%", objectFit: "contain" }}
            ></img>

            <div ref={parallax.ref} className={styles.block_image_bg}>

              <img
                src="/bg-makalu.png"
                style={{ width: "100%", objectFit: "contain" }}
              ></img>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;