import Navbar from "@/components/global/Navbar";
import "./globals.scss";
import { ReduxProvider } from "@/redux/provider";

export const metadata = {
  title: "Biye Korun",
  description: "A matrimony service to find people hapiness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar></Navbar>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
