import '../globals.scss'

export const metadata = {
  title: 'Biye Korun',
  description: 'A matrimony service to find people hapiness',
}

export default function RootLayout({ children }) {
  return (
    <main>
      <div>{children}</div>
    </main>
  )
}
