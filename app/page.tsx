'use client'

import { motion } from 'framer-motion'
import SectionCard from '@/components/SectionCard'
import Monogram from '@/components/Monogram'
import { User, Briefcase, FolderKanban, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-stretch mb-24"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left: Copy */}
          <div className="relative h-full">
            <div className="pl-0 lg:pl-6 border-l-0 lg:border-l-4 border-transparent lg:border-purple-500/40 rounded h-full min-h-[320px] md:min-h-[380px] flex flex-col justify-center">
              <motion.div
                className="mb-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <Monogram size="lg" className="inline-block" />
              </motion.div>
              <motion.h1
                className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                Pedro Pancotte
              </motion.h1>
              <motion.span
                className="inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-wide uppercase text-purple-600 dark:text-purple-400 bg-purple-500/10 dark:bg-purple-400/10 border border-purple-500/20 dark:border-purple-400/20 mb-6 max-w-max"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                Project Manager · Software Engineer
              </motion.span>
              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Crafting high-impact digital products through engineering excellence, thoughtful design, and a leadership mindset focused on continuous evolution and meaningful results.
              </motion.p>
              <motion.p
                className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mt-4 leading-relaxed"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                5+ years delivering robust web and mobile solutions.
              </motion.p>
            </div>
          </div>

          {/* Right: Photo */}
          <motion.div
            className="w-full max-w-[420px] lg:max-w-[460px] rounded-2xl overflow-hidden shrink-0 justify-self-center lg:justify-self-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/[0.02] border border-gray-200/80 dark:border-white/10 shadow-xl shadow-gray-200/30 dark:shadow-black/30 overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Pedro Pancotte"
                className="block w-full h-auto object-cover object-top"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Section Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <SectionCard
            title="About Me"
            description="Discover my background, skills, and what drives my passion for creating impactful solutions."
            href="/about"
            icon={<User />}
            delay={0.1}
          />
          <SectionCard
            title="Professional Experience"
            description="Explore my career journey, roles, and the valuable experiences that have shaped my expertise."
            href="/experience"
            icon={<Briefcase />}
            delay={0.2}
          />
          <SectionCard
            title="Projects"
            description="Browse through a curated collection of my work, showcasing innovative solutions and creative problem-solving."
            href="/projects"
            icon={<FolderKanban />}
            delay={0.3}
          />
          <SectionCard
            title="Get in Contact"
            description="Let's connect! Reach out to discuss opportunities, collaborations, or just to say hello."
            href="/contact"
            icon={<Mail />}
            delay={0.4}
          />
        </div>

        {/* Additional Info Section */}
        <motion.div
          className="glass rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Ready to Work Together?
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
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

