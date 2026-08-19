 "use client";
import {useRef,useState} from "react";
import {upload} from "@vercel/blob/client";
const MAX=900*1024*1024;
export default function UploadPanel(){
 const ref=useRef<HTMLInputElement>(null); const [file,setFile]=useState<File|null>(null); const [p,setP]=useState(0); const [status,setStatus]=useState(""); const [url,setUrl]=useState("");
 async function go(f:File){setFile(f);setUrl(""); if(f.size>MAX){setStatus("File is larger than 900 MB.");return}
  if(!/^(image|video|audio)\//.test(f.type)){setStatus("Only image, video and audio files are allowed.");return}
  setStatus("Uploading…");setP(0);
  try{const blob=await upload(f.name,f,{access:"public",handleUploadUrl:"/api/upload/token",onUploadProgress:(e)=>setP(e.percentage)});
   setUrl(blob.url);setStatus("Upload complete.");}catch(e){setStatus(e instanceof Error?e.message:"Upload failed.");}
 }
 return <div className="uploader" onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();const f=e.dataTransfer.files[0];if(f)go(f)}} onClick={()=>ref.current?.click()}>
  <input ref={ref} type="file" accept="image/*,video/*,audio/*" hidden onChange={e=>{const f=e.target.files?.[0];if(f)go(f)}}/>
  <div className="drop-icon">{file?.type.startsWith("video")?"▶":file?.type.startsWith("audio")?"♫":"↑"}</div>
  <h3>{status||"Drop a file here"}</h3><p>or click to browse · max 900 MB</p>
  {status.startsWith("Uploading")&&<div className="progress"><i style={{width:`${p}%`}}/></div>}
  {url&&<div className="result" onClick={e=>e.stopPropagation()}><input readOnly value={url}/><button onClick={()=>navigator.clipboard.writeText(url)}>Copy URL</button></div>}
 </div>
}