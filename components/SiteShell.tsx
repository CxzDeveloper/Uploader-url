 "use client";
import {useState} from "react";
import Link from "next/link";
export default function SiteShell({children}:{children:React.ReactNode}){
 const [open,setOpen]=useState(false);
 return <div className="shell">
  <header className="topbar">
   <Link href="/" className="brand">CXZ<span>TOURL</span></Link>
   <nav className={open?"nav open":"nav"}>
    <Link href="/">Upload</Link><Link href="/docs">API Docs</Link><Link href="/portfolio">Portfolio</Link>
   </nav>
   <div className="actions"><button className="theme" onClick={()=>document.documentElement.classList.toggle("light")}>☼</button><button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">☰</button></div>
  </header>{children}
  <footer>© 2026 CXZTOURL · Built for fast sharing</footer>
 </div>
}
