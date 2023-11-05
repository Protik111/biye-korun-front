import React from "react";

const KnowsTheFounder = () => {
  return (
    <div className="knows_founder_main">
      <div className="flex flex-column flex-gap-20 ">
        <div className="title">
          <h1>Know The Founder</h1>
        </div>
        <div className="video_frame">
          <iframe
            width="700"
            height="500"
            src="https://www.youtube.com/embed/Q5cgUg7UeZc?si=0y3tzzFkAo89TrzG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default KnowsTheFounder;
