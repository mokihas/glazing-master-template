import type { Metadata, Viewport } from "next"
import "./globals.css"
import { siteConfig } from "@/config/siteConfig"

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  keywords: ["glass replacement", "glazing", "commercial glazing", "residential glazing", siteConfig.city],
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.website,
    title: siteConfig.businessName,
    description: siteConfig.description,
    siteName: siteConfig.businessName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.businessName,
    description: siteConfig.description,
    creator: "@glazing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

import { runBuildTimeSEOGuards } from "@/lib/seo-guards"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  // Run advanced strict SEO checks
  runBuildTimeSEOGuards()

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Mona+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <main>{children}</main>
        
        {/* GoHighLevel Chat Widget Injection */}
        {siteConfig.ghl?.enableChatWidget && siteConfig.ghl.chatWidgetEmbedCode.includes('<') && !siteConfig.ghl.chatWidgetEmbedCode.includes('Paste your GHL') && (
          <div dangerouslySetInnerHTML={{ __html: siteConfig.ghl.chatWidgetEmbedCode }} />
        )}
      </body>
    </html>
  )
}
