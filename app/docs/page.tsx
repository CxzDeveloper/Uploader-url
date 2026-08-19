import SiteShell from "@/components/SiteShell";
export default function Docs(){
 return <SiteShell><main className="page docs fade-in">
  <div className="eyebrow">DEVELOPER CENTER</div><h1>REST API Documentation</h1>
  <p>Public upload API. No API key required. Maximum file size: 900 MB.</p>
  <h2>1. Create an upload token</h2><pre>{`POST /api/v1/upload/token
Content-Type: application/json

{
  "filename": "song.mp3",
  "contentType": "audio/mpeg",
  "size": 12345678
}`}</pre>
  <h2>2. Upload directly</h2><p>The token response is intended for direct browser-to-Blob upload. The website already handles this automatically.</p>
  <h2>3. Get file information</h2><pre>{`GET /api/v1/files/:id`}</pre>
  <h2>4. Delete</h2><pre>{`DELETE /api/v1/files/:id`}</pre>
  <h2>JavaScript</h2><pre>{`const r = await fetch("/api/v1/upload/token", {
  method: "POST",
  headers: {"content-type":"application/json"},
  body: JSON.stringify({ filename: file.name, contentType: file.type, size: file.size })
});
const { uploadUrl } = await r.json();`}</pre>
  <div className="notice">For production, add your own external rate-limit provider if the site becomes high traffic. The included in-memory limiter is best-effort on serverless deployments.</div>
 </main></SiteShell>
}
