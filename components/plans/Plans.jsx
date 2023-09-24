"use client"
import { plansList } from "@/staticData/plans"
import SinglePlan from "./SinglePlan"
import axios from "axios";
import { useEffect, useState } from "react";
import useAxios from "@/hooks/axios/useAxios";
import { Loader } from "@mantine/core";

const Plans = () => {
    const { data, error, loading, refetch } = useAxios('/package');

    console.log('data, error, loading, refetch', data, error, loading);

    return (
        <div className="plans__box container">
            {/* {
                data?.data?.map((plan, i) => <SinglePlan key={plan?.id} plan={plan}>
                </SinglePlan>)
            } */}
            {
                loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Loader size="xl" color="white" />
                </div> :
                    data?.data?.length > 0 ?
                        data?.data?.map((plan, i) => <SinglePlan key={plan?.id} plan={plan}>
                        </SinglePlan>) :
                        (error || data?.data?.length == 0) ? <h2 style={{ color: 'white' }}>There is no package available for you!</h2> : <></>
            }
        </div>
    )
}

export default Plans