"use client"
import ViewProfile from "@/components/dashboard/ViewProfile"
import Navbar from "@/components/global/Navbar";
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
        <>
            <Navbar></Navbar>
            <ViewProfile></ViewProfile>
        </>
    )
}

export default page