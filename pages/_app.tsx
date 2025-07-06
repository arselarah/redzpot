import { AppProps } from 'next/app'
import '@/pages/globals.css'
import NavBar from '@/components/navbar/navBar'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      // 'smooth' ya no es necesario
      lerp: 0.1 // controla la suavidad (0 = sin efecto, 1 = movimiento instantáneo)
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <NavBar />
      <main className=''>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
