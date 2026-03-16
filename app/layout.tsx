import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'Portfolio | Project Manager & Full-Stack Engineer',
  description: 'Project Manager and Full-Stack Engineer with 5+ years of experience delivering robust web and mobile solutions. Crafting high-impact digital products through engineering excellence and leadership.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="animated-bg min-h-screen">
            <Navigation />
            <main className="relative z-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

