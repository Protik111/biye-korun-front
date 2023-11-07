import Navbar from "@/components/global/Navbar"


export const metadata = {
    title: 'Payment',
    description: 'A matrimony service to find people happiness',
}

export default function RootLayout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
    )
}
