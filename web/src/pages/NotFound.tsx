import { Seo } from '@/components/Seo'
import { Container, Button } from '@/components/ui'

export function NotFound() {
  return (
    <>
      <Seo title="404" />
      <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <p className="font-mono text-6xl font-bold text-accent">404</p>
        <h1 className="font-display text-2xl font-bold">Página não encontrada</h1>
        <p className="text-muted">O endereço acessado não existe ou foi movido.</p>
        <Button to="/">Voltar ao início</Button>
      </Container>
    </>
  )
}
