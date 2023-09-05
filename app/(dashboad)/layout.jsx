

import Tapbar from "@/components/dashboard/Tapbar";
import "../globals.scss";
// import Navbar from "@/components/global/Navbar";
// import dynamic from "next/dynamic";

// const Navbar = dynamic(() => import("@/components/global/Navbar"), {
//   ssr: false,
// });

export const metadata = {
  title: "Profile",
  description: "A matrimony service to find people hapiness",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Tapbar></Tapbar>
      {children}
    </div>
  );
}
