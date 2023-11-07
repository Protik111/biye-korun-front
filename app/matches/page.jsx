"use client"

import Navbar from "@/components/global/Navbar";
import Matches from "@/components/matches/Matches"
import useProtectedRoute from "@/hooks/common/useProtectedRoute";
import { Loader } from "@mantine/core";

const page = () => {
    const { isLoading } = useProtectedRoute();

    if (!isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Loader size="xl" color="pink" />
        </div>
    }

    return (
        <div className='matches'>
            <Navbar></Navbar>
            <Matches></Matches>
            <div className="style_v2">

            </div>
        </div>
    )
}

export default page