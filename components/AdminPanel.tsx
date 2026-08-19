 "use client";
import {useEffect,useState} from "react";
export default function AdminPanel(){const [d,setD]=useState<any>(null);const [err,setErr]=useState("");
 useEffect(()=>{fetch("/api/admin/stats").then(async r=>{if(!r.ok)throw 0;return r.json()}).then(setD).catch(()=>setErr("Unauthorized. Please login first."))},[]);
 if(err)return <div className="card"><h2>{err}</h2><a href="/admin/login">Go to login</a></div>;
 if(!d)return <div className="card">Loading admin dashboard…</div>;
 return <div><div className="eyebrow">ADMIN DASHBOARD</div><h1>Overview</h1><div className="stats"><div><b>{d.totalFiles}</b><span>Total uploads</span></div><div><b>{d.totalMB} MB</b><span>Stored data</span></div><div><b>{d.users}</b><span>Known uploaders</span></div></div><div className="card"><h2>Newest uploads</h2><div className="table">{d.newest.map((x:any)=><div className="row" key={x.id}><span>{x.filename}</span><span>{x.sizeMB} MB</span><span>{new Date(x.uploadedAt).toLocaleString()}</span></div>)}</div></div><form action="/api/admin/logout" method="post"><button className="danger">Log out</button></form></div>
}