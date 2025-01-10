import "./globals.css";
import siteMetadata from '../config/siteMetadata'; 

export const metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.company.name}`
  },
  description: siteMetadata.description,
  keywords: siteMetadata.seo.keywords,
  
  // Open Graph metadata (for social sharing)
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.company.name,
    locale: siteMetadata.seo.locale,
    type: 'website',
    images: [
      {
        url: siteMetadata.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  
  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.seo.twitterHandle,
    images: [siteMetadata.seo.ogImage],
  },

  // Additional SEO-friendly metadata
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

/*   // Local business metadata (great for local SEO)
  verification: {
    google: 'your-google-verification-code', 
    bing: 'your-bing-verification-code',
  } */
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
