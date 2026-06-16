import { useState } from 'react'
import { Mail, FileText, Copy, Check } from 'lucide-react'
import { Github, Linkedin } from '@/components/BrandIcons'
import { Seo } from '@/components/Seo'
import { Section, Card, Button } from '@/components/ui'
import { asset } from '@/lib/utils'
import { perfil } from '@/data/perfil'

export function Contato() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(perfil.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const items = [
    { icon: Linkedin, label: 'LinkedIn', value: 'pedro-lucas', href: perfil.linkedin },
    { icon: Github, label: 'GitHub', value: 'pedrodevroot', href: perfil.github },
    { icon: Mail, label: 'E-mail', value: perfil.email, href: `mailto:${perfil.email}` },
  ]

  return (
    <>
      <Seo title="Contato" description="Entre em contato com Pedro Lucas." />

      <Section
        eyebrow="// contato"
        title="Vamos trabalhar juntos"
        subtitle="Estou aberto a oportunidades como Desenvolvedor Back-End. Resposta rápida no e-mail e LinkedIn."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href }) => (
            <Card key={label} className="flex flex-col gap-3">
              <Icon size={22} className="text-accent" />
              <div>
                <p className="font-semibold">{label}</p>
                <p className="break-all text-sm text-muted">{value}</p>
              </div>
              <a
                href={href}
                target="_blank"
                rel="noopener"
                className="mt-auto text-sm font-semibold text-accent hover:underline"
              >
                Abrir →
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={copy}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-strong hover:scale-[1.03]"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'E-mail copiado!' : 'Copiar e-mail'}
          </button>
          <Button href={asset(perfil.cv)} variant="ghost" target="_blank" rel="noopener" download>
            <FileText size={16} /> Baixar CV
          </Button>
        </div>
      </Section>
    </>
  )
}
