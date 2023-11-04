import Navbar from "@/components/global/Navbar";
import "./globals.scss";
import { ReduxProvider } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import NProgress from "nprogress";
// import { useRouter } from "next/navigation";
// const router = useRouter();

export const metadata = {
  title: "Biye Korun",
  description: "A matrimony service to find people hapiness",
  googleSiteVerification: "google74daa90af3bfbbd2.html",
  icons: {
    url: "biyekorun-logo.ico",
  },
};

// NProgress.configure({ showSpinner: false });
// //Binding events.
// router.events.on('routeChangeStart', () => NProgress.start()); router.events.on('routeChangeComplete', () => NProgress.done()); router.events.on('routeChangeError', () => NProgress.done());

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ToastContainer />
          {/* <Navbar></Navbar> */}
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
