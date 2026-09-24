import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/posts";
import Reveal from "./Reveal";

export default function BlogPreview() {
  return <section id="blog" className="section blog-preview-section">
    <div className="blog-background-dots scroll-decor" data-scroll-move="18" data-scroll-scale="0.03" aria-hidden="true" />
    <div className="container blog-preview-layout">
      <Reveal className="blog-heading">
        <div className="eyebrow section-kicker"><span>04</span> — БЛОГ</div>
        <h2>Актуальное о праве<br />и <span className="accent-word">бизнесе</span></h2>
        <p>Объясняем важное простыми словами и делимся наблюдениями из практики.</p>
        <Link href="/blog" className="inline-link blog-all-link">Все статьи <ArrowRight size={17} /></Link>
      </Reveal>
      <div className="blog-grid">
        {posts.slice(0, 3).map((post, i) => <Reveal className="blog-card" key={post.id} delay={i * 80}>
          <div className={"blog-card-art art-" + post.visual}><div className="art-shape" /><span>ЛЭМП ЛИГАЛ / БЛОГ</span></div>
          <div className="blog-card-body"><div className="blog-card-meta"><span>{post.category}</span><span>{post.readTime}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p><div className="blog-card-foot"><span>Материал готовится</span><ArrowUpRight size={18} /></div></div>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
