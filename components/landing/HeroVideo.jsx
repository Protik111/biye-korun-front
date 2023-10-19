import React from 'react';

const HeroVideo = () => {
    return (
        <>
            <div className='container'>
                <div className="right_section">
                    <div className="video-thumb">
                        <div className='homeVideo2_container'>
                            <div className='video_container'>
                                <iframe title="vimeo-player" src='https://player.vimeo.com/video/875673562?h=434dff2df9'  width="640"
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