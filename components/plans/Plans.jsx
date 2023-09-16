"use client"
import { plansList } from "@/staticData/plans"
import SinglePlan from "./SinglePlan"
import axios from "axios";
import { useEffect, useState } from "react";
import useAxios from "@/hooks/axios/useAxios";

const Plans = () => {
    const { data, error, loading, refetch } = useAxios('/package');

    console.log('data, error, loading, refetch', data, error, loading);

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