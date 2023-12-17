import { useState } from "react";
import styles from "./quatesCarousel.module.css";
import ArrowLeft from "../../../public/arrowLeft.svg";
import ArrowRight from "../../../public/arrowRight.svg";
import Image from "next/image";

const slides = [
  {
    quate:
      "“Diff’s patience, dedication, and expertise throughout this challenging journey have made it an amazing experience and enabled us to achieve a seemingly insurmountable finish line. And we noticed the results on day one.”",
    author: "Greg Foreman",
    positionInfo: [
      "Director, Direct-to-Consumer",
      "Sales and Operations IDW Publishing",
    ],
  },
  {
    quate:
      "“Diff's ability to understand our complex business needs at a deep, personal level allowed them to solve the Rubik's Cube that Rudsak put in front of them. They provided solutions perfectly suited for our business. I don’t think we could have built the OMS with any other agency.”",
    author: "Evan Stanfield",
    positionInfo: ["Manager of eCommerce Operations, RUDSAK"],
  },
  {
    quate:
      "“Switching platforms is never easy. Effy needed a partner that not only came with design and development expertise but could also solve operational challenges unique to us. Diff is that partner helping us elevate the Effy brand experience.”",
    author: "Mitch Ebrahimi",
    positionInfo: ["eCommerce Manager, Effy"],
  },
];

export const QuatesCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.slides}>
        {slides.map((slide, i) => {
          return (
            <div
              key={i}
              className={index === i ? styles.slide : styles.slideHidden}
            >
              <h3 className={styles.quate}>{slide.quate}</h3>
              <div>
                <p className={styles.author}>{slide.author}</p>
                {slide.positionInfo.map((info, i) => {
                  return (
                    <p key={i} className={styles.position}>
                      {info}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.controls}>
        <Image src={ArrowLeft} alt="" onClick={prevSlide} />
        <Image src={ArrowRight} alt="" onClick={nextSlide} />
      </div>
    </div>
  );
};
