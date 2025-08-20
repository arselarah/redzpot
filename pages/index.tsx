import React from 'react'
import Hero from '@/components/hero/Hero'
import SeccionUno from '@/components/seccionUno/SeccionUno'
import Nosotros from '@/components/nosotros/Nosotros'
import Testimonios from '@/components/testimonios/Testimonios'
import PortafolioHorizontal from '@/components/portafolioHorizontal/PortafolioHorizontal'
import ClientesSlider from '@/components/clientesSlider/ClientesSlider'
import Noticias from '@/components/noticias/Noticias'

export default function index() {
  return (
    <>
      <main className='relative overflow-clip'>
        <Hero />
        <SeccionUno />
        <PortafolioHorizontal />
        <Nosotros />
        <Testimonios />
        <ClientesSlider />
        <Noticias />
      </main>
    </>
  )
}
