import React from 'react'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/100.css'
import { motion, useTransform, easeInOut } from 'framer-motion'

const servicios = [
  'Digital Strategy',
  'UX Design',
  'Integrated Marketing',
  'Content strategy',
  'Design & Concept',
  'Social Media Promotion',
  'Media Planing & Buying',
  'Brand Identity',
  'SEO Optimization'
]

export default function SeccionUno() {
  return (
    <>
      <section className='relative flex h-auto w-full flex-col justify-start bg-white font-poppins lg:h-[300vh]'>
        <div className='relative top-0 mx-auto flex h-auto w-full max-w-[100rem] flex-col items-start justify-center gap-4 px-4 py-12 md:px-8 md:py-16 lg:sticky lg:h-screen lg:py-32'>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '3rem' }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className='red-bar-titles'
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='relative flex h-auto w-full flex-col gap-4'
          >
            <h2 className='text-fluid-xl font-light leading-tight text-black'>
              Servicios
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='relative flex h-auto w-full flex-col gap-4'
          >
            <h3 className='text-fluid-sm font-light uppercase text-primary_red'>
              We work with you, not for you
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className='grid-servicios w-full py-8 md:py-16 lg:py-24'
          >
            {/* <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
              <div className='caja_servicios flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Digital Strategy</p>
              </div>
              <div className='caja_servicios flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>UX Design</p>
              </div>
              <div className='caja_servicios flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Integrated Marketing</p>
              </div>
              <div className='caja_servicios flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Content strategy</p>
              </div>
              <div className='caja_servicios flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Design & Concept</p>
              </div>
              <div className='caja_servicios flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:pl-24 hover:text-white'>
                <p>Social Media Promotion</p>
              </div>
              <div className='caja_servicios flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Media Planing & Buying</p>
              </div>
              <div className='caja_servicios flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Brand Identity</p>
              </div>
              <div className='caja_servicios flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>SEO Optimization</p>
              </div>
            </div> */}
            <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
              {servicios.map((servicio, index) => (
                <motion.div
                  key={index}
                  className='caja_servicios flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'
                >
                  <p>{servicio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
