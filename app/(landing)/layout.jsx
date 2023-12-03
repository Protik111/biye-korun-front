import Navbar from '@/components/global/Navbar'
import '../globals.scss'
// Ai-logo-main.png

export function generateMetadata({ params }) {
  const details = params

  if (!details) {
    return {}
  }
  const url = process.env.CLIENT_SITE_URL;

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('title', "Biye Korun | A Matrimony service");
  ogUrl.searchParams.set('author', "Biye Korun");
  const dynamicImageUrl = `/Ai-logo-main.png`;
  ogUrl.searchParams.set('cover', dynamicImageUrl);

  return {
    title: "Biye Korun",
    description: "A matrimony service to find people hapiness",
    authors: "Biye Korun",
    alternates: {
      canonical: url
    },
    openGraph: {
      title: "Biye Korun | A Matrimony service",
      description: "A matrimony service to find people hapiness",
      url: url,
      images: [
        {
          url: ogUrl.toString(),
          alt: "Biye Korun | A Matrimony service"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Biye Korun",
      description: "A matrimony service to find people hapiness",
      images: [
        {
          url: ogUrl.toString(),
          alt: "Biye Korun | A Matrimony service"
        }
      ]
    }
  }
}

// export const metadata = {
//   title: 'Biye Korun',
//   description: 'A matrimony service to find people hapiness',
// }

export default function RootLayout({ children }) {
  return (
    <main>
      <div>{children}</div>
    </main>
  )
}
