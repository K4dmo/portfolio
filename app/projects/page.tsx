'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'Yungu',
    subtitle: 'AI-Powered Multi-Channel Communication Hub',
    description:
      'A central AI platform that automates and orchestrates business–client communication across WhatsApp, Instagram, and web. Yungu acts as an intelligent conversation hub: AI agents handle context, answer questions, qualify leads, and cut manual support effort. Companies can also build and configure their own agents (language, business rules, conversation flows). A dedicated integration with Kero Ótica turns the ERP into a conversational interface—for end customers (orders, sales, FAQs) and for managers (reports, KPIs, and operational data via natural language).',
    role: [
      'Project Owner: roadmap, priorities, and stakeholder alignment',
      'Backend development of core platform and integrations (multi-channel, agents, ERP)',
      'CI/CD pipeline design and implementation',
      'Requirements management and traceability',
      'Competitor and market research to guide product decisions',
    ],
    impact: [
      'Centralized, automated communication across WhatsApp, Instagram, and web',
      'Self-service agent creation so clients tailor bots to their operations',
      'Kero Ótica integration: support and sales for end users, plus conversational access to reports and KPIs for managers',
    ],
    technologies: ['Backend APIs', 'Multi-Channel Integration', 'AI Agents', 'CI/CD', 'ERP Integration'],
    category: 'Enterprise Platform / AI',
    image: '🤖',
    screenshots: ['/projects/yungu1.png', '/projects/yungu2.png', '/projects/yungu3.png'],
    github: '#',
    live: '#',
  },
  {
    title: 'Volaris',
    subtitle: 'Adaptive Options Pricing for Non-Stationary Markets',
    description:
      'An adaptive options-pricing engine built for real markets: regime-dependent, multi-asset, and macro-sensitive. Instead of fixed volatility and stable correlations, Volaris detects market regimes, integrates macro signals (SPY, BTC, ETH, USD/BRL), and adjusts risk parameters dynamically—so the model changes when the market does.',
    role: [
      'Led the project end-to-end from ideation to visual identity and full development',
      'Designed and implemented regime detection via Hidden Markov Models (HMM)',
      'Built adaptive volatility estimation and correlated Monte Carlo simulation',
      'Architected data layer with daily ingestion (Massive) and local storage, no real-time external dependencies',
      'Integrated multi-asset dynamics for systemic risk, speculative appetite, and macro stress',
    ],
    impact: [
      'Pricing framework that treats volatility as conditional and risk as dynamic',
      'Macro-aware stochastic engine rather than a static Black-Scholes wrapper',
      'VaR, CVaR, and tail-risk outputs from regime-aware simulations',
    ],
    technologies: ['Python', 'Hidden Markov Models', 'Monte Carlo Simulation', 'Multi-Asset Data Pipeline', 'Statistical Finance'],
    category: 'Quantitative Finance / Research',
    image: '📊',
    screenshots: ['/projects/volaris1.jpeg'],
    github: '#',
    live: '#',
  },
  {
    title: 'Kero Ótica',
    subtitle: 'Sistema de Gestão para Óticas',
    description:
      'A complete ERP solution for optical stores, handling sales, inventory, services, invoices, and fiscal integrations.',
    role: [
      'Developed from scratch a mobile app to extend the full user experience to mobile',
      'Built critical modules on both web and mobile',
      'Implemented fiscal processes, TEF integration, and advanced workflows',
      'Contributed to a mobile pupilometer using camera-based processing',
    ],
    impact: [
      'Used daily by multiple optical stores',
      'Accelerated operations and reduced errors',
      'Enabled unified management across web + mobile platforms',
    ],
    technologies: ['.NET Core', 'Vue.js', 'PostgreSQL', 'React Native'],
    category: 'ERP System',
    image: '👓',
    screenshots: ['/projects/kerootica1.png', '/projects/kerootica2.png'],
    github: '#',
    live: '#',
  },
  {
    title: 'Pupilens',
    subtitle: 'Interactive Digital Lens Catalog',
    description:
      'An intelligent, visual-first catalog for presenting lens models, materials, treatments, and pricing combinations.',
    role: [
      'Developed interactive lens simulations using SVG and animations',
      'Designed pricing algorithms and catalog logic',
      'Integrated frontend and backend layers across the Kero Ótica ecosystem',
    ],
    impact: [
      'Reduced customer doubts by more than 70%',
      'Increased conversion rates for optical consultants',
      'Standardized lens communication across stores',
    ],
    technologies: ['.NET 6', 'React Native', 'Expo', 'PostgreSQL'],
    category: 'Product Catalog',
    image: '🔍',
    screenshots: ['/projects/pupilens1.PNG', '/projects/pupilens2.PNG', '/projects/pupilens3.PNG'],
    github: '#',
    live: '#',
  },
  {
    title: 'VAX Mobile App',
    subtitle: 'Corporate Access & Workflow Companion',
    description:
      'A mobile application designed to give users fast, intuitive access to organizational data, product features, and essential workflows.',
    role: [
      'Project Owner: roadmap, priorities, and stakeholder alignment for the mobile experience',
      'Led mobile development using React Native and Expo',
      'Backend development and integrations with core platform and APIs',
      'Designed lightweight, intuitive UI/UX tailored to mobile workflows',
      'Implemented authentication, navigation, and integration with Yungu APIs',
      'Managed builds and deployment for iOS and Android (CI/CD)',
      'Requirements management, validation, and ongoing evolution with stakeholders',
      'Competitor and market research to guide positioning and feature set',
      'Solution architecture, product shaping, and experimentation around how VAX should live on mobile',
    ],
    impact: [
      'Improved operational mobility',
      'Increased accessibility to organizational tools',
      'Extended VAX\'s ecosystem from web to mobile',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', '.NET APIs'],
    category: 'Mobile Application',
    image: '📲',
    screenshots: ['/projects/vax1.png'],
    github: '#',
    live: '#',
  },
  {
    title: 'VAX Landing Page',
    subtitle: 'Promotional Landing Page',
    description:
      'A modern landing page designed to introduce the VAX Mobile App through clean visuals and strong branding.',
    role: [
      'Designed the full visual identity',
      'Implemented responsive, conversion-focused UX flows',
      'Delivered dark/light mode and high-performance layouts',
    ],
    impact: [
      'Increased user acquisition',
      'Strengthened product image and credibility',
      'Ensured long-term maintainability',
    ],
    technologies: ['HTML5', 'CSS3', 'TypeScript'],
    category: 'Marketing',
    image: '🎨',
    screenshots: ['/projects/vaxLP1.png', '/projects/vaxLP2.png', '/projects/vaxLP3.png'],
    github: '#',
    live: '#',
  },
]

