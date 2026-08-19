import {list} from "@vercel/blob"; import {NextResponse} from "next/server";
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;const r=await list({prefix:id});const b=r.blobs[0];if(!b)return NextResponse.json({error:"Not found"},{status:404});return NextResponse.json({success:true,data:{url:b.url,pathname:b.pathname,size:b.size,sizeMB:+(b.size/1048576).toFixed(2),uploadedAt:b.uploadedAt}})}
export async function DELETE(){return NextResponse.json({error:"File deletion requires admin authentication in this starter."},{status:403})}
