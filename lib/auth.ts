import crypto from "crypto";
import {cookies} from "next/headers";
const NAME="cxz_admin";
function sign(v:string){return crypto.createHmac("sha256",process.env.ADMIN_SESSION_SECRET||"dev-secret").update(v).digest("hex")}
export async function isAdmin(){const c=await cookies();const v=c.get(NAME)?.value;if(!v)return false;const [ts,sig]=v.split(".");if(!ts||!sig||Date.now()-Number(ts)>86400000)return false;return crypto.timingSafeEqual(Buffer.from(sig),Buffer.from(sign(ts)))}
export function makeSession(){const ts=String(Date.now());return `${ts}.${sign(ts)}`}
export const cookieName=NAME;
