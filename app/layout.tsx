import type { Metadata } from "next";
import { bodyFont } from "./fonts";
import "./globals.css";
import "./home-redesign.css";
import { ContactProvider } from "@/components/ContactDialog";

export const metadata: Metadata = {
  title: "Лэмп Лигал — право, которое работает на бизнес",
  description: "Юридическая поддержка бизнеса, стартапов и digital-команд. Договоры, интеллектуальная собственность и разрешение споров.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={bodyFont.variable}><ContactProvider>{children}</ContactProvider></body></html>;
}
