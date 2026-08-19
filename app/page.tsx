import UploadPanel from "@/components/UploadPanel";
import SiteShell from "@/components/SiteShell";

export default function Home() {
  return <SiteShell><main className="page">
    <section className="hero fade-in">
      <div className="eyebrow">IMAGE • VIDEO • AUDIO</div>
      <h1>Upload anything.<br/><span>Get a URL.</span></h1>
      <p>Fast, responsive and developer-friendly. Upload a file and share it instantly.</p>
      <UploadPanel/>
    </section>
    <section className="cards fade-in">
      <article><b>900 MB</b><span>maximum per file</span></article>
      <article><b>Direct upload</b><span>large files avoid your Vercel Function</span></article>
      <article><b>REST API</b><span>simple public endpoints, no API key</span></article>
    </section>
  </main></SiteShell>;
}
