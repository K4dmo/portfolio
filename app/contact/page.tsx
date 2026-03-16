'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get in Contact</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say
            hello? I’d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-300/30 dark:border-white/10 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-300/30 dark:border-white/10 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-300/30 dark:border-white/10 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg gradient-bg text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 text-sm text-center"
                >
                  Message sent successfully! I’ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-sm text-center"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Let’s Connect
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I’m open to leadership-driven engineering roles, senior full-stack opportunities, product-focused technical positions, and long-term partnerships. If you’re looking for someone who blends technical depth, delivery mindset, leadership, and continuous evolution, I’d love to connect.
              </p>
              <div className="space-y-4">
                <motion.a
                  href="mailto:roboxie3.0@gmail.com"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="glass rounded-full p-3 mr-4 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 group-hover:backdrop-blur-[20px] transition-all w-12 h-12">
                    <Mail className="text-blue-500 dark:text-blue-400" size={24} strokeWidth={2} />
                  </div>
                  <span className="font-medium">roboxie3.0@gmail.com</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/pedro-pancotte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="glass rounded-full p-3 mr-4 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 group-hover:backdrop-blur-[20px] transition-all w-12 h-12">
                    <Linkedin className="text-blue-600 dark:text-blue-500" size={24} strokeWidth={2} />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </motion.a>
                <motion.a
                  href="https://github.com/K4dmo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="glass rounded-full p-3 mr-4 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 group-hover:backdrop-blur-[20px] transition-all w-12 h-12">
                    <Github className="text-gray-700 dark:text-gray-300" size={24} strokeWidth={2} fill="currentColor" />
                  </div>
                  <span className="font-medium">GitHub Profile</span>
                </motion.a>
                <div className="flex items-center text-gray-600 dark:text-gray-300 pt-2">
                  <div className="glass rounded-full p-3 mr-4 flex items-center justify-center w-12 h-12">
                    <span className="text-purple-500 dark:text-purple-400 text-2xl">📍</span>
                  </div>
                  <span className="font-medium">Cianorte, PR, Brazil — Available for remote work worldwide</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

