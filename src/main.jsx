import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Headphones,
  Layers3,
  LayoutDashboard,
  Linkedin,
  Menu,
  MessageCircle,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Timer,
  X
} from "lucide-react";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const navItems = ["Home", "Services", "Portfolio", "About", "Contact"];

const services = [
  { title: "Website Development", icon: Globe2, text: "Conversion-focused business websites with premium motion and fast delivery.", span: "lg:col-span-2" },
  { title: "Web Applications", icon: LayoutDashboard, text: "Secure dashboards, portals and SaaS platforms built for daily operations.", span: "" },
  { title: "Mobile Apps", icon: Smartphone, text: "Responsive app experiences and mobile-first product interfaces.", span: "" },
  { title: "UI/UX Design", icon: Layers3, text: "Elegant interfaces, product systems and prototypes your users understand instantly.", span: "lg:col-span-2" },
  { title: "SEO Optimization", icon: Search, text: "Technical SEO, performance tuning and clean content structure for discoverability.", span: "" },
  { title: "AI Solutions", icon: BrainCircuit, text: "AI assistants, automation and intelligent workflows tailored to your business.", span: "lg:col-span-2" }
];

const projects = [
  {
    name: "SchoolMoon",
    desc: "A modern education platform for school presence, admissions and digital communication.",
    tech: ["React", "Tailwind", "SEO", "Analytics"],
    gradient: "from-blue-500 via-cyan-400 to-violet-500"
  },
  {
    name: "Sri Senthil Jewellery",
    desc: "A premium jewellery website designed to present trust, craft and showroom collections.",
    tech: ["UI/UX", "Performance", "Catalog", "Local SEO"],
    gradient: "from-amber-300 via-fuchsia-500 to-blue-600"
  },
  {
    name: "Gowtham Looms",
    desc: "A textile brand experience with rich visuals, product storytelling and fast mobile pages.",
    tech: ["Brand Site", "Responsive", "CMS-ready", "SEO"],
    gradient: "from-emerald-300 via-cyan-400 to-blue-700"
  }
];

const reasons = [
  ["Fast Delivery", Timer],
  ["Premium Design", Sparkles],
  ["Affordable Pricing", CheckCircle2],
  ["24/7 Support", Headphones],
  ["Modern Technology", Code2],
  ["SEO Friendly", ShieldCheck]
];

const testimonials = [
  {
    quote: "Zytheron gave our idea the exact premium digital feel we wanted. Fast, clear and beautifully executed.",
    name: "Aarav Kumar",
    role: "Founder, RetailTech"
  },
  {
    quote: "Their design sense is excellent. The website felt high-end from the first preview and performs brilliantly.",
    name: "Meera S",
    role: "Brand Owner"
  },
  {
    quote: "Reliable team, smooth communication and a launch-ready product without unnecessary delays.",
    name: "Vikram R",
    role: "Operations Lead"
  }
];

const team = [
  ["Inthrajith", "Founder & Full-stack Developer"],
  ["Zytheron Studio", "UI/UX and Brand Systems"],
  ["AI Lab", "Automation and AI Engineering"]
];

function useGsapReveals() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%"
            }
          }
        );
      });

      gsap.utils.toArray(".timeline-step").forEach((el, index) => {
        gsap.fromTo(
          el,
          { x: index % 2 ? 40 : -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 78%"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
}

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-[#f8fbff]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center gap-5">
        <div className="absolute h-32 w-32 rounded-full bg-cyan-400/25 blur-3xl" />
        <motion.div
          className="grid h-20 w-20 place-items-center rounded-3xl border border-blue-200/70 bg-white/80 shadow-glow backdrop-blur-xl"
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{ rotate: { duration: 2, repeat: Infinity, ease: "linear" }, scale: { duration: 1.4, repeat: Infinity } }}
        >
          <Sparkles className="h-9 w-9 text-blue-600" />
        </motion.div>
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-600">Zytheron</p>
      </div>
    </motion.div>
  );
}

function ThreeHero() {
  const mountRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!mountRef.current) return undefined;

    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const materialA = new THREE.MeshStandardMaterial({ color: "#2563EB", roughness: 0.25, metalness: 0.75, emissive: "#0f2f75", emissiveIntensity: 0.35 });
    const materialB = new THREE.MeshStandardMaterial({ color: "#7C3AED", roughness: 0.2, metalness: 0.65, emissive: "#351061", emissiveIntensity: 0.35 });
    const materialC = new THREE.MeshStandardMaterial({ color: "#06B6D4", roughness: 0.18, metalness: 0.85, emissive: "#064b56", emissiveIntensity: 0.45 });

    const shapes = [
      new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 1), materialA),
      new THREE.Mesh(new THREE.TorusKnotGeometry(0.75, 0.22, 120, 16), materialB),
      new THREE.Mesh(new THREE.OctahedronGeometry(0.9, 0), materialC)
    ];

    shapes[0].position.set(-2.4, 1.2, 0);
    shapes[1].position.set(2.45, 0.55, -0.25);
    shapes[2].position.set(0.8, -1.8, 0.4);
    shapes.forEach((shape) => group.add(shape));

    const particles = new THREE.BufferGeometry();
    const count = 260;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: "#8BE9FF", size: 0.025, transparent: true, opacity: 0.75 });
    const points = new THREE.Points(particles, particleMaterial);
    scene.add(points);

    scene.add(new THREE.AmbientLight("#ffffff", 1.2));
    const light = new THREE.PointLight("#86e9ff", 14, 25);
    light.position.set(2.5, 3, 4);
    scene.add(light);

    let raf = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      if (!prefersReducedMotion) {
        group.rotation.y = t * 0.12;
        group.rotation.x = Math.sin(t * 0.3) * 0.08;
        shapes.forEach((shape, index) => {
          shape.rotation.x += 0.006 + index * 0.001;
          shape.rotation.y += 0.008 + index * 0.001;
          shape.position.y += Math.sin(t * 1.4 + index) * 0.0018;
        });
        points.rotation.y = t * 0.025;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      mount.removeChild(renderer.domElement);
      particles.dispose();
      particleMaterial.dispose();
      shapes.forEach((shape) => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
      renderer.dispose();
    };
  }, [prefersReducedMotion]);

  return <div ref={mountRef} className="absolute inset-0 opacity-80" aria-hidden="true" />;
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl md:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Zytheron home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 shadow-cyan">
            <Sparkles className="h-5 w-5 text-white" />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">Zytheron</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/70 transition hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-100 md:inline-flex">
          Get Started
        </a>
        <button className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-white/80 hover:bg-white/10 hover:text-white">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-zyBg pt-28">
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-25" />
      <ThreeHero />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-4 py-16">
        <div className="max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            <Star className="h-4 w-4" /> Premium software studio for ambitious brands
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            Transforming Ideas Into Digital Reality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl"
          >
            We build modern websites, web applications, mobile apps and AI-powered digital solutions.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-7 py-4 font-bold text-white shadow-glow transition hover:scale-[1.03]">
              Start Your Project <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-xl transition hover:border-cyan-300/50 hover:bg-white/15">
              View Portfolio <ExternalLink className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const target = { value: 0 };
    const tween = gsap.to(target, {
      value,
      duration: 1.6,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%" },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = `${Math.round(target.value)}${suffix}`;
      }
    });

    return () => tween.kill();
  }, [value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.03] py-12">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3">
        {[
          [50, "+", "Projects Completed"],
          [20, "+", "Happy Clients"],
          [99, "%", "Client Satisfaction"]
        ].map(([number, suffix, label]) => (
          <div key={label} className="reveal rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl">
            <div className="text-5xl font-black text-white">
              <Counter value={number} suffix={suffix} />
            </div>
            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad">
      <SectionTitle eyebrow="Services" title="Digital products with a premium finish" text="Every service is shaped around speed, polish and business outcomes." />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, icon: Icon, text, span }) => (
          <motion.article
            key={title}
            whileHover={{ y: -8, scale: 1.01 }}
            className={`reveal group relative min-h-64 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.14] to-white/[0.04] p-6 backdrop-blur-xl ${span}`}
          >
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl transition group-hover:bg-violet-400/25" />
            <div className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-cyan">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="relative z-10 mt-8 text-2xl font-bold text-white">{title}</h3>
            <p className="relative z-10 mt-4 leading-7 text-slate-300">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section-pad bg-white/[0.025]">
      <SectionTitle eyebrow="Portfolio" title="Showcase-ready brand experiences" text="Premium project systems that look sharp, load fast and feel trustworthy." />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article key={project.name} whileHover={{ y: -10 }} className="reveal overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className={`relative h-56 bg-gradient-to-br ${project.gradient}`}>
              <div className="absolute inset-4 rounded-2xl border border-white/20 bg-slate-950/35 p-5 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-300" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-300" />
                </div>
                <div className="mt-8 h-8 w-3/4 rounded-lg bg-white/35" />
                <div className="mt-4 h-24 rounded-2xl bg-white/20" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              <p className="mt-3 min-h-20 leading-7 text-slate-300">{project.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100">
                  Live Demo <ExternalLink className="h-4 w-4" />
                </a>
                <a href="https://github.com/zytheron" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                  GitHub <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = ["Discovery", "Design", "Development", "Testing", "Launch"];
  return (
    <section id="about" className="section-pad">
      <SectionTitle eyebrow="Process" title="A clear path from idea to launch" text="No confusion, no endless delays. Just focused execution with premium checkpoints." />
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400 md:left-1/2" />
          {steps.map((step, index) => (
            <div key={step} className={`timeline-step relative mb-10 flex ${index % 2 ? "md:justify-end" : "md:justify-start"}`}>
              <div className="ml-14 w-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl md:ml-0 md:w-[44%]">
                <div className="absolute left-0 top-6 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 font-black text-white md:left-1/2 md:-translate-x-1/2">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white">{step}</h3>
                <p className="mt-3 text-slate-300">
                  {step === "Discovery" && "We understand goals, users, market position and success metrics."}
                  {step === "Design" && "We craft the visual direction, structure and premium product experience."}
                  {step === "Development" && "We build clean, scalable, fast and responsive digital products."}
                  {step === "Testing" && "We test performance, accessibility, mobile behavior and launch readiness."}
                  {step === "Launch" && "We deploy, optimize and support the product after it goes live."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section-pad bg-white/[0.025]">
      <SectionTitle eyebrow="Why Zytheron" title="Built for founders who care about quality" />
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(([label, Icon]) => (
          <motion.div key={label} whileHover={{ y: -6 }} className="reveal flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/15 text-cyan-200">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">{label}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((value) => (value + 1) % testimonials.length), 4200);
    return () => window.clearInterval(id);
  }, []);

  const active = testimonials[index];

  return (
    <section className="section-pad">
      <SectionTitle eyebrow="Testimonials" title="Trusted by ambitious teams" />
      <div className="reveal mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-8 text-center shadow-glow backdrop-blur-2xl sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div key={active.name} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
              <p className="text-2xl font-semibold leading-10 text-white">"{active.quote}"</p>
              <p className="mt-8 font-bold text-cyan-200">{active.name}</p>
              <p className="mt-1 text-sm text-slate-400">{active.role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((item, dotIndex) => (
              <button key={item.name} onClick={() => setIndex(dotIndex)} className={`h-2.5 rounded-full transition-all ${dotIndex === index ? "w-8 bg-cyan-300" : "w-2.5 bg-white/25"}`} aria-label={`Show testimonial ${dotIndex + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section-pad bg-white/[0.025]">
      <SectionTitle eyebrow="Team" title="Small team, sharp execution" text="A lean premium studio model focused on craft, speed and real business results." />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        {team.map(([name, role], index) => (
          <motion.article key={name} whileHover={{ y: -8, rotateX: 3 }} className="reveal rounded-3xl border border-white/10 bg-white/[0.07] p-7 text-center backdrop-blur-xl">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-400 text-3xl font-black text-white shadow-cyan">
              {index === 0 ? "IZ" : index === 1 ? "ZS" : "AI"}
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white">{name}</h3>
            <p className="mt-2 text-slate-300">{role}</p>
            <div className="mt-6 flex justify-center gap-3">
              <a href="https://github.com/zytheron" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/75 transition hover:bg-white/10 hover:text-white" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#contact" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/75 transition hover:bg-white/10 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad">
      <SectionTitle eyebrow="Contact" title="Start your next digital product" text="Tell us what you want to build. Zytheron will help turn it into a launch-ready reality." />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/30 via-violet-600/20 to-cyan-400/20 p-8 backdrop-blur-xl">
          <h3 className="text-3xl font-black text-white">Transforming Ideas Into Digital Reality</h3>
          <p className="mt-5 leading-8 text-slate-200">
            Websites, apps, AI systems and premium product interfaces for businesses that want to look credible from day one.
          </p>
          <div className="mt-8 space-y-4 text-slate-200">
            <p>Phone: +91 6380898030</p>
            <p>Email: inthrajith35@gmail.com</p>
            <p>Serving startups, schools, retailers and growing brands.</p>
          </div>
        </div>
        <form className="reveal rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-semibold text-white">
              Name
              <input required className="form-field" placeholder="Your name" />
            </label>
            <label className="space-y-2 text-sm font-semibold text-white">
              Email
              <input required type="email" className="form-field" placeholder="you@example.com" />
            </label>
            <label className="space-y-2 text-sm font-semibold text-white sm:col-span-2">
              Phone
              <input className="form-field" placeholder="+91 98765 43210" />
            </label>
            <label className="space-y-2 text-sm font-semibold text-white sm:col-span-2">
              Project Details
              <textarea required className="form-field min-h-36 resize-none" placeholder="Tell us about the website, app or AI solution you need." />
            </label>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-6 py-4 font-bold text-white shadow-glow transition hover:scale-[1.02]">
              Send Message <ArrowRight className="h-5 w-5" />
            </button>
            <a href="https://wa.me/916380898030" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/15">
              WhatsApp Us <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href="https://wa.me/916380898030" className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/35 transition hover:scale-110" aria-label="WhatsApp Zytheron">
        <MessageCircle className="h-7 w-7" />
      </a>
      <a href="#contact" className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-2xl shadow-cyan-500/30 transition hover:scale-110" aria-label="AI assistant">
        <Bot className="h-7 w-7" />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 px-4 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <span className="text-xl font-black text-white">Zytheron</span>
          </div>
          <p className="mt-5 max-w-md leading-7 text-slate-300">Transforming Ideas Into Digital Reality through premium websites, apps, AI solutions and modern digital systems.</p>
        </div>
        <div>
          <h4 className="font-bold text-white">Quick Links</h4>
          <div className="mt-4 grid gap-3 text-slate-300">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white">Social</h4>
          <div className="mt-4 flex gap-3">
            <a href="https://github.com/zytheron" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/75 hover:bg-white/10 hover:text-white" aria-label="GitHub">
              <Github />
            </a>
            <a href="#contact" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/75 hover:bg-white/10 hover:text-white" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="https://wa.me/916380898030" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/75 hover:bg-white/10 hover:text-white" aria-label="WhatsApp">
              <MessageCircle />
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-sm text-slate-500">Copyright 2026 Zytheron. All rights reserved.</p>
    </footer>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  useGsapReveals();

  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(id);
  }, []);

  const pageVariants = useMemo(() => ({ initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.5 } } }), []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <motion.main initial="initial" animate="animate" variants={pageVariants} className="premium-light min-h-screen bg-zyBg text-slate-950">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <WhyChoose />
        <Testimonials />
        <Team />
        <Contact />
        <Footer />
        <FloatingButtons />
      </motion.main>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
