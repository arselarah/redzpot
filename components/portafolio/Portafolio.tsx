import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
export default function Portafolio() {
  return (
    <>
      <section className='relative w-full bg-black font-poppins'>
        <div className='raya-roja absolute -top-8 left-1/2 h-16 w-[2px] -translate-x-1/2 bg-primary_red'></div>
        <div className='mx-auto flex h-auto w-full max-w-[100rem] flex-col items-start justify-start gap-4 px-4 py-12 md:px-8 md:py-16 lg:py-32'>
          <div className='flex w-full flex-row items-center'>
            <div className='contenedor-titulos grow'>
              <div className='red-bar-titles'></div>
              <div className='relative flex h-auto w-full flex-col gap-4'>
                <h2 className='text-fluid-xl font-light text-white'>
                  Portafolio
                </h2>
              </div>
              <div className='relative flex h-auto w-full flex-col gap-4'>
                <h3 className='text-fluid-sm font-light uppercase text-primary_red'>
                  We work with you, not for you
                </h3>
              </div>
            </div>
            <div className='contenedor-boton'>
              <button className='border-2 border-primary_red px-12 py-3 text-sm text-white'>
                Contáctanos
              </button>
            </div>
          </div>

          <div className='grid-servicios w-full py-8 md:py-16 lg:py-24'>
            <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
