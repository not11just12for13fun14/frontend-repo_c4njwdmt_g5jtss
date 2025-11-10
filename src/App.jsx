import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs tracking-tight text-gray-700 dark:text-gray-200 bg-white/60 dark:bg-white/5 backdrop-blur-md">
      {children}
    </span>
  )
}

function SectionHeading({ overline, title, kicker }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {overline && (
        <div className="mb-3"><Pill>{overline}</Pill></div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      {kicker && (
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          {kicker}
        </p>
      )}
    </div>
  )
}

const projects = [
  {
    title: 'Fintech brand refresh',
    tag: 'Case Study',
    blurb: 'Positioned a seed-stage payments startup with a crisp voice and conversion-focused landing copy.',
  },
  {
    title: 'AI product launch',
    tag: 'Launch',
    blurb: 'End-to-end narrative, website, and emails for a modern AI tool — sold out beta in 48 hours.',
  },
  {
    title: 'SaaS website rewrite',
    tag: 'Website',
    blurb: 'Rebuilt information architecture and messaging for a developer platform. Bounce rate down 32%.',
  },
]

const services = [
  { name: 'Website & landing copy', desc: 'Clear, conversion-first pages with a voice your audience trusts.' },
  { name: 'Product messaging', desc: 'Positioning, narrative, and naming that make sense instantly.' },
  { name: 'Email & lifecycle', desc: 'Onboarding, activation, and launches that feel personal — and perform.' },
]

const testimonials = [
  {
    quote: 'Tight, modern, and perfectly on-brand. The new site finally explains what we do.',
    author: 'Maya J., Founder — fintech',
  },
  {
    quote: 'From vague to vivid. Our demo requests doubled in two weeks.',
    author: 'Dev P., CEO — SaaS',
  },
  {
    quote: 'A calm mind in a chaotic launch. Copy that did the heavy lifting.',
    author: 'Rina L., Product Lead — AI',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [darkMode])

  useEffect(() => {
    const handler = () => setMenuOpen(false)
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  return (
    <div id="top" className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0b0b] dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <a href="#top" className="font-semibold tracking-tight">Ava Lane — Copy</a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#work" className="opacity-80 hover:opacity-100 transition">Work</a>
              <a href="#services" className="opacity-80 hover:opacity-100 transition">Services</a>
              <a href="#about" className="opacity-80 hover:opacity-100 transition">About</a>
              <a href="#testimonials" className="opacity-80 hover:opacity-100 transition">Kind words</a>
              <a href="#contact" className="opacity-80 hover:opacity-100 transition">Contact</a>
            </nav>

            <div className="flex items-center gap-2">
              <button
                aria-label="Toggle theme"
                onClick={() => setDarkMode((v) => !v)}
                className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 p-2 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <a href="#contact" className="hidden sm:inline-flex items-center rounded-full border border-black/10 dark:border-white/20 px-4 py-2 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                Book an intro call
              </a>
              <button className="md:hidden inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/20 p-2" onClick={() => setMenuOpen(true)} aria-label="Open menu">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
        {/* subtle top gradient & blur */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/80 to-transparent dark:from-[#0b0b0b]/80 backdrop-blur-sm" />
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white/80 dark:bg-black/70 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="max-w-6xl mx-auto px-4 sm:px-6"
            >
              <div className="h-16 flex items-center justify-between">
                <a href="#top" className="font-semibold tracking-tight">Ava Lane — Copy</a>
                <button className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/20 p-2" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <X size={18} />
                </button>
              </div>
              <div className="py-6">
                <div className="flex flex-col text-lg divide-y divide-black/10 dark:divide-white/10">
                  {[
                    { href: '#work', label: 'Work' },
                    { href: '#services', label: 'Services' },
                    { href: '#about', label: 'About' },
                    { href: '#testimonials', label: 'Kind words' },
                    { href: '#contact', label: 'Contact' },
                  ].map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="py-4 font-medium hover:opacity-100 opacity-90"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href="#contact" onClick={() => setMenuOpen(false)} className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm hover:opacity-90 dark:bg-white dark:text-black transition">Book an intro call</a>
                  <button
                    aria-label="Toggle theme"
                    onClick={() => setDarkMode((v) => !v)}
                    className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 px-4 py-3 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                  >
                    {darkMode ? 'Light mode' : 'Dark mode'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero with Spline cover */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* subtle gradient overlay that does not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-[#0b0b0b]/70 dark:via-[#0b0b0b]/20 dark:to-[#0b0b0b]/85"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-end pb-24">
          <div className="max-w-2xl">
            <div className="mb-4"><Pill>Creative copywriter for modern brands</Pill></div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
              Words that make complex products feel simple — and irresistible.
            </h1>
            <p className="mt-5 text-lg text-gray-700/90 dark:text-gray-200/90 max-w-xl">
              I help tech, AI, and design-led companies turn ideas into clear messaging, crisp websites, and launches that move.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm hover:opacity-90 dark:bg-white dark:text-black transition">See selected work</a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 px-5 py-3 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading overline="Selected work" title="Sharp copy for thoughtful products" kicker="A few recent projects across SaaS, AI, and fintech." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <article key={i} className="group relative rounded-2xl border border-black/10 dark:border-white/10 p-6 hover:-translate-y-0.5 transition will-change-transform bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm">
                <div className="text-[11px] uppercase tracking-widest text-gray-600/80 dark:text-gray-300/70">{p.tag}</div>
                <h3 className="mt-2 text-xl font-medium leading-snug">{p.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{p.blurb}</p>
                <div className="mt-5 flex items-center gap-2 text-sm">
                  <span className="opacity-70 group-hover:opacity-100 transition">Read case study</span>
                  <span className="opacity-40">→</span>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/0 group-hover:ring-black/10 dark:group-hover:ring-white/20 transition"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20 sm:py-24 bg-gray-50/60 dark:bg-white/[0.03]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading overline="What I do" title="Clear, calm, persuasive" kicker="I write with focus and restraint. Minimalist voice, maximum impact." />
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-black/20 backdrop-blur-sm">
                <h3 className="text-lg font-medium">{s.name}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading overline="About" title="I write to reduce friction" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m a former designer turned copywriter. I partner with founders and product teams to uncover the sharpest angle, then write with the lightest touch. The result: fewer words, stronger signal.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Based in New York — working worldwide</li>
                <li>• Comfortable in technical spaces (AI, devtools, fintech)</li>
                <li>• Collaborative, fast, and detail-obsessed</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-8 bg-gray-50/80 dark:bg-white/[0.03]">
              <h4 className="text-sm uppercase tracking-widest text-gray-600/80 dark:text-gray-300/70">Capabilities</h4>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {['Messaging','Positioning','Web copy','Naming','Emails','Launches','UX microcopy','Content'].map((c) => (
                  <span key={c} className="rounded-full border border-black/10 dark:border-white/15 px-3 py-2 bg-white/70 dark:bg-black/20 text-gray-800 dark:text-gray-200">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading overline="Kind words" title="Clients on the work" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm">
                <blockquote className="text-[15px] leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm opacity-70">{t.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 bg-gray-50/60 dark:bg-white/[0.03]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading overline="Get in touch" title="Tell me about your project" kicker="A short intro call is the fastest way to see if we’re a fit." />
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm hover:opacity-90 dark:bg-white dark:text-black transition">Email</a>
            <a href="#" className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 px-5 py-3 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">Book intro call</a>
          </div>
          <p className="mt-6 text-xs opacity-70">Currently booking projects for next month.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Ava Lane. All rights reserved.
      </footer>

      {/* Floating CTA */}
      <a href="#contact" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 text-sm shadow-lg shadow-black/10 dark:shadow-white/10 hover:opacity-90 transition">
        Let’s talk
      </a>
    </div>
  )
}

export default App
