

import MatchMaking from "@/components/plans/MatchMaking"
import PlansHero from "@/components/plans/PlansHero"
import QuestionAnswer from "@/components/plans/QuestionAnswer"

const page = () => {
    return (
        <div className='plans'>
            <PlansHero></PlansHero>
            <MatchMaking></MatchMaking>
            <QuestionAnswer></QuestionAnswer>
        </div>
    )
}

export default page