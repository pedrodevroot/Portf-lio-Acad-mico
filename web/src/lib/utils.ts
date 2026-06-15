import type { NivelProf } from '@/types'

/** Junta classes condicionais (mini clsx). */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

/** Cor/peso visual de cada nível de proficiência (rubrica Fatec). */
export const nivelMeta: Record<NivelProf, { peso: number; classe: string; label: string }> = {
  'Ouvi falar': { peso: 1, classe: 'bg-surface-2 text-muted border-border', label: 'Ouvi falar' },
  'Com ajuda': {
    peso: 2,
    classe: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    label: 'Com ajuda',
  },
  'Com autonomia': {
    peso: 3,
    classe: 'bg-accent/10 text-accent border-accent/40',
    label: 'Com autonomia',
  },
  'Posso ensinar': {
    peso: 4,
    classe: 'bg-accent/20 text-accent-strong border-accent/60 font-semibold',
    label: 'Posso ensinar 🏆',
  },
}

export const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
