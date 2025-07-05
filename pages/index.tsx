import React from 'react'
import Hero from '@/components/hero/Hero'
import SeccionUno from '@/components/seccionUno/SeccionUno'
import Portafolio from '@/components/portafolio/Portafolio'
import Nosotros from '@/components/nosotros/Nosotros'
import Testimonios from '@/components/testimonios/Testimonios'
import PortafolioHorizontal from '@/components/portafolioHorizontal/PortafolioHorizontal'

export default function index() {
  return (
    <>
      <main>
        <Hero />
        <SeccionUno />
        <PortafolioHorizontal />
        <Nosotros />
        <Testimonios />
      </main>
    </>
  )
}
