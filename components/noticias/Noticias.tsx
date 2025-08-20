import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Noticias() {
  return (
    <>
      <section className='mb:py-0 relative z-[1] w-full bg-white py-12 font-poppins'>
        <div className='raya-roja absolute -top-8 left-1/2 z-[1] h-16 w-[2px] -translate-x-1/2 bg-primary_red'></div>
        <div className='mx-auto flex h-auto w-full max-w-[100rem] flex-col items-start justify-start gap-4 px-4 py-12 md:px-8 md:py-16 lg:py-32'>
          <div className='flex w-full flex-col items-start gap-8 md:flex-row md:items-center'>
            <div className='contenedor-titulos flex grow flex-col gap-4'>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className='relative flex h-auto w-full flex-col gap-4'
              >
                <h2 className='text-center text-fluid-xl font-light leading-tight text-black'>
                  Últimas noticias
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className='relative flex h-auto w-full flex-col gap-4'
              >
                <h3 className='text-center text-fluid-sm font-light uppercase text-primary_red'>
                  Check Out Our Latest News
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
        <article className='contenedor-grid mx-auto flex h-auto w-full max-w-[100rem] flex-col items-start justify-start gap-4 px-4 pb-12 md:px-8 md:pb-16 lg:pb-32'>
          <div className='relative grid h-auto w-full grid-cols-1 grid-rows-3 gap-4 md:gap-8 lg:max-h-[50rem] lg:grid-cols-3 lg:grid-rows-1'>
            <div className='group relative'>
              <motion.div
                initial={{
                  clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
                }}
                whileInView={{
                  clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)'
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className='relative h-full w-full overflow-hidden'
              >
                <Image
                  src='/assets/slider/7.webp'
                  alt='Imagen de nosotros'
                  width={500}
                  height={500}
                  className='aspect-square h-full w-full object-cover'
                />
                <div className='absolute inset-0 left-0 top-0 flex flex-col items-end justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent'>
                  <div className='max-w-80 -translate-x-24 p-10 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
                    <h4 className='text-fluid-md font-light text-white'>
                      Lorem ipsum dolor sit amet.
                    </h4>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className='group relative row-span-1'>
              <motion.div
                initial={{
                  clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
                }}
                whileInView={{
                  clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)'
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className='relative h-full w-full overflow-hidden'
              >
                <Image
                  src='/assets/slider/5.webp'
                  alt='Imagen de nosotros'
                  width={500}
                  height={500}
                  className='aspect-square h-full w-full object-cover'
                />
                <div className='absolute inset-0 left-0 top-0 flex flex-col items-end justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent'>
                  <div className='max-w-80 -translate-x-24 p-10 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
                    <h4 className='text-fluid-md font-light text-white'>
                      Lorem ipsum dolor sit amet.
                    </h4>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className='group relative row-span-1'>
              <motion.div
                initial={{
                  clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
                }}
                whileInView={{
                  clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)'
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className='relative h-full w-full overflow-hidden'
              >
                <Image
                  src='/assets/slider/2.webp'
                  alt='Imagen de nosotros'
                  width={500}
                  height={500}
                  className='aspect-square h-full w-full object-cover'
                />
                <div className='absolute inset-0 left-0 top-0 flex flex-col items-end justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent'>
                  <div className='max-w-80 -translate-x-24 p-10 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
                    <h4 className='text-fluid-md font-light text-white'>
                      Lorem ipsum dolor sit amet.
                    </h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
