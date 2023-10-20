import React from 'react';

const HeroVideo = ({videoLink}) => {
    return (
        <>
            <div className='container'>
                <div className="right_section">
                    <div className="video-thumb">
                        <div className='homeVideo2_container'>
                            <div className='video_container'>
                                <iframe title="vimeo-player" src={videoLink}  width="640"
                                        height="360" frameborder="0" allowfullscreen="allowfullscreen"
                                        mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen"
                                        oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HeroVideo;