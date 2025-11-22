--- README.md ---

# Joaqamole Portfolio (React + Vite)

This repository is a production-ready React (Vite) scaffold for your portfolio site.
It uses JSON-driven content for Projects and Skills, a dark theme with ocean-blue palette, and a Logbook (form) that stores entries locally and submits to Formspree.

## Quick start

1. Clone into a folder and `cd` into it.
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Build: `npm run build`
5. Preview production: `npm run preview`

## Deploy

- Vercel: import the repo, set build command `npm run build` and output `dist`.
- Netlify: drag-and-drop `dist` or connect repo and set build command `npm run build`.

## Contact / Logbook

This scaffold uses Formspree for form delivery. See `src/pages/Logbook.jsx` for instructions and where to place your Formspree endpoint.

--- package.json ---
{
"name": "joaqamole-portfolio",
"version": "1.0.0",
"private": true,
"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview"
},
"dependencies": {
"react": "18.2.0",
"react-dom": "18.2.0",
"react-router-dom": "6.14.1"
},
"devDependencies": {
"vite": "5.1.3"
}
}

--- vite.config.js ---
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
plugins: [react()],
base: './'
})

--- index.html ---

<!doctype html>
<html lang="en">
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Joaquin • Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

--- src/main.jsx ---
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>
)

--- src/App.jsx ---
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Logbook from './pages/Logbook'
import Contact from './pages/Contact'

export default function App(){
return (

<div className="app">
<Nav />
<main className="page-container">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/projects" element={<Projects/>} />
<Route path="/skills" element={<Skills/>} />
<Route path="/logbook" element={<Logbook/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
</main>
<footer className="site-footer">© {new Date().getFullYear()} Joaquin — Built with care.</footer>
</div>
)
}

--- src/index.css ---
:root{
--bg: #0b1320;
--surface: #0f1724;
--muted: #1f2933;
--text: #e6eef6;
--accent: #00a9e0;
--primary: #0f4c81;
--glass: rgba(255,255,255,0.03);
--radius: 10px;
--transition: 280ms cubic-bezier(.2,.9,.2,1);
}

\*{box-sizing:border-box}
html,body,#root{height:100%}
body{margin:0;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial; background:var(--bg); color:var(--text);}

.app{display:flex;min-height:100vh;flex-direction:column}
.page-container{flex:1;max-width:1100px;margin:2.2rem auto;padding:1rem}
.site-footer{text-align:center;padding:1rem 0;color:rgba(230,238,246,0.7);background:transparent}

/_ Nav _/
.nav{display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;background:transparent;position:sticky;top:0}
.brand{display:flex;gap:0.75rem;align-items:center}
.logo{font-family:Poppins,Inter;font-weight:600;font-size:1.125rem;letter-spacing:0.4px}
.nav-links{display:flex;gap:0.75rem}
.nav-links a{color:var(--text);padding:0.5rem 0.75rem;border-radius:8px;transition:var(--transition);text-decoration:none}
.nav-links a:hover{background:var(--glass);transform:translateY(-3px)}

/_ Cards _/
.grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}
.card{background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);border-radius:var(--radius);padding:1rem;box-shadow:0 6px 18px rgba(2,6,23,0.6);transition:transform var(--transition), box-shadow var(--transition)}
.card:hover{transform:translateY(-6px);box-shadow:0 12px 30px rgba(0,0,0,0.6)}
.card h3{margin:0 0 0.25rem 0}
.card p{margin:0 0 0.5rem 0;color:rgba(230,238,246,0.8);font-size:0.95rem}
.btn{display:inline-block;padding:0.5rem 0.8rem;border-radius:8px;background:var(--accent);color:#002133;text-decoration:none;font-weight:600;transition:var(--transition)}
.btn:hover{transform:translateY(-3px)}

/_ Modal _/
.modal{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(2,6,23,0.6)}
.modal-content{max-width:920px;width:95%;background:var(--surface);padding:1.25rem;border-radius:12px}

/_ Progress circle _/
.skill-grid{display:flex;flex-wrap:wrap;gap:1rem}
.skill{width:120px;text-align:center}
.skill svg{display:block;margin:0 auto}
.skill .label{margin-top:0.5rem;font-size:0.9rem}

/_ Logbook entries _/
.logbook-list{display:flex;flex-direction:column;gap:0.5rem}
.entry{background:var(--muted);padding:0.75rem;border-radius:8px}
.entry .meta{font-size:0.8rem;color:rgba(230,238,246,0.65)}

/_ small screens _/
@media(max-width:640px){.nav-links{display:none}}

/_ slide-up page transition helper _/
.page-slide{opacity:0;transform:translateY(10px);transition:opacity 420ms ease, transform 420ms ease}
.page-slide.show{opacity:1;transform:translateY(0)}

--- src/components/Nav.jsx ---
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav(){
const loc = useLocation()
return (

<nav className="nav">
<div className="brand">
<div className="logo">Joaquin</div>
<div style={{color:'rgba(230,238,246,0.6)',fontSize:'0.9rem'}}>Meticulous · CS</div>
</div>

      <div className="nav-links">
        <Link to="/" className={loc.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/about">About</Link>
        <Link to="/logbook">Logbook</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>

)
}

--- src/components/ProjectCard.jsx ---
import React from 'react'

export default function ProjectCard({project,onOpen}){
return (

<article className="card">
<h3>{project.title}</h3>
<p>{project.short}</p>
<div style={{display:'flex',gap:'0.5rem',alignItems:'center'}}>
<button className="btn" onClick={()=>onOpen(project)}>Details</button>
{project.repo && <a className="btn" href={project.repo} target="\_blank" rel="noreferrer" style={{background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'var(--text)'}}>Repo</a>}
</div>
</article>
)
}

--- src/components/ProjectModal.jsx ---
import React from 'react'

export default function ProjectModal({project,onClose}){
if(!project) return null
return (

<div className="modal" onClick={onClose}>
<div className="modal-content" onClick={e=>e.stopPropagation()}>
<h2>{project.title}</h2>
<p style={{opacity:0.9}}>{project.description}</p>
<p><strong>Tech:</strong> {project.tech.join(', ')}</p>
<div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:12}}>
{project.screenshots && project.screenshots.map((s,i)=> (
<img key={i} src={s} alt="screenshot" style={{width:160,height:100,objectFit:'cover',borderRadius:8}} />
))}
</div>
<div style={{marginTop:12}}>
<button className="btn" onClick={onClose}>Close</button>
</div>
</div>
</div>
)
}

--- src/components/SkillCircle.jsx ---
import React, {useEffect, useRef} from 'react'

export default function SkillCircle({logo,name,level}){
const ref = useRef()
useEffect(()=>{
const circle = ref.current
if(!circle) return
const radius = circle.r.baseVal.value
const circumference = 2 _ Math.PI _ radius
circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference
const offset = circumference - (level/100) \* circumference
setTimeout(()=>{
circle.style.transition = 'stroke-dashoffset 900ms ease-out'
circle.style.strokeDashoffset = offset
}, 120)
},[level])

return (

<div className="skill">
<svg width="96" height="96" viewBox="0 0 120 120">
<defs></defs>
<g transform="translate(60,60)">
<circle r="44" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="12"></circle>
<circle ref={ref} r="44" fill="none" stroke="var(--accent)" strokeWidth="12" strokeLinecap="round" transform="rotate(-90)" />
<foreignObject x="-28" y="-28" width="56" height="56">
<div style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}>
<img src={logo} alt="logo" style={{width:34,height:34}} />
</div>
</foreignObject>
</g>
</svg>
<div className="label">{name}</div>
</div>
)
}

--- src/pages/Home.jsx ---
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

export default function Home(){
const [projects,setProjects] = useState([])
const [open,setOpen] = useState(null)

useEffect(()=>{
fetch('/assets/data/projects.json').then(r=>r.json()).then(setProjects)
},[])

return (

<section className={'page-slide show'}>
<h1 style={{fontFamily:'Poppins,Inter',fontSize:28}}>Joaquin — Meticulous CS Student</h1>
<p style={{opacity:0.8}}>I build considered software & games. Below are highlights; explore for details.</p>

      <h2 style={{marginTop:18}}>Featured</h2>
      <div className="grid" style={{marginTop:8}}>
        {projects.slice(0,2).map(p=> <ProjectCard key={p.id} project={p} onOpen={setOpen} />)}
      </div>

      <div style={{marginTop:18}}>
        <Link to="/projects" className="btn">View all projects</Link>
      </div>

      <ProjectModal project={open} onClose={()=>setOpen(null)} />
    </section>

)
}

