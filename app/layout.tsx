import type { Metadata } from "next";
import { Anton, Geist } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, createMetadata, siteConfig, siteUrl } from "@/lib/seo";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...createMetadata({
    title: "Orisyn Limited | Engineering & Construction in Bangladesh",
    description: siteConfig.description,
    path: "/",
  }),
  verification: {
    google: "PoWxIikPTRzagO-wfybyhd_ro5YmDb6pLw_F8E2Az9M",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${anton.variable}`}
    >
      <body suppressHydrationWarning>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: siteConfig.name,
            url: siteUrl,
            logo: absoluteUrl("/brand/orisyn-logo.png"),
            email: siteConfig.email,
            telephone: siteConfig.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: "House #263 (2nd Floor), Road #19, Mohakhali DOHS",
              addressLocality: "Dhaka",
              postalCode: "1206",
              addressCountry: "BD",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
