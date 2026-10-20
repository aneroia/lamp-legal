import type { Metadata } from "next";
import { bodyFont } from "./fonts";
import "./globals.css";
import "./home-redesign.css";
import { ContactProvider } from "@/components/ContactDialog";

export const metadata: Metadata = {
  title: "Лэмп Лигал — право, которое работает на бизнес",
  description: "Юридические решения для бизнеса и IT: запуск продуктов, договоры, сделки, интеллектуальная собственность и персональные данные.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" data-scroll-behavior="smooth"><body className={bodyFont.variable}><ContactProvider>{children}</ContactProvider></body></html>;
}
