import Navbar from '@/components/global/Navbar'
import '../globals.scss'

export const metadata = {
  title: 'Biye Korun',
  description: 'A matrimony service to find people hapiness',
}

export default function RootLayout({ children }) {
  return (
    <main>
      <Navbar></Navbar>
      <div>{children}</div>
    </main>
  )
}
