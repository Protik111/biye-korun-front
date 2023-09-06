// "use client"

export const metadata = {
    title: 'Login - Biye Korun',
    description: 'A matrimony service to find people hapiness',
}

export default function RootLayout({ children }) {

    return (
        <div>
            <div>{children}</div>
        </div>
    )
}
