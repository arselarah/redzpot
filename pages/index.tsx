import React from 'react'
import Hero from '@/components/hero/Hero'
import SeccionUno from '@/components/seccionUno/SeccionUno'
import Portafolio from '@/components/portafolio/Portafolio'

export default function index() {
  return (
    <>
      <main>
        <Hero />
        <SeccionUno />
        <Portafolio />
      </main>
    </>
  )
}
