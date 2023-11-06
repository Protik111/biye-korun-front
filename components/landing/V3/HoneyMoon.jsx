import React from "react";

const HoneyMoon = () => {
  return (
    <div className="honeymoon container">
      <div className="honeymoon--left">
        <h2>Wedding Plan</h2>
        <p className="mt-25">
          Congratulations on finding your life partner on the BiyeKorun app and
          on your engagement! Planning your wedding is an exciting journey, and
          We are here to help you get started.
        </p>
        <button className="secondary-btn-v3 mt-25">Learn More &rarr;</button>
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
