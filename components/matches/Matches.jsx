import { matchesProfile } from "@/staticData/matchesPeople"
import SingleMatch from "./SingleMatch"
import { btnBackground } from "@/styles/library/mantine"
import { Button } from "@mantine/core"
import Link from "next/link"

const Matches = () => {
    return (
        <>
            <div className="text-center container">
                <h2>Let's get started by connecting with few of your Matches</h2>
            </div>
            <div className="matchesContainer container grid grid-cols-3 grid-cols-3-responsive grid-gap-20">
                {
                    matchesProfile?.map((item, i) => <SingleMatch key={item?.id} item={item}></SingleMatch>)
                }
            </div>
            <div className="flex justify-center align-center container">
                <Link href="/todays-matches">
                    <Button size="md" style={btnBackground}>
                        Save & Continue
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default Matches