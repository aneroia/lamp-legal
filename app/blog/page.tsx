import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/posts";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Блог — Лэмп Лигал",
  description: "Материалы о праве для бизнеса, стартапов и digital-команд.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="blog-page">
        <section className="blog-intro">
          <div className="container blog-intro-inner">
            <div className="eyebrow"><span className="eyebrow-line" /> ЛЭМП ЛИГАЛ / БЛОГ</div>
            <h1>Право —<br /><span>без сложных слов.</span></h1>
            <p>Заметки о договорах, интеллектуальной собственности, конфликтах и юридической стороне развития бизнеса.</p>
            <div className="blog-intro-deco" aria-hidden="true"><div /><span /></div>
          </div>
        </section>
        <section className="blog-list section">
          <div className="container">
            <div className="blog-list-top"><div><div className="eyebrow">ПОДБОРКА МАТЕРИАЛОВ</div><h2>Читайте и применяйте</h2></div><span>01 — 06</span></div>
            <div className="blog-grid">
              {posts.map((post, i) => <Reveal className="blog-card" key={post.id} delay={(i % 3) * 80}>
                <div className={"blog-card-art art-" + post.visual}><div className="art-shape" /><span>ЛЭМП ЛИГАЛ / БЛОГ</span></div>
                <div className="blog-card-body"><div className="blog-card-meta"><span>{post.category}</span><span>{post.readTime}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p><div className="blog-card-foot"><span>Материал готовится</span><ArrowUpRight size={18} /></div></div>
              </Reveal>)}
            </div>
            <p className="blog-note">Это макет блога: тексты и даты публикаций появятся после подготовки материалов.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
