const menuToggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false")}));

const particleBox=document.querySelector(".particles");
for(let i=0;i<38;i++){const p=document.createElement("i");p.className="particle";p.style.left=Math.random()*100+"%";p.style.animationDuration=(9+Math.random()*18)+"s";p.style.animationDelay=(-Math.random()*20)+"s";p.style.opacity=.2+Math.random()*.5;particleBox.appendChild(p)}

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
