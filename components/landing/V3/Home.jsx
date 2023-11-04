import React from 'react'
import GiftCollection from './GiftCollection';
import HoneyMoon from './HoneyMoon';
import BiyeKorunApps from './BiyeKorunApps';
import RightPlan from './RightPlan';
import SuccessStories from './SuccessStories';
import Faqs from '@/components/global/Faqs';

const HomeComp = () => {
    return (
        <>
            <div className='section-padding-v3'>
                <GiftCollection></GiftCollection>
            </div>
            <HoneyMoon></HoneyMoon>
            <div className='section-padding-v3'>
                <BiyeKorunApps></BiyeKorunApps>
            </div>
            <RightPlan></RightPlan>
            <div>
                <SuccessStories></SuccessStories>
            </div>
            <Faqs></Faqs>

        </>
    )
}

export default HomeComp;