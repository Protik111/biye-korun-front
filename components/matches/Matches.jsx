import { matchesProfile } from "@/staticData/matchesPeople"
import SingleMatch from "./SingleMatch"
import { btnBackground } from "@/styles/library/mantine"
import { Button } from "@mantine/core"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"
import useAxios from "@/hooks/axios/useAxios"

const Matches = () => {
    const { data, error, loading, refetch } = useAxios('user/getMatches');

    console.log('data, error, loading', data, error, loading);

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     // Make the GET request using Axios
    //     axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/getMatches`)
    //         .then((response) => {
    //             setData(response.data);
    //             setLoading(false);
    //             console.log('response.data', response.data);
    //         })
    //         .catch((err) => {
    //             setError(err);
    //             setLoading(false);
    //             console.log('err', err);
    //         });
    // }, []);


    return (
        <>
            <div className="text-center container">
                <h2>Let's get started by connecting with few of your Matches</h2>
            </div>
            <div className="matchesContainer container grid grid-cols-3 grid-cols-3-responsive grid-gap-20">
                {
                    matchesProfile?.map((item, i) => <SingleMatch key={i} item={item}></SingleMatch>)
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