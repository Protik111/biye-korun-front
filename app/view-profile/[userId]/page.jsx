"use client"
import ViewProfile from "@/components/dashboard/ViewProfile"
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
            <ViewProfile></ViewProfile>
        </>
    )
}

export default page