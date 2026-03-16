'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Rocket, Heart } from 'lucide-react'

const skills = [
  {
    category: 'Backend & APIs',
    icon: <Code />,
    items: ['C# / .NET', 'ASP.NET Core', 'REST APIs', 'PostgreSQL', 'Entity Framework', 'Clean Architecture'],
  },
  {
    category: 'Frontend & Mobile',
    icon: <Palette />,
    items: ['React', 'React Native', 'Vue.js', 'Nuxt.js', 'TypeScript', 'Expo'],
  },
  {
    category: 'DevOps & Automation',
    icon: <Rocket />,
    items: ['GitHub Actions', 'CI/CD Pipelines', 'Google Workspace', 'Ubuntu Servers', 'Database Triggers', 'WebSockets'],
  },
  {
    category: 'Leadership & Management',
    icon: <Heart />,
    items: ['Management 3.0', 'Team Leadership', 'Product Strategy', 'Delivery Culture', 'Workflow Optimization'],
  },
]

export default function AboutPage() {
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
            <span className="gradient-text">About Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A multidisciplinary professional working at the intersection of software engineering, product development, and team leadership.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Personal Story */}
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">My Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I’m a multidisciplinary professional based in <strong>Cianorte, Brazil</strong>, working at the intersection of <strong>software engineering, product development, and team leadership</strong>.
              </p>
              <p>
                My journey began in backend and frontend development, evolving through full-stack roles until reaching project management — where I now lead teams, accelerate delivery pipelines, and architect solutions grounded in modern engineering principles.
              </p>
              <p>
                What drives me is simple: <strong>constant evolution</strong>. Every project is an opportunity to learn, refine processes, elevate standards, and deliver something truly valuable.
              </p>
              <p>
                I bring a holistic view to the engineering lifecycle — from ideation and discovery to deployment, iteration, and delivery excellence.
              </p>
            </div>
          </motion.div>

          {/* Values & Philosophy */}
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              My Approach
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Technical Depth & Strategic Thinking
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  My work blends technical depth with strategic product thinking — building systems that are scalable, intuitive, and aligned with real business value.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Leadership & Delivery Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I lead teams using modern management frameworks, establish delivery-focused methodologies, and structure business models for scalable, long-term product growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Continuous Evolution
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every project is an opportunity to learn, refine processes, elevate standards, and deliver something truly valuable. Growth is at the heart of everything I do.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="glass rounded-2xl p-6 glass-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 text-sm text-gray-600 dark:text-gray-300 border border-gray-300/20 dark:border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

