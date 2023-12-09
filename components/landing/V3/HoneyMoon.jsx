import Link from "next/link";
import React from "react";

const HoneyMoon = () => {
  return (
    <div className="honeymoon container">
      <div className="honeymoon--left">
        <h2 className="heading2V3">Honeymoon Plan</h2>
        <p className="mt-25 paragraphV3">
          BiyeKorun offers a comprehensive solution for planning and enjoying
          honeymoons, providing a seamless experience from start to finish. Such
          one-stop solutions can be incredibly convenient for couples looking to
          have a stress-free and enjoyable honeymoon.
        </p>
        <div className="btn-container">
          <Link href="/login">
            <button className="secondary-btn-v3 mt-25">Learn More &rarr;</button>
          </Link>
        </div>
      </div>
      <div className="honeymoon--right">
        <div className="flex flex-gap-20 images">
          <img
            className="small"
            src="/V3/landing/honey1.png"
            alt="Honeymoon"
            loading="lazy"
          />
          <img
            className="large"
            src="/V3/landing/honey2.png"
            alt="Honeymoon"
            loading="lazy"
          />
        </div>
        <div className="flex flex-gap-20 mt-20 images">
          <img
            className="large"
            src="/V3/landing/honey3.png"
            alt="Honeymoon"
            loading="lazy"
          />
          <img
            className="small"
            src="/V3/landing/honey4.png"
            alt="Honeymoon"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HoneyMoon;
