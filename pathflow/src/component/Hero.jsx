import React, { useRef } from "react";
import Section from "./Section";
import { curve, heroBackground, robot, airport, helping } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  const colorb = "#252134";
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]  bg-[url(${helping})]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className={`container relative `} ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            PathFlow en Costa Rica &nbsp; &nbsp;Impulsa&nbsp;tu futuro con {``}
            <span className="inline-block relative">
              Pathflow{" "}
              <img
                className="absolute top-full left-0 w-full xl:-mt-2"
                src={curve}
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8 ">
            Transformando la Experiencia de Migración en Costa Rica con
            Tecnología de Punta
          </p>
          <Button href="/pricing" colorb>
            Registrate!
          </Button>
        </div>
        <div className="relative max-w-full h-auto mx-auto md:max-w-5xl xl:mb-24 lg:pt-32">
          <div className="relative z-1 p-0.5 rounded-2xl  ">
            <div className="relative bg-[#c5d1eb] rounded-[1rem]">
              <div className="aspect-[33/40] bg-white rounded-b-[0.9rem] rounded-t-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/200]">
                <div className="px-24">
                  <h1 className="text-black text-3xl pl-3 pt-4 font-bold">
                    ¿Qué pasa con la migración en Costa Rica?
                  </h1>
                  <p className="text-black text-lg pl-3 pt-4">
                    En el 2024, Costa Rica se encuentra en una encrucijada
                    crucial para el desarrollo digital y la migración global. En
                    Pathflow, estamos a la vanguardia de este cambio, ofreciendo
                    soluciones innovadoras para simplificar y optimizar el
                    proceso migratorio. Descubre cómo nuestro sistema de
                    seguimiento de migración digital puede transformar tu
                    experiencia y garantizar una transición fluida hacia tu
                    nuevo destino
                  </p>
                </div>

                {/* <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] rounded-xl md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={524}
                  height={490}
                /> */}
                {/* <ScrollParallax isAbsolutelyPositioned> */}
                {/* </ScrollParallax> */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[10.5rem] bottom-[2.5rem] px-1 py-1 z-5 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[8rem] bottom-[10rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
              <Gradient />
            </div>
          </div>
          <div className="absolute -top-[0%] left-1/2 w-screen -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[190%] ">
            {/* <img
              src={helping}
              className="w-screen h-auto "
              width={1920}
              height={1800}
            /> */}
          </div>
          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
