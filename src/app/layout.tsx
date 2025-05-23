import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HealthTech - Future of Healthcare Technology",
  description:
    "Transforming patient care through cutting-edge technology, AI-driven insights, and innovative digital health solutions.",
  keywords: [
    "healthcare",
    "technology",
    "AI",
    "telemedicine",
    "digital health",
    "medical innovation",
  ],
  authors: [{ name: "HealthTech Team" }],
  creator: "HealthTech",
  publisher: "HealthTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthtech.com",
    title: "HealthTech - Future of Healthcare Technology",
    description:
      "Transforming patient care through cutting-edge technology, AI-driven insights, and innovative digital health solutions.",
    siteName: "HealthTech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HealthTech - Future of Healthcare Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthTech - Future of Healthcare Technology",
    description:
      "Transforming patient care through cutting-edge technology, AI-driven insights, and innovative digital health solutions.",
    images: ["/og-image.jpg"],
    creator: "@healthtech",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
