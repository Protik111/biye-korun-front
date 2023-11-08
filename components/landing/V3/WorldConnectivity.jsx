import useAnimation from "@/hooks/common/useAnimation";
import React from "react";
import { useEffect } from "react";

const WorldConnectivity = () => {
  const { makeAnimation } = useAnimation(600);

  useEffect(() => {
    makeAnimation()
  }, [])

  return (
    <div className="world_connectivity">
      <div className="container flex flex-column flex-gap-20">
        <div className="title">
          <h1 className="heading1V3">World Wide Connectivity</h1>
        </div>
        <div className="right_section" data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
          <div className="video-thumb">
            <div className="homeVideo2_container">
              <div className="video_container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/UfeKeTWztp8?si=r0SkQYM_Rm2ZrgS6"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldConnectivity;
