
// import '../../global.scss'

import Navbar from "@/components/global/Navbar"

export const metadata = {
  title: 'Profile Creation',
  description: 'A matrimony service to find people hapiness',
}

export default function RootLayout({ children }) {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div>{children}</div>
    </div>
  )
}
