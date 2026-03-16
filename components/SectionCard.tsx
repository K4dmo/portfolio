'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface SectionCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
  delay?: number
}

export default function SectionCard({
  title,
  description,
  href,
  icon,
  delay = 0,
}: SectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href}>
        <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col group cursor-pointer">
          {icon && (
            <div className="mb-4 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              {icon}
            </div>
          )}
          <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
          <div className="flex items-center text-purple-400 group-hover:translate-x-2 transition-transform">
            <span className="text-sm font-semibold">Explore</span>
            <ArrowRight className="ml-2" size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

