
"use client"
import "../globals.scss";
import RequestTapbar from "@/components/request/RequestTapbar";

export const metadata = {
  title: "Matches",
  description: "A matrimony service to find people hapiness",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <RequestTapbar></RequestTapbar>
      {children}
    </div>
  );
}
