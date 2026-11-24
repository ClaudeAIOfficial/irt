{
const ROOT=window.IRT_ROOT||"";
const D=window.IRT_DATA||[];
const $=s=>document.querySelector(s);
let gid=0;
function rnd(seed){let s=(seed*9301+49297)%2147483647||7;return()=>(s=s*16807%2147483647)/2147483647}
function art(type,seed){
const r=rnd(seed*31+7),u="g"+(gid++);let o="";
const W=400,H=240;
const sky=(a,b)=>`<defs><linearGradient id="${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#${u})"/>`;
if(type=="city"){o+=sky("#ffb48a","#f6e3c8")+`<circle cx="300" cy="120" r="46" fill="#ff7a45"/>`;
[["#c98f87",150,.5],["#8a5a63",100,.75],["#3b2b3a",60,1]].forEach(([c,base,sc])=>{let x=-10;while(x<W){const w=28+r()*44,h=(40+r()*110)*sc+base*.2;o+=`<rect x="${x}" y="${H-h}" width="${w}" height="${h}" fill="${c}"/>`;if(sc==1)for(let wy=H-h+12;wy<H-10;wy+=16)for(let wx=x+6;wx<x+w-8;wx+=12)if(r()>.45)o+=`<rect x="${wx}" y="${wy}" width="5" height="7" fill="#ffd27a"/>`;x+=w+2}})}
else if(type=="sea"){o+=sky("#7fb6c8","#d9ecef")+`<circle cx="80" cy="70" r="30" fill="#fff4d6"/><rect y="150" width="${W}" height="90" fill="#1f5f73"/>`;
for(let i=0;i<9;i++)o+=`<path d="M${r()*W} ${165+i*8} q20 -6 40 0" stroke="#7fb6c8" stroke-width="2" fill="none"/>`;
o+=`<path d="M90 150h240l-22 34H112z" fill="#1d2a30"/><rect x="100" y="146" width="230" height="6" fill="#f2441d"/>`;
const cs=["#f2441d","#24525e","#e8b23a","#3f7f5a","#c9d7db"];for(let row=0;row<3;row++)for(let i=0;i<9;i++)if(row<2||r()>.4)o+=`<rect x="${120+i*22}" y="${128-row*16}" width="20" height="14" fill="${cs[Math.floor(r()*5)]}"/>`;
o+=`<rect x="318" y="70" width="8" height="80" fill="#2b3a40"/><rect x="290" y="70" width="80" height="7" fill="#2b3a40"/><path d="M342 77v36" stroke="#2b3a40" stroke-width="2"/>`}
else if(type=="hills"){o+=sky("#cfe7f0","#fdf1d8")+`<circle cx="290" cy="80" r="34" fill="#ffd27a"/>`;
[["#9cc3a2",150],["#5f9b6d",175],["#2f6b4a",205]].forEach(([c,y],i)=>{o+=`<path d="M0 ${y} C ${80+r()*60} ${y-40-r()*30}, ${200+r()*60} ${y+20}, ${W} ${y-30} V${H} H0z" fill="${c}"/>`});
for(let i=0;i<6;i++)o+=`<path d="M${i*70-20} ${H} L${i*70+40} 205" stroke="#e8d38a" stroke-width="3" opacity=".6"/>`;
o+=`<rect x="120" y="186" width="150" height="16" rx="5" fill="#f2441d"/><rect x="118" y="183" width="154" height="5" rx="2" fill="#24525e"/>`;for(let i=0;i<6;i++)o+=`<rect x="${128+i*23}" y="190" width="14" height="6" fill="#ffe9c7"/>`}
else if(type=="chart"){o+=`<rect width="${W}" height="${H}" fill="#eaf1f2"/>`;for(let y=40;y<H;y+=40)o+=`<path d="M0 ${y}H${W}" stroke="#cbd8db"/>`;
let p=`M0 ${H}`,y=190;for(let x=0;x<=W;x+=25){y=Math.max(40,y-r()*28+8);p+=` L${x} ${y}`}o+=`<path d="${p} L${W} ${H}z" fill="#24525e"/><path d="${p.replace(/^M0 \d+ /,'M')}" stroke="#f2441d" stroke-width="4" fill="none"/><circle cx="${W}" cy="${y}" r="9" fill="#f2441d"/>`}
else if(type=="chip"){o+=`<rect width="${W}" height="${H}" fill="#123c35"/>`;for(let i=0;i<22;i++){const x=r()*W,y=r()*H;o+=`<path d="M${x} ${y}h${30+r()*60}v${r()>.5?30:-30}" stroke="#2f8a6f" stroke-width="3" fill="none"/><circle cx="${x}" cy="${y}" r="4" fill="#e8b23a"/>`}
o+=`<rect x="140" y="60" width="120" height="120" rx="8" fill="#1b2326"/><rect x="160" y="80" width="80" height="80" rx="4" fill="#2d3a3f"/><rect x="160" y="80" width="80" height="6" fill="#4c5d63"/>`;for(let i=0;i<8;i++){o+=`<rect x="${148+i*14}" y="48" width="6" height="12" fill="#c9d7db"/><rect x="${148+i*14}" y="180" width="6" height="12" fill="#c9d7db"/><rect x="128" y="${68+i*14}" width="12" height="6" fill="#c9d7db"/><rect x="260" y="${68+i*14}" width="12" height="6" fill="#c9d7db"/>`}}
else if(type=="space"){o+=sky("#0b1530","#23214a");for(let i=0;i<70;i++)o+=`<circle cx="${r()*W}" cy="${r()*H}" r="${r()*1.6+.3}" fill="#fff" opacity="${.4+r()*.6}"/>`;
o+=`<circle cx="120" cy="150" r="64" fill="#f2441d"/><path d="M60 150a64 64 0 0 0 120 0z" fill="#b8301a" opacity=".55"/><ellipse cx="120" cy="150" rx="104" ry="18" fill="none" stroke="#ffd27a" stroke-width="5" transform="rotate(-16 120 150)"/><circle cx="330" cy="58" r="14" fill="#fff4d6"/><circle cx="356" cy="72" r="8" fill="#ffd27a"/>`;
o+=`<g transform="translate(270 140) rotate(-20)"><rect x="-10" y="-10" width="20" height="20" fill="#c9d7db"/><rect x="-52" y="-6" width="38" height="12" fill="#24525e" stroke="#86bccb"/><rect x="14" y="-6" width="38" height="12" fill="#24525e" stroke="#86bccb"/></g>`}
else if(type=="stage"){o+=`<rect width="${W}" height="${H}" fill="#1a1012"/><path d="M200 0 L120 200 H280z" fill="#ffe9b0" opacity=".35"/><ellipse cx="200" cy="205" rx="90" ry="16" fill="#ffe9b0" opacity=".5"/><rect y="200" width="${W}" height="40" fill="#3a2418"/>`;
for(let i=0;i<5;i++){o+=`<path d="M${i*16} 0 q10 120 0 240 h18 q-8 -120 0 -240z" fill="${i%2?'#9e1f1f':'#c22b22'}"/><path d="M${W-i*16} 0 q-10 120 0 240 h-18 q8 -120 0 -240z" fill="${i%2?'#9e1f1f':'#c22b22'}"/>`}
o+=`<circle cx="200" cy="128" r="14" fill="#1a1012"/><path d="M182 205 q18 -72 36 0z" fill="#1a1012"/><rect x="222" y="140" width="3" height="64" fill="#888"/><circle cx="223" cy="138" r="5" fill="#ccc"/>`}
else if(type=="rain"){o+=sky("#8e9ea6","#c7d2d6");for(let i=0;i<90;i++){const x=r()*W,y=r()*H;o+=`<path d="M${x} ${y}l-6 16" stroke="#e9f0f2" stroke-width="1.5" opacity=".7"/>`}
o+=`<rect y="196" width="${W}" height="44" fill="#56656c"/>`;[["#f2441d",120,150],["#24525e",250,165],["#e8b23a",330,140]].forEach(([c,x,y])=>{o+=`<path d="M${x-50} ${y} Q${x} ${y-70} ${x+50} ${y} q-12 -8 -25 0 q-13 -8 -25 0 q-12 -8 -25 0 q-13 -8 -25 0z" fill="${c}"/><path d="M${x} ${y-2}v44 q0 8 -8 8" stroke="#1d2a30" stroke-width="3" fill="none"/>`});
o+=`<ellipse cx="200" cy="218" rx="80" ry="7" fill="#7d9098"/>`}
else if(type=="books"){o+=`<rect width="${W}" height="${H}" fill="#f3e6d3"/>`;const cs=["#f2441d","#24525e","#e8b23a","#3f7f5a","#5a3e8a","#1d2a30","#c98f87"];
[30,130].forEach(sy=>{let x=10;while(x<W-20){const w=14+r()*20,h=60+r()*30;o+=`<rect x="${x}" y="${sy+90-h}" width="${w}" height="${h}" fill="${cs[Math.floor(r()*7)]}"/><rect x="${x+3}" y="${sy+100-h}" width="${w-6}" height="3" fill="#fff" opacity=".5"/>`;x+=w+2}o+=`<rect x="0" y="${sy+90}" width="${W}" height="10" fill="#8a5a3b"/>`})}
else if(type=="coin"){o+=sky("#0f2a30","#16424b");const pts=[];for(let i=0;i<14;i++)pts.push([r()*W,r()*H]);pts.forEach((p,i)=>{const q=pts[(i+3)%14];o+=`<path d="M${p[0]} ${p[1]}L${q[0]} ${q[1]}" stroke="#2f7a8a" stroke-width="1.5"/>`});pts.forEach(p=>o+=`<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="#86bccb"/>`);
for(let i=5;i>=0;i--)o+=`<ellipse cx="200" cy="${160+i*8}" rx="62" ry="18" fill="${i%2?'#c58a14':'#e8b23a'}"/>`;o+=`<circle cx="200" cy="112" r="56" fill="#e8b23a"/><circle cx="200" cy="112" r="44" fill="none" stroke="#c58a14" stroke-width="5"/><text x="200" y="128" text-anchor="middle" font-family="Archivo,sans-serif" font-weight="900" font-size="44" fill="#8a5d0a">irt</text>`}
else if(type=="lab"){o+=`<rect width="${W}" height="${H}" fill="#e4f1ea"/>`;for(let i=0;i<5;i++)o+=`<circle cx="${60+r()*280}" cy="${30+r()*160}" r="${20+r()*40}" fill="#c6e3d2"/>`;
o+=`<path d="M175 40h50v60l50 100a12 12 0 0 1-11 18H136a12 12 0 0 1-11-18l50-100z" fill="#fff" stroke="#24525e" stroke-width="5"/><path d="M152 150h96l28 56a8 8 0 0 1-7 12H131a8 8 0 0 1-7-12z" fill="#3f9a63"/><rect x="168" y="32" width="64" height="12" rx="4" fill="#24525e"/>`;
for(let i=0;i<6;i++)o+=`<circle cx="${165+r()*70}" cy="${160+r()*45}" r="${3+r()*5}" fill="#e4f1ea" opacity=".8"/>`;o+=`<path d="M300 70c40 0 60 30 50 70-40 4-62-26-50-70z" fill="#3f9a63"/><path d="M302 74c20 20 34 40 46 64" stroke="#e4f1ea" stroke-width="3" fill="none"/>`}
else if(type=="pitch"){o+=sky("#2a3b48","#5c7a8a");for(let i=0;i<8;i++)o+=`<path d="M${-100+i*75} ${H} L${110+i*25} 110 L${135+i*25} 110 L${-25+i*75} ${H}z" fill="${i%2?'#3f8f4e':'#4aa35a'}"/>`;
o+=`<path d="M110 110H310" stroke="#3f8f4e" stroke-width="2"/><path d="M60 200 Q200 170 340 200" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/><path d="M200 112 L200 240" stroke="#fff" stroke-width="3" opacity=".7"/>`;
[[40,20],[360,20]].forEach(([x,y])=>{o+=`<rect x="${x-2}" y="${y}" width="4" height="90" fill="#9fb0b8"/><rect x="${x-18}" y="${y}" width="36" height="14" fill="#fff9d6"/><path d="M${x-18} ${y+14} L${x-80} 120 L${x+80} 120 L${x+18} ${y+14}z" fill="#fff9d6" opacity=".12"/>`});
o+=`<circle cx="228" cy="200" r="11" fill="#fff"/><path d="M222 194l12 12M234 194l-12 12" stroke="#1d2a30" stroke-width="2"/>`}
return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${o}</svg>`}


document.querySelectorAll(".art[data-art]").forEach(el=>{el.insertAdjacentHTML("afterbegin",art(el.dataset.art,+el.dataset.seed))});
const grid=g=>{if(g=="cw"){const k=[2,8,12,13,22,24,32,34,35,40,46,49,56,60,63];return {cols:8,html:Array.from({length:64},(_,i)=>`<span class="${k.includes(i)?'k':''}"></span>`).join("")}}
if(g=="su"){const v="5..3.7....9.6..1..8..2..4..1..9..3....8..6..7..2..4..5..1..9..6..";return {cols:9,gap:1,html:Array.from({length:81},(_,i)=>`<span style="font-size:8px">${v[i]&&v[i]!="."?v[i]:""}</span>`).join("")}}
const w=["COLD","CORD","WORD","WARD","WARM"];return {cols:4,html:w.map((x,i)=>[...x].map(c=>`<span class="${i==0||i==4?'o':''}">${i==0||i==4?c:""}</span>`).join("")).join("")}};
document.querySelectorAll("[data-grid]").forEach(el=>{const g=grid(el.dataset.grid);el.style.gridTemplateColumns=`repeat(${g.cols},1fr)`;if(g.gap)el.style.gap=g.gap+"px";el.innerHTML=g.html});
const url=s=>ROOT+"article/"+s.slug+".html";
const tk=D.filter(s=>/min/.test(s.ago)).map(s=>`<a href="${url(s)}">${s.t}</a>`).join("");
const rail=$("#rail");if(rail)rail.innerHTML=tk+tk;
try{const d=new Date();$("#today").textContent=d.toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"});$("#yr").textContent=d.getFullYear()}catch(e){}
let last=null;
const open=id=>{last=document.activeElement;const o=document.getElementById(id);o.hidden=false;document.body.style.overflow="hidden";const f=o.querySelector("input,[data-close]");f&&f.focus()};
const close=()=>{document.querySelectorAll(".ov").forEach(o=>o.hidden=true);document.body.style.overflow="";last&&last.focus&&last.focus()};
document.addEventListener("click",ev=>{const c=ev.target.closest("[data-close]");if(c){if(c.tagName!="A")ev.preventDefault();close();return}if(ev.target.classList.contains("ov"))close()});
document.addEventListener("keydown",ev=>{if(ev.key=="Escape")close();if(ev.key=="/"&&!ev.target.matches("input")){ev.preventDefault();open("search")}});
$("#menuBtn").onclick=()=>open("menu");$("#searchBtn").onclick=()=>open("search");
const esc=t=>String(t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const runQ=()=>{const q=$("#q").value.trim().toLowerCase();const hits=q?D.filter(s=>(s.t+" "+s.d+" "+s.k+" "+s.s).toLowerCase().includes(q)):[];
$("#qres").innerHTML=q?(hits.length?hits.map(s=>`<li><a href="${url(s)}"><time>${esc(s.k)}</time><span>${esc(s.t)}</span></a></li>`).join(""):`<li style="display:block"><span>No stories match that search.</span></li>`):""};
$("#q").addEventListener("input",runQ);
$("#nl").addEventListener("submit",ev=>{ev.preventDefault();$("#nlmsg").textContent="Thanks. Signups go live once a mailing provider is connected to this form.";ev.target.reset()});
const cp=$("#copyLink");if(cp)cp.onclick=async()=>{try{await navigator.clipboard.writeText(location.href);cp.textContent="Link copied"}catch(err){cp.textContent="Copy the address bar link"}};
const bar=$("#bar"),mast=document.querySelector(".mast");
if(mast){const io=new IntersectionObserver(([en])=>bar.classList.toggle("stuck",!en.isIntersecting));io.observe(mast)}
const navLinks=[...document.querySelectorAll("#nav a")];
if(mast){const so=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)navLinks.forEach(a=>a.classList.toggle("on",a.getAttribute("href").endsWith("#"+en.target.id)))}),{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("main [id]").forEach(el=>so.observe(el))}
}
