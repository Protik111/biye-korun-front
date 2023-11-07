import Navbar from "@/components/global/Navbar"

export const metadata = {
    title: 'About Us - Biye Korun',
    description: 'Welcome to biyekorun.us, the premier online matrimonial platform dedicated to bringing individuals together for the sacred bond of marriage.',
}

export default function RootLayout({ children }) {

    return (
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
    )
}
