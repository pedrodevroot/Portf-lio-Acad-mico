import { Mail, FileText } from 'lucide-react'
import { Github, Linkedin } from '@/components/BrandIcons'
import { Container, Button } from '@/components/ui'
import { perfil } from '@/data/perfil'

export function Footer() {
  return (
    <footer className="mt-10 border-t border-border bg-surface/40">
      <Container className="flex flex-col items-center gap-6 py-12 text-center">
        <h3 className="font-display text-2xl font-bold">Vamos conversar?</h3>
        <p className="max-w-md text-muted">
          Estou aberto a oportunidades como Desenvolvedor Back-End. Recrutadores: o currículo está a
          um clique.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${perfil.email}`}>
            <Mail size={16} /> Enviar e-mail
          </Button>
          <Button href={perfil.cv} variant="ghost" target="_blank" rel="noopener" download>
            <FileText size={16} /> Baixar CV
          </Button>
        </div>
        <div className="flex gap-5 text-muted">
          <a href={perfil.github} target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-accent">
            <Github size={20} />
          </a>
          <a href={perfil.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-accent">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${perfil.email}`} aria-label="E-mail" className="hover:text-accent">
            <Mail size={20} />
          </a>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {perfil.nome}. Feito com React, TypeScript e Tailwind.
        </p>
      </Container>
    </footer>
  )
}
