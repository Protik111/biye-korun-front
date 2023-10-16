"use client"

import useProtectedRoute from "@/hooks/common/useProtectedRoute";
import { Loader } from "@mantine/core";

// export const metadata = {
//   title: 'Profile Creation',
//   description: 'A matrimony service to find people hapiness',
// }

export default function RootLayout({ children }) {
  const { isLoading } = useProtectedRoute();

  if (!isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Loader size="xl" color="pink" />
    </div>
  }

  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
