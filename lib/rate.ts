const hits=new Map<string,{n:number,t:number}>();
export function rate(key:string,limit=30,windowMs=60000){const now=Date.now(),x=hits.get(key);if(!x||now-x.t>windowMs){hits.set(key,{n:1,t:now});return true}if(x.n>=limit)return false;x.n++;return true}
