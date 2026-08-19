import {handleUpload} from "@vercel/blob/client";
import {NextResponse} from "next/server";
import {rate} from "@/lib/rate";
const MAX=900*1024*1024;
const TYPES=["image/","video/","audio/"];
export async function POST(req:Request){
 const ip=req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown";
 if(!rate(ip,20))return NextResponse.json({error:"Too many requests"},{status:429});
 try{
  const body=await req.json(); const size=Number(body.size||0), type=String(body.contentType||"");
  if(!size||size>MAX)return NextResponse.json({error:"File must be 1 byte to 900 MB"},{status:413});
  if(!TYPES.some(x=>type.startsWith(x)))return NextResponse.json({error:"Only image, video and audio files are allowed"},{status:415});
  const json=await handleUpload({request:req,body:{type:"blob.generate-client-token",payload:JSON.stringify(body)},onBeforeGenerateToken:async(pathname)=>({
    allowedContentTypes:TYPES.map(x=>x+"*"),maximumSizeInBytes:MAX,addRandomSuffix:true,tokenPayload:JSON.stringify({ip})
  }),onUploadCompleted:async()=>{}});
  return NextResponse.json(json);
 }catch(e){return NextResponse.json({error:"Could not create upload token"},{status:400})}
}
