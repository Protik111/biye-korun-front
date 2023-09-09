"use client"
import { plansList } from "@/staticData/plans"
import SinglePlan from "./SinglePlan"
import axios from "axios";
import { useEffect, useState } from "react";

const Plans = () => {
    // const { data, error, loading, refetch } = useAxios("/package");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     // Make the GET request using Axios
    //     axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/package`)
    //         .then((response) => {
    //             setData(response.data);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             setError(err);
    //             setLoading(false);
    //             console.log('err', err);
    //         });
    // }, []);

    console.log('joke, error, loading, refetch', data, error, loading);

    return (
        <div className="plans__box container">
            {
                plansList?.map((plan, i) => <SinglePlan key={plan?.id} plan={plan}>
                </SinglePlan>)
            }
        </div>
    )
}

export default Plans