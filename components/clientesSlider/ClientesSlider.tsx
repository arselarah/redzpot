import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const logos = [
  { logo: '/assets/clientes/autolasa.png', alt: 'Autolasa' },
  { logo: '/assets/clientes/geely.png', alt: 'Geely' },
  { logo: '/assets/clientes/algodoneros.png', alt: 'Algodoneros' },
  { logo: '/assets/clientes/besser_haus.png', alt: 'Besser Haus' },
  { logo: '/assets/clientes/gwm.png', alt: 'GWM' },
  { logo: '/assets/clientes/hyundai.png', alt: 'Hyundai' },
  { logo: '/assets/clientes/valmur.png', alt: 'Valmur' },
  { logo: '/assets/clientes/toyota.png', alt: 'Toyota' }
]

export default function ClientesSlider() {
  const duplicarLogos = [...logos, ...logos] // Duplicar los logos para el efecto de slider infinito
  return (
    <>
      <div className='relative w-full bg-claro py-32'>
        <motion.div
          style={{ width: 'max-content' }}
          animate={{ x: ['0%', '-45%'] }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity
          }}
          className='flex w-full flex-nowrap items-center justify-center gap-32'
        >
          {duplicarLogos.map((cliente, index) => (
            <div
              className='flex w-full items-center justify-center'
              key={index}
            >
              <Image
                src={cliente.logo}
                alt={cliente.alt}
                width={200}
                height={100}
                className='min-w-[200px] object-contain'
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  )
}
