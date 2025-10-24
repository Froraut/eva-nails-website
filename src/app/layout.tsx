import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "ЕВА - Профессиональный мастер маникюра в Минске",
  description: "Профессиональный маникюр и педикюр в Минске. Качественное покрытие гель-лаком, дизайн ногтей, наращивание. Опытный мастер, индивидуальный подход.",
  keywords: ["маникюр Минск", "педикюр", "гель-лак", "дизайн ногтей", "мастер маникюра", "ногтевой сервис"],
  authors: [{ name: "Ева" }],
  openGraph: {
    title: "ЕВА - Мастер маникюра",
    description: "Профессиональный маникюр и педикюр в Минске",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
