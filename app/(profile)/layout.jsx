"use client";

import Tapbar from "@/components/dashboard/Tapbar";
import "../globals.scss";
import ProfileTapbar from "@/components/profile/ProfileTapbar";
import useProtectedRoute from "@/hooks/common/useProtectedRoute";
import { Loader } from "@mantine/core";
import Navbar from "@/components/global/Navbar";
// import Navbar from "@/components/global/Navbar";
// import dynamic from "next/dynamic";

// const Navbar = dynamic(() => import("@/components/global/Navbar"), {
//   ssr: false,
// });

// export const metadata = {
//     title: "Profile",
//     description: "A matrimony service to find people hapiness",
// };

export default function RootLayout({ children }) {
    const { isLoading } = useProtectedRoute();

    if (!isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Loader size="xl" color="pink" />
        </div>
    }

    return (
        <div>
            <Navbar></Navbar>
            <ProfileTapbar></ProfileTapbar>
            {children}
        </div>
    );
}
