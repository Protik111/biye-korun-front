
import { loadUser } from "@/redux/features/auth/authSlice";
import { Loader } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

export const metadata = {
  title: 'Profile Creation',
  description: 'A matrimony service to find people hapiness',
}

export default function RootLayout({ children }) {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem('biyeKorun_token')
  //   if (!token) {
  //     console.log('trruu');
  //     router.push('/');
  //     // return
  //   }

  //   setIsLoading(true)

  // }, [router])

  // if (!isLoading) {
  //   return <div className="flex justify-center align-center min-vh-100">
  //     <Loader size="xl" color="pink" />
  //   </div>
  // }

  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
