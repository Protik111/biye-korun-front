// "use client"

import Navbar from "@/components/global/Navbar"

export const metadata = {
    title: 'Privacy Policy - Biye Korun',
    description: 'Your privacy matters deeply to us. This policy aims to elucidate how we handle, collect, and share your personal information.',
}

export default function RootLayout({ children }) {

    return (
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
    )
}
