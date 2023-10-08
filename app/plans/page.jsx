"use client"

import MatchMaking from "@/components/plans/MatchMaking"
import PlansHero from "@/components/plans/PlansHero"
import QuestionAnswer from "@/components/plans/QuestionAnswer"
import Footer from "@/components/global/Footer"

const page = () => {
    return (
        <div className='plans'>
            <PlansHero></PlansHero>
            <MatchMaking></MatchMaking>
            <QuestionAnswer></QuestionAnswer>
            <Footer></Footer>
        </div>
    )
}

export default page