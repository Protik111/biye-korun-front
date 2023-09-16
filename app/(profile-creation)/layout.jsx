"use client"

import { Loader } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// export const metadata = {
//   title: 'Profile Creation',
//   description: 'A matrimony service to find people hapiness',
// }

export default function RootLayout({ children }) {
  const { isAuthenticated } = useSelector(state => state.auth);

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  useEffect(() => {

    if (!isAuthenticated) {
      router.push('/login')
      return;
    }
    setIsLoading(true)

  }, [])

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
