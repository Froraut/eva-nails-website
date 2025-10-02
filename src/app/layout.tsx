import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ЕВА - Мастер маникюра в Москве",
  description: "Профессиональный мастер маникюра Ева. Качественные услуги маникюра, педикюра и дизайна ногтей. Записаться онлайн, посмотреть цены и галерею работ.",
  keywords: "маникюр, педикюр, дизайн ногтей, мастер маникюра, Москва, Ева",
  authors: [{ name: "Ева", url: "https://eva-nails.ru" }],
  openGraph: {
    title: "ЕВА - Мастер маникюра в Москве",
    description: "Профессиональный мастер маникюра Ева. Качественные услуги маникюра и дизайна ногтей.",
    url: "https://eva-nails.ru",
    siteName: "ЕВА - Мастер маникюра",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
