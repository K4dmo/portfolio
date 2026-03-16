'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import Monogram from '@/components/Monogram'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <motion.header
          className="relative rounded-2xl overflow-hidden bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/60 dark:border-white/10 shadow-lg shadow-gray-200/20 dark:shadow-black/20"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

          <div className="relative flex items-center justify-between px-5 md:px-8 py-3.5 md:py-4">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-3 group min-w-0"
              aria-label="Pedro Pancotte - Portfolio"
            >
              <span className="flex-shrink-0">
                <Monogram size="sm" />
              </span>
              <span className="hidden sm:block border-l border-gray-200/50 dark:border-white/10 pl-3">
                <span className="block text-sm font-semibold text-gray-800 dark:text-white tracking-tight truncate">
                  Pedro Pancotte
                </span>
                <span className="block text-[11px] text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase">
                  Software Engineer
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`group relative flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/25"
                        layoutId="nav-pill"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-xl bg-gray-100/80 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                )
              })}
            </div>

            {/* Right: Theme + Mobile trigger */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 hover:border-purple-400/30 dark:hover:border-purple-400/30 hover:bg-purple-500/5 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="text-amber-400" size={20} />
                ) : (
                  <Moon className="text-indigo-600" size={20} />
                )}
              </button>
              <button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </motion.header>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-2xl border border-white/10 dark:border-white/5 bg-white/80 dark:bg-white/5 backdrop-blur-xl overflow-hidden shadow-xl">
                <div className="p-2">
                  {navItems.map((item, i) => {
                    const isActive = pathname === item.path
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.span
                          className={`
                            flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors
                            ${
                              isActive
                                ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-700 dark:text-white border border-purple-400/20'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                            }
                          `}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
