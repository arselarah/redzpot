import React from 'react'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/100.css'

export default function SeccionUno() {
  return (
    <>
      <section className='relative w-full bg-white font-poppins'>
        <div className='mx-auto flex h-auto w-full max-w-[100rem] flex-col items-start justify-start gap-4 px-4 py-12 md:px-8 md:py-16 lg:py-32'>
          <div className='red-bar-titles'></div>
          <div className='relative flex h-auto w-full flex-col gap-4'>
            <h2 className='text-fluid-xl font-light text-black'>Servicios</h2>
          </div>
          <div className='relative flex h-auto w-full flex-col gap-4'>
            <h3 className='text-fluid-sm font-light uppercase text-primary_red'>
              We work with you, not for you
            </h3>
          </div>
          <div className='grid-servicios w-full py-8 md:py-16 lg:py-24'>
            <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              <div className='flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Digital Strategy</p>
              </div>
              <div className='flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>UX Design</p>
              </div>
              <div className='flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Integrated Marketing</p>
              </div>
              <div className='flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Content strategy</p>
              </div>
              <div className='flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Design & Concept</p>
              </div>
              <div className='flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Social Media Promotion</p>
              </div>
              <div className='flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Media Planing & Buying</p>
              </div>
              <div className='flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>Brand Identity</p>
              </div>
              <div className='flex w-full cursor-pointer flex-col items-start justify-center bg-gris px-8 py-10 transition-all duration-300 ease-in-out hover:bg-primary_red hover:px-24 hover:text-white'>
                <p>SEO Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
