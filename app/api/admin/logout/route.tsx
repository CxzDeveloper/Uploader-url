import {NextResponse} from "next/server"; import {cookieName} from "@/lib/auth";
export async function POST(){const r=NextResponse.redirect(new URL("/admin/login",process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000"));r.cookies.set(cookieName,"",{httpOnly:true,secure:true,sameSite:"lax",path:"/",maxAge:0});return r}
