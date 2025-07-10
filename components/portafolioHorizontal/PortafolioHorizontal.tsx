import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import imagenes from './Imagenes'
import Image from 'next/image'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function PortafolioHorizontal() {
  const isMobile = useMediaQuery('(max-width: 1024px)')

  const targetRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)

  const [xTarget, setXTarget] = React.useState('-75%')

  useEffect(() => {
    if (isMobile) return // ⛔ No calcular el scroll si es móvil

    const container = containerRef.current
    const images = imagesRef.current

    if (container && images) {
      const totalScroll = images.scrollWidth - container.clientWidth
      const porcentajeScroll = (totalScroll / images.scrollWidth) * 100
      setXTarget(`-${porcentajeScroll}%`)
    }
  }, [isMobile])

  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', xTarget])

  return (
    <section className='relative h-auto w-full bg-black font-poppins'>
      <div className='raya-roja absolute -top-8 left-1/2 h-16 w-[2px] -translate-x-1/2 bg-primary_red'></div>
      <div className='mx-auto flex h-auto w-full max-w-[100rem] flex-col items-start justify-start gap-4 px-4 py-12 md:px-8 md:py-16 lg:py-32'>
        <div className='flex w-full flex-row items-center'>
          <div className='contenedor-titulos flex grow flex-col gap-4'>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className='red-bar-titles'
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className='relative flex h-auto w-full flex-col gap-4'
            >
              <h2 className='text-fluid-xl font-light leading-tight text-white'>
                Portafolio
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className='relative flex h-auto w-full flex-col gap-4'
            >
              <h3 className='text-fluid-sm font-light uppercase text-primary_red'>
                We work with you, not for you
              </h3>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className={`carousel relative w-full gap-4 px-4 font-poppins ${
          isMobile ? 'h-auto' : 'lg:h-[450vh]'
        }`}
        ref={targetRef}
      >
        <div
          className={`contentContainer ${
            isMobile
              ? 'flex flex-col'
              : 'sticky top-0 flex h-screen items-center justify-start overflow-hidden'
          }`}
          ref={containerRef}
        >
          <motion.div
            className={`images ${isMobile ? 'flex-col' : 'flex'}`}
            style={isMobile ? {} : { x }}
            ref={imagesRef}
          >
            {imagenes.map((imagen, index) => (
              <motion.div
                initial={{
                  clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
                }}
                whileInView={{
                  clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)'
                }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className={`imageItem flex w-full ${
                  isMobile ? 'flex-col' : 'flex-row'
                } justify-center overflow-hidden ${
                  isMobile ? '' : 'lg:min-w-[96rem]'
                }`}
                key={index}
              >
                <div className='relative flex max-w-[1440px] flex-col items-center justify-center lg:flex-row'>
                  <div className='relative flex aspect-square h-full w-full justify-start'>
                    <Image
                      src={imagen.image}
                      alt={`Imagen ${index + 1}`}
                      width={500}
                      height={500}
                      className='h-auto w-full object-cover'
                    />
                  </div>
                  <div className='w-full p-4 text-fluid-sm font-light text-white lg:aspect-square lg:p-12'>
                    <h3 className='p-4 text-fluid-sm font-bold lg:p-12'>
                      {imagen.title}
                    </h3>
                    <p className='p-4 text-fluid-sm font-light lg:p-12'>
                      {imagen.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
