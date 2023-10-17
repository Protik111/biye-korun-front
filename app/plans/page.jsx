"use client"

import MatchMaking from "@/components/plans/MatchMaking"
import PlansHero from "@/components/plans/PlansHero"
import QuestionAnswer from "@/components/plans/QuestionAnswer"
import Footer from "@/components/global/Footer"
import useProtectedRoute from "@/hooks/common/useProtectedRoute"
import { Loader } from "@mantine/core"

const page = () => {
    const { isLoading } = useProtectedRoute();

    if (!isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Loader size="xl" color="pink" />
        </div>
    }

    return (
        <div className='plans'>
            <PlansHero></PlansHero>
            {/* <MatchMaking></MatchMaking> */}
            <QuestionAnswer></QuestionAnswer>
            <Footer></Footer>
        </div>
    )
}

export default page