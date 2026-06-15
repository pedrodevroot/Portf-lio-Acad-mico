import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })))
const Sobre = lazy(() => import('@/pages/Sobre').then((m) => ({ default: m.Sobre })))
const Projetos = lazy(() => import('@/pages/Projetos').then((m) => ({ default: m.Projetos })))
const ProjetoDetalhe = lazy(() =>
  import('@/pages/ProjetoDetalhe').then((m) => ({ default: m.ProjetoDetalhe })),
)
const Curriculo = lazy(() => import('@/pages/Curriculo').then((m) => ({ default: m.Curriculo })))
const Trajetoria = lazy(() => import('@/pages/Trajetoria').then((m) => ({ default: m.Trajetoria })))
const Contato = lazy(() => import('@/pages/Contato').then((m) => ({ default: m.Contato })))
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })))

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent" />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="sobre"
          element={
            <Suspense fallback={<PageLoader />}>
              <Sobre />
            </Suspense>
          }
        />
        <Route
          path="projetos"
          element={
            <Suspense fallback={<PageLoader />}>
              <Projetos />
            </Suspense>
          }
        />
        <Route
          path="projetos/:slug"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProjetoDetalhe />
            </Suspense>
          }
        />
        <Route
          path="curriculo"
          element={
            <Suspense fallback={<PageLoader />}>
              <Curriculo />
            </Suspense>
          }
        />
        <Route
          path="trajetoria"
          element={
            <Suspense fallback={<PageLoader />}>
              <Trajetoria />
            </Suspense>
          }
        />
        <Route
          path="contato"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contato />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
