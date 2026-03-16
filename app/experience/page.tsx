'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Project Manager',
    company: 'Log Hub Tech',
    location: 'Cianorte, Brazil',
    period: 'Jun 2025 → Present',
    description: [
      'Lead the product roadmap and plan new features',
      'Manage and mentor multidisciplinary development teams',
      'Implement delivery-focused methodologies inspired by Management 3.0',
      'Structure product business models and coordinate branding architecture',
      'Support mobile and web frontend development',
      'Contribute to backend development using C# REST APIs',
      'Implement CI pipelines, automation flows, and process integrations using Google Workspace',
      'Introduce and refine AI-driven development workflows',
    ],
    impact: [
      'Increased delivery efficiency and developer engagement',
      'Established clear product vision and structured technical foundations',
      'Strengthened the integration between business goals and engineering execution',
    ],
  },
  {
    title: 'FullStack Developer (Mid-Level)',
    company: 'Log Hub Tech',
    location: 'Cianorte, Brazil',
    period: 'Jan 2024 → Jun 2025',
    description: [
      'Developed web interfaces using Vue.js, Nuxt.js, and TypeScript',
      'Built backend features in C# / ASP.NET Core with PostgreSQL',
      'Implemented WebSockets, database triggers, and API integrations',
      'Created mobile features using React Native',
      'Managed deployment pipelines for Ubuntu servers',
      'Published mobile applications for iOS and Android stores',
      'Automated processes through Google Cloud integrations',
      'Maintained and improved GitHub workflows',
    ],
    impact: [
      'Delivered critical modules used daily by multiple business units',
      'Enhanced reliability across backend and mobile features',
      'Reduced deployment friction with automated workflows',
    ],
  },
  {
    title: 'FullStack Developer (Mid-Level)',
    company: 'Log Sistemas',
    location: 'Cianorte, Brazil',
    period: 'Jan 2024 → Present',
    description: [
      'Delivered new features in Vue.js, TypeScript, Nuxt.js',
      'Developed backend services using C#, ASP.NET Core, and Entity Framework',
      'Conducted code reviews and assisted teammates across the stack',
      'Integrated complex external APIs',
      'Built responsive PDF generation through backend services',
      'Implemented WebSockets and database-trigger automation',
      'Developed mobile features in React Native',
      'Deployed applications to Linux servers and mobile stores',
      'Led CI/CD improvements and GitHub workflow optimizations',
    ],
    impact: [
      'Introduced scalable architectures and cleaner development patterns',
      'Supported multiple feature releases across web, mobile, and backend',
      'Improved team performance through code quality and review practices',
    ],
  },
  {
    title: 'FullStack Developer (Junior)',
    company: 'Log Sistemas',
    location: 'Cianorte, Brazil',
    period: 'Jan 2023 → Dec 2023',
    description: [
      'Built frontend features with Vue.js, Nuxt.js, and TypeScript',
      'Developed REST APIs in C# / ASP.NET Core',
      'Supported testing, debugging, and code quality improvements',
    ],
    impact: [
      'Strengthened system consistency across modules',
      'Helped accelerate delivery cycles during high-volume periods',
    ],
  },
  {
    title: 'FullStack Developer (Junior – Part-Time)',
    company: 'Log Sistemas',
    location: 'Cianorte, Brazil',
    period: 'Nov 2022 → Dec 2022',
    description: [
      'Contributed to frontend and backend features',
      'Executed testing, bug fixing, and integration tasks',
    ],
  },
  {
    title: 'FullStack Developer Trainee',
    company: 'Log Sistemas',
    location: 'Cianorte, Brazil',
    period: 'May 2022 → Oct 2022',
    description: [
      'Learned and applied Vue.js, TypeScript, Next.js',
      'Developed REST APIs in C# / ASP.NET Core',
      'Designed database schemas using PostgreSQL',
      'Studied clean code, OOP, and design patterns',
    ],
  },
  {
    title: 'Financial Assistant',
    company: 'Log Sistemas',
    location: 'Cianorte, Brazil',
    period: 'Dec 2021 → May 2022',
    description: [
      'Worked with operational finance, invoicing, customer retention',
      'Supported cross-department goals',
    ],
  },
  {
    title: 'Administrative Assistant',
    company: 'Log Sistemas',
    location: 'Cianorte, Brazil',
    period: 'Aug 2021 → Nov 2021',
    description: [
      'Performed customer prospecting and invoice-related administrative tasks',
    ],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Professional Experience</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A progressive path shaped by technical excellence, leadership, and a commitment to building high-impact digital products.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1 z-10 border-4 border-[#0a0a0f]"></div>

                {/* Content Card */}
                <div
                  className={`glass rounded-2xl p-8 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2 gradient-text">
                        {exp.title}
                      </h2>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <Briefcase className="mr-2" size={18} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="mr-2" size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <MapPin className="mr-2" size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start text-gray-600 dark:text-gray-300 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                        >
                          <span className="text-purple-400 mr-3 mt-1 flex-shrink-0">▸</span>
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    {exp.impact && (
                      <>
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                          Core Impact
                        </h3>
                        <ul className="space-y-2">
                          {exp.impact.map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start text-gray-600 dark:text-gray-300 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.2 + exp.description.length * 0.1 + i * 0.1 }}
                            >
                              <span className="text-green-400 mr-3 mt-1 flex-shrink-0">✓</span>
                              <span className="leading-relaxed">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="glass rounded-2xl p-8 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Always Learning, Always Growing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From administrative roles to technical leadership, my journey reflects a commitment to continuous growth, technical excellence, and building solutions that create real business value. Every role has been a stepping stone toward becoming a more effective engineer and leader.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

