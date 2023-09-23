
"use client"
import "../globals.scss";
import RequestTapbar from "@/components/request/RequestTapbar";


export default function RootLayout({ children }) {
  return (
    <div>
      <RequestTapbar></RequestTapbar>
      {children}
    </div>
  );
}
