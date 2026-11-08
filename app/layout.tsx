import type { Metadata } from "next";
import { bodyFont } from "./fonts";
import "./globals.css";



export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: "Лэмп Лигал — право, которое работает на бизнес",
  description: "Юридические решения для бизнеса и IT: запуск продуктов, договоры, сделки, интеллектуальная собственность и персональные данные.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" data-scroll-behavior="smooth"><body className={bodyFont.variable}>{children}</body></html>;
}
