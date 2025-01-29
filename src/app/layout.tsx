import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blockchain Buzz Podcast | Ashutosh Parihar',
  description: 'Unlocking the Future, One Block at a Time',
  openGraph: {
    title: 'Blockchain Buzz Podcast',
    description: 'Your gateway to all things crypto',
    url: 'https://ashutosh.icu',
    siteName: 'Blockchain Buzz',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain Buzz Podcast',
    description: 'Unlocking the Future, One Block at a Time',
    creator: '@blockchainbuzz',
    images: ['/twitter-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}