'use client'

type MonogramProps = {
  /** Size: 'sm' (header), 'md', 'lg' (hero) */
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'text-xl',
  md: 'text-3xl',
  lg: 'text-5xl md:text-7xl',
}

export default function Monogram({ size = 'sm', className = '' }: MonogramProps) {
  return (
    <span
      className={`inline-flex items-baseline font-bold tracking-tight select-none ${sizeClasses[size]} ${className}`}
      aria-hidden
    >
      {/* First P - electric blue with glow */}
      <span
        className="relative text-blue-500 dark:text-blue-400"
        style={{
          textShadow:
            '0 0 12px rgba(59, 130, 246, 0.5), 0 0 24px rgba(59, 130, 246, 0.25)',
        }}
      >
        P
      </span>
      {/* Second P - white (dark) / dark (light), slightly overlapped */}
      <span
        className="relative -ml-1 text-gray-900 dark:text-white monogram-glow"
      >
        P
      </span>
    </span>
  )
}
