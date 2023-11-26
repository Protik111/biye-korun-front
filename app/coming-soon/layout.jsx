// "use client"

import Navbar from "@/components/global/Navbar";

export const metadata = {
  title: "Coming Soon - Biye Korun",
  description: "Coming Soon",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <div>{children}</div>
    </div>
  );
}
