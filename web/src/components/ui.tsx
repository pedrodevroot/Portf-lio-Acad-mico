import { motion } from 'framer-motion'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { NivelProf } from '@/types'
import { cn, nivelMeta } from '@/lib/utils'

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)}>{children}</div>
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('py-14 sm:py-20', className)}>
      <Container>
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            {eyebrow && (
              <p className="mb-2 font-mono text-sm tracking-wide text-accent">{eyebrow}</p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
            )}
            {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </Container>
    </section>
  )
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-surface p-5 transition-all duration-300',
        'hover:border-accent/50 hover:shadow-[0_0_24px_-8px_var(--color-accent-glow)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  )
}

export function NivelBadge({ nivel }: { nivel: NivelProf }) {
  const m = nivelMeta[nivel]
  return (
    <span className={cn('rounded-md border px-2 py-0.5 text-xs', m.classe)}>{m.label}</span>
  )
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  className,
  ...rest
}: {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'ghost'
  className?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const styles = cn(
    'inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all',
    variant === 'primary'
      ? 'bg-accent text-white hover:bg-accent-strong hover:scale-[1.03]'
      : 'border border-border bg-surface text-text hover:border-accent/60',
    className,
  )
  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={styles} {...rest}>
      {children}
    </a>
  )
}

export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