--- src/pages/Projects.jsx ---
import React, {useEffect, useState} from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

export default function Projects(){
const [projects,setProjects] = useState([])
const [open,setOpen] = useState(null)
useEffect(()=>{fetch('/assets/data/projects.json').then(r=>r.json()).then(setProjects)},[])
return (

<section className={'page-slide show'}>
<h1>Projects</h1>
<p style={{opacity:0.8}}>Hybrid cards — click for details.</p>
<div style={{marginTop:12}} className="grid">
{projects.map(p=> <ProjectCard key={p.id} project={p} onOpen={setOpen} />)}
</div>
<ProjectModal project={open} onClose={()=>setOpen(null)} />
</section>
)
}

--- src/pages/Skills.jsx ---
import React, {useEffect, useState} from 'react'
import SkillCircle from '../components/SkillCircle'

export default function Skills(){
const [skills,setSkills] = useState([])
useEffect(()=>{fetch('/assets/data/skills.json').then(r=>r.json()).then(setSkills)},[])

return (

<section className={'page-slide show'}>
<h1>Skills</h1>
<p style={{opacity:0.8}}>Technical stack — current competence visualized. "Learning Now" appears below.</p>
<div style={{marginTop:12}} className="skill-grid">
{skills.map(s=> <SkillCircle key={s.name} {...s} />)}
</div>

      <h2 style={{marginTop:18}}>Learning now</h2>
      <p style={{opacity:0.75}}>C++, Rust — systems & performance-focused languages I'm actively learning.</p>
    </section>

)
}

--- src/pages/About.jsx ---
import React from 'react'

export default function About(){
return (

<section className={'page-slide show'}>
<h1>About</h1>
<p style={{opacity:0.9}}>Professional but conversational — meticulous, detail-focused, and curious about the science of computation. I enjoy algorithms, data structures, and efficient systems. Outside of academics I keep things light but always aim for high-quality work.</p>

      <h2 style={{marginTop:16}}>Timeline</h2>
      <ul>
        <li>Currently: BS Computer Science, University of Makati</li>
        <li>2025: Built UMak Link (lost & found) for OHSO</li>
        <li>2025: Dungeon Frontier — 3D mobile roguelike (course project)</li>
      </ul>
    </section>

)
}

--- src/pages/Logbook.jsx ---
import React, {useEffect, useState} from 'react'

// NOTE: Replace the FORM_ENDPOINT value with your Formspree endpoint (or other service)
const FORM_ENDPOINT = '<YOUR_FORMSPREE_ENDPOINT>'

export default function Logbook(){
const [entries,setEntries] = useState([])
const [form,setForm] = useState({name:'',message:''})
useEffect(()=>{
const stored = JSON.parse(localStorage.getItem('logbook.entries')||'[]')
setEntries(stored.reverse())
},[])

function handleChange(e){setForm(f=>({...f,[e.target.name]:e.target.value}))}

async function handleSubmit(e){
e.preventDefault()
const entry = {name:form.name||'Anonymous',message:form.message,date:new Date().toISOString()}
// save locally
const next = [entry,...entries].slice(0,200)
localStorage.setItem('logbook.entries', JSON.stringify(next.reverse()))
setEntries(next)
setForm({name:'',message:''})

    // send to Formspree for delivery (optional)
    if(FORM_ENDPOINT && FORM_ENDPOINT.includes('formspree')){
      try{await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(entry)})}catch(err){console.warn('Formspree send failed',err)}
    }

}

return (

<section className={'page-slide show'}>
<h1>Logbook</h1>
<p style={{opacity:0.8}}>Leave a short note — your name/alias and message will appear below. Messages are stored locally and optionally sent to Formspree.</p>

      <form onSubmit={handleSubmit} style={{display:'grid',gap:8,maxWidth:640}}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name or alias" style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'var(--text)'}} />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Share a short note" rows={4} style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'var(--text)'}} />
        <div style={{display:'flex',gap:8}}>
          <button className="btn" type="submit">Log entry</button>
        </div>
      </form>

      <div style={{marginTop:18}} className="logbook-list">
        {entries.length === 0 && <p style={{opacity:0.7}}>No entries yet. Be the first to sign the logbook.</p>}
        {entries.map((e,i)=> (
          <div key={i} className="entry">
            <div className="meta">{e.name} · {new Date(e.date).toLocaleString()}</div>
            <div style={{marginTop:6}}>{e.message}</div>
          </div>
        ))}
      </div>
    </section>

)
}

