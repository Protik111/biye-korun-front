// "use client"
// import { loadUser } from "@/redux/features/auth/authSlice";
// import { Loader } from "@mantine/core";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"

export const metadata = {
  title: 'Profile Creation',
  description: 'A matrimony service to find people hapiness',
}

export default function RootLayout({ children }) {

  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
