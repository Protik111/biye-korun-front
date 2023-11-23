"use client";

import Navbar from "@/components/global/Navbar";
import useProtectedRoute from "@/hooks/common/useProtectedRoute";
import { Loader } from "@mantine/core";

// export const metadata = {
//   title: 'Profile Creation',
//   description: 'A matrimony service to find people hapiness',
// }

export default function RootLayout({ children }) {
  const { isLoading } = useProtectedRoute();

  if (!isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Loader size="xl" color="pink" />
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <div>{children}</div>
    </div>
  );
}