--- src/pages/Contact.jsx ---
import React, {useState} from 'react'

export default function Contact(){
const [form,setForm] = useState({name:'',email:'',message:''})
function handleChange(e){setForm(f=>({...f,[e.target.name]:e.target.value}))}
function handleSubmit(e){e.preventDefault();alert('This demo sends via Formspree when configured.');setForm({name:'',email:'',message:''})}
return (

<section className={'page-slide show'}>
<h1>Contact</h1>
<p style={{opacity:0.8}}>Use this form to send a direct message — configure Formspree endpoint for delivery.</p>
<form onSubmit={handleSubmit} style={{display:'grid',gap:8,maxWidth:640}}>
<input name="name" value={form.name} onChange={handleChange} placeholder="Your name" style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'var(--text)'}} />
<input name="email" value={form.email} onChange={handleChange} placeholder="Your email" style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'var(--text)'}} />
<textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={6} style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'var(--text)'}} />
<div style={{display:'flex',gap:8}}>
<button className="btn" type="submit">Send</button>
</div>
</form>
</section>
)
}

--- assets/data/projects.json ---
[
{
"id": "umak-link",
"title": "UMak Link",
"short": "Online lost & found for the University of Makati (OHSO).",
"description": "A system for reporting and reclaiming lost items, with admin moderation and inventory tracking.",
"role": "Full-stack developer",
"tech": ["HTML","CSS","JavaScript","PHP","MySQL"],
"screenshots": ["/assets/images/umak-1.png","/assets/images/umak-2.png"],
"repo": "",
"demo": "",
"date": "2025-04"
},
{
"id": "dungeon-frontier",
"title": "Dungeon Frontier",
"short": "3D mobile roguelike game (course project).",
"description": "Procedural roguelike built in Unity focused on level generation and mobile-friendly controls.",
"role": "Gameplay & systems",
"tech": ["Unity","C#"],
"screenshots": ["/assets/images/dungeon-1.png","/assets/images/dungeon-2.png"],
"repo": "",
"demo": "",
"date": "2025-03"
},
{
"id": "acadenza",
"title": "Acadenza",
"short": "Student productivity site (planned).",
"description": "Lightweight planner with timelines, study logs, and a Pomodoro tracker.",
"role": "Product/Developer",
"tech": ["HTML","CSS","JavaScript"],
"screenshots": [],
"repo": "",
"demo": "",
"date": "planned"
}
]

--- assets/data/skills.json ---
[
{"name":"HTML","logo":"/assets/icons/html.svg","level":85},
{"name":"CSS","logo":"/assets/icons/css.svg","level":80},
{"name":"JavaScript","logo":"/assets/icons/js.svg","level":70},
{"name":"PHP","logo":"/assets/icons/php.svg","level":60},
{"name":"React","logo":"/assets/icons/react.svg","level":30},
{"name":"Tailwind","logo":"/assets/icons/tailwind.svg","level":35},
{"name":"Java","logo":"/assets/icons/java.svg","level":65},
{"name":"C#","logo":"/assets/icons/csharp.svg","level":60},
{"name":"Python","logo":"/assets/icons/python.svg","level":60},
{"name":"C++","logo":"/assets/icons/cpp.svg","level":15},
{"name":"Rust","logo":"/assets/icons/rust.svg","level":10}
]

--- assets/icons/README.txt ---
Place SVG icons named as referenced in skills.json into this folder. Use simple brand glyphs (square 256px svg recommended). Example icons: html.svg, css.svg, js.svg, php.svg, react.svg, tailwind.svg, java.svg, csharp.svg, python.svg, cpp.svg, rust.svg

--- assets/images/README.txt ---
Place project screenshots here. Filenames referenced in projects.json are examples. If you don't have images yet, place placeholder PNGs named accordingly.

--- NOTES.md ---

- Formspree setup: create a form at https://formspree.io, copy the endpoint and replace FORM_ENDPOINT in src/pages/Logbook.jsx.
- Local testing: the Logbook stores entries in localStorage so visitors will see entries on that browser/device.
- Deployment: Vercel or Netlify recommended; Netlify has built-in forms but Formspree is simpler if you prefer email delivery.

--- END ---
