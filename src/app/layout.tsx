import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeScript } from "@/components/ThemeScript";
import "@/styles/globals.css";

const font = Noto_Sans_Georgian({
  subsets: ["georgian", "latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  title: {
    default: "SAMSIANI — ვებ დეველოპმენტი და ციფრული სერვისები",
    template: "%s — SAMSIANI",
  },
  description:
    "სამსიანი — ვებ დეველოპმენტის, SEO ოპტიმიზაციისა და ციფრული სერვისების სააგენტო. 11+ წლიანი გამოცდილება, 100+ პროექტი.",
  keywords: [
    "ვებ დეველოპმენტი",
    "SEO",
    "ვებ დიზაინი",
    "საქართველო",
    "სამსიანი",
  ],
  authors: [{ name: "Samsiani" }],
  openGraph: {
    type: "website",
    locale: "ka_GE",
    siteName: "SAMSIANI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka" className={font.variable} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <ThemeScript />
        <script dangerouslySetInnerHTML={{ __html: `if('scrollRestoration' in history){var s=sessionStorage.getItem('__scrollY');if(s&&parseInt(s)>150){window.addEventListener('DOMContentLoaded',function(){window.scrollTo(0,parseInt(s))})}else{history.scrollRestoration='manual';window.scrollTo(0,0)}window.addEventListener('beforeunload',function(){sessionStorage.setItem('__scrollY',String(window.scrollY))})}` }} />
      </head>
      <body className="grain font-sans">
        <ThemeProvider>
          <ToastProvider>
            <a href="#main" className="skip-to-content">
              მთავარ კონტენტზე გადასვლა
            </a>
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
