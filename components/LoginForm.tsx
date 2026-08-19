 "use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
export default function LoginForm(){const [u,setU]=useState(""),[p,setP]=useState(""),[err,setErr]=useState(""),r=useRouter();
 async function submit(e:React.FormEvent){e.preventDefault();setErr("");const x=await fetch("/api/admin/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:u,password:p})});if(x.ok)r.push("/admin");else setErr("Invalid credentials.");}
 return <form className="login card" onSubmit={submit}><div className="eyebrow">ADMIN</div><h1>Secure login</h1><input placeholder="Username" value={u} onChange={e=>setU(e.target.value)} autoComplete="username"/><input placeholder="Password" type="password" value={p} onChange={e=>setP(e.target.value)} autoComplete="current-password"/><button className="primary">Sign in</button>{err&&<small>{err}</small>}</form>}
