import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import imagenes from './Imagenes'
import Image from 'next/image'

export default function PortafolioHorizontal() {
  const targetRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)

  const [xTarget, setXTarget] = React.useState('-75%') // Valor inicial temporal

  useEffect(() => {
    const container = containerRef.current
    const images = imagesRef.current

    if (container && images) {
      const totalScroll = images.scrollWidth - container.clientWidth
      const porcentajeScroll = (totalScroll / images.scrollWidth) * 100
      setXTarget(`-${porcentajeScroll}%`)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  //const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])
  const x = useTransform(scrollYProgress, [0, 1], ['0%', xTarget])

  return (
    <>
      <section className='relative h-auto w-full bg-black font-poppins'>
        <div className='raya-roja absolute -top-8 left-1/2 h-16 w-[2px] -translate-x-1/2 bg-primary_red'></div>
        <div className='mx-auto flex h-auto w-full max-w-[100rem] flex-col items-start justify-start gap-4 px-4 py-12 md:px-8 md:py-16 lg:py-32'>
          <div className='flex w-full flex-row items-center'>
            <div className='contenedor-titulos flex grow flex-col gap-4'>
              <div className='red-bar-titles'></div>
              <div className='relative flex h-auto w-full flex-col gap-4'>
                <h2 className='text-fluid-xl font-light leading-tight text-white'>
                  Portafolio
                </h2>
              </div>
              <div className='relative flex h-auto w-full flex-col gap-4'>
                <h3 className='text-fluid-sm font-light uppercase text-primary_red'>
                  We work with you, not for you
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className='carousel relative w-full gap-4 px-4 font-poppins lg:h-[400vh]'
          ref={targetRef}
        >
          <div
            className='contentContainer sticky top-0 flex h-screen items-center justify-start overflow-hidden'
            ref={containerRef}
          >
            <motion.div className='images flex' style={{ x }} ref={imagesRef}>
              {imagenes.map((imagen, index) => (
                <div
                  className='imageItem flex w-screen min-w-96 flex-row justify-center overflow-hidden'
                  key={index}
                >
                  <div className='relative flex max-w-[1440px] flex-row items-center justify-center'>
                    <div className='justify-startlg:min-w-[50rem] relative flex aspect-square h-full w-full'>
                      <Image
                        src={imagen.image}
                        alt={`Imagen ${index + 1}`}
                        width={500}
                        height={500}
                        className='h-auto w-full object-cover'
                      />
                    </div>
                    <div className='aspect-square w-full p-12 text-fluid-sm font-light text-white lg:min-w-[50rem]'>
                      <h3 className='p-12 text-fluid-sm font-bold'>
                        {imagen.title}
                      </h3>
                      <p className='p-12 text-fluid-sm font-light'>
                        {imagen.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
