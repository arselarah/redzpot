import React from 'react'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/100.css'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <>
      <div className='relative z-[1] flex min-h-screen w-full bg-black'>
        <div className='mx-auto flex w-full max-w-[100rem] flex-col items-start justify-between gap-8 md:gap-16 lg:gap-32'>
          <div className='relative flex h-fluid w-full flex-col justify-end gap-4 px-4 md:px-8'>
            <div className='relative flex w-full flex-col items-start gap-0'>
              <div className='contenedor-titulos relative flex w-full flex-col gap-0 overflow-hidden'>
                <motion.h1
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1,
                    ease: [0.35, 0.17, 0.3, 0.86]
                  }}
                  className='text-clamp_cover leading-tight text-white'
                >
                  REDZPOT
                </motion.h1>
              </div>
              <div className='contenedor-titulos relative flex w-full flex-col gap-0 overflow-hidden'>
                <motion.h2
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3,
                    ease: [0.35, 0.17, 0.3, 0.86]
                  }}
                  className='text-clamp_cover leading-tight text-white'
                >
                  Impulso en Imagen
                </motion.h2>
              </div>
            </div>
            <div>
              <motion.button
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6,
                  ease: [0.35, 0.17, 0.3, 0.86]
                }}
                className='origin-center border-2 border-primary_red px-12 py-3 text-sm text-white'
              >
                Contáctanos
              </motion.button>
            </div>
          </div>
          <div className='cajas w-full font-poppins'>
            <div className='barras-rojas relative grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3'>
              <div className='caja flex aspect-square flex-col justify-between bg-primary_red p-4 md:p-8'>
                <div className='caja_icono min-h-[40%]'></div>
                <div className='caja_titulo relative'>
                  <h3 className='text-clamp_subtitles font-light text-white'>
                    Pantalla Vial
                  </h3>
                </div>
                <div className='white-bar-mini'></div>
                <div className='caja_texto text-white'>
                  <p className='text-clamp_textoImportante'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vitae lorem dapibus, euismod est ut, egestas lacus.
                  </p>
                </div>
              </div>
              <div className='caja flex aspect-square flex-col justify-between bg-secondary_dark p-4 md:p-8'>
                <div className='caja_icono min-h-[40%]'></div>
                <div className='caja_titulo relative'>
                  <h3 className='text-clamp_subtitles font-light text-white'>
                    Espectaculares
                  </h3>
                </div>
                <div className='red-bar-mini'></div>
                <div className='caja_texto text-white'>
                  <p className='text-clamp_textoImportante'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vitae lorem dapibus, euismod est ut, egestas lacus.
                  </p>
                </div>
              </div>
              <div className='caja relative flex aspect-square flex-col justify-between bg-secondary_dark p-4 md:col-span-2 md:aspect-video md:p-8 lg:col-span-1 lg:aspect-square'>
                <div className='caja_icono min-h-[40%]'></div>
                <div className='caja_titulo relative'>
                  <h3 className='text-clamp_subtitles font-light text-white'>
                    Comunicación Interna
                  </h3>
                </div>
                <div className='red-bar-mini'></div>
                <div className='caja_texto text-white'>
                  <p className='text-clamp_textoImportante'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vitae lorem dapibus, euismod est ut, egestas lacus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