type Project = (typeof projects)[number]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasScreenshots = project.screenshots && project.screenshots.length > 0
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!hasScreenshots || !project.screenshots) return
    const total = project.screenshots.length
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total)
    }, 4500)
    return () => clearInterval(interval)
  }, [hasScreenshots, project.screenshots])

  const currentScreenshot =
    hasScreenshots && project.screenshots ? project.screenshots[activeIndex] : null

  return (
    <motion.div
      className="glass rounded-2xl p-6 md:p-8 glass-hover flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Project Screenshot / Icon */}
      {currentScreenshot ? (
        <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-black/10 relative">
          <img
            src={currentScreenshot}
            alt={project.title}
            className="w-full h-52 md:h-56 object-cover object-top transition-opacity duration-500"
          />
          {project.screenshots && project.screenshots.length > 1 && (
            <div className="absolute bottom-2 right-3 flex gap-1.5">
              {project.screenshots.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex ? 'w-4 bg-white' : 'w-2 bg-white/40'
                  }`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Mostrar imagem ${i + 1} de ${project.title}`}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-6xl mb-4 text-center">{project.image}</div>
      )}

      {/* Category Badge */}
      <div className="mb-4">
        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 dark:text-purple-400 text-xs font-semibold border border-purple-500/30">
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-1 gradient-text">{project.title}</h2>

      {/* Subtitle */}
      {project.subtitle && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          {project.subtitle}
        </p>
      )}

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* My Role Section */}
      {project.role && (
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide flex items-center">
            <span className="w-1 h-4 bg-gradient-to-b from-purple-500 to-blue-500 mr-2 rounded"></span>
            My Role
          </h3>
          <ul className="space-y-1.5">
            {project.role.map((item, idx) => (
              <li
                key={idx}
                className="text-xs text-gray-600 dark:text-gray-400 flex items-start"
              >
                <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">▸</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Impact Section */}
      {project.impact && (
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide flex items-center">
            <span className="w-1 h-4 bg-gradient-to-b from-green-500 to-emerald-500 mr-2 rounded"></span>
            Impact
          </h3>
          <ul className="space-y-1.5">
            {project.impact.map((item, idx) => (
              <li
                key={idx}
                className="text-xs text-gray-600 dark:text-gray-400 flex items-start"
              >
                <span className="text-green-400 mr-2 mt-1 flex-shrink-0">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-lg bg-white/5 dark:bg-white/5 text-xs text-gray-500 dark:text-gray-400 border border-gray-300/20 dark:border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <a
          href={project.github}
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors group"
        >
          <Github size={18} className="mr-2 group-hover:scale-110 transition-transform" />
          <span className="text-sm">Code</span>
        </a>
        <a
          href={project.live}
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors group"
        >
          <ExternalLink
            size={18}
            className="mr-2 group-hover:scale-110 transition-transform"
          />
          <span className="text-sm">Live Demo</span>
        </a>
      </div>
    </motion.div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Browse a selection of my most significant work — each project reflects my commitment to engineering precision, thoughtful design, and delivering solutions with real business impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="glass rounded-2xl p-8 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Code2 className="mx-auto mb-4 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400" />
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Interested in Collaborating?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm open to leadership-driven engineering roles, senior full-stack opportunities, product-focused technical positions, and long-term partnerships. Let's create something meaningful that moves products forward and delivers real impact.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full gradient-bg text-white font-semibold hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

