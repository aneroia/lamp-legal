import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import BlogPreview from "@/components/BlogPreview";
import Footer, { ContactSection } from "@/components/Footer";
import SitePatterns from "@/components/SitePatterns";

export default function Home() {
  return <>
    <Header />
    <main><Hero /><div className="story-flow"><SitePatterns /><About /><Services /><Trust /><BlogPreview /><ContactSection /></div></main>
    <Footer />
  </>;
}
