import React from 'react'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Imagenes from './Imagenes'

export default function Slider() {
  const [width, setWidth] = useState(0)
  const carrusel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carrusel.current) {
      setWidth(carrusel.current.scrollWidth - carrusel.current.offsetWidth)
    }
  }, [])
  return (
    <>
      <motion.article
        ref={carrusel}
        className='carrusel'
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='carrusel-contenedor'
        >
          {Imagenes.map((imagen, index) => (
            <motion.div className='item' key={imagen}>
              <Image
                src={imagen}
                alt={`Imagen ${index + 1}`}
                width={500}
                height={500}
                className='object-cover'
              />
              {/* <img src={imagen} alt='' /> */}
            </motion.div>
          ))}
        </motion.div>
      </motion.article>
    </>
  )
}
