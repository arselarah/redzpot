import React from 'react'
import Slider from '../slider/Slider'
import Carrusel from '../carrusel/Carrusel'

export default function Portafolio() {
  return (
    <>
      <section className='relative w-full bg-black font-poppins'>
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
            {/* <div className='contenedor-boton'>
              <button className='border-2 border-primary_red px-12 py-3 text-sm text-white'>
                Contáctanos
              </button>
            </div> */}
          </div>

          {/* <div className='grid-servicios w-full py-8 md:py-16 lg:py-24'>
            <Slider />
          </div> */}
          <div className='grid-servicios w-full overflow-hidden py-8 md:py-16 lg:py-24'>
            <Carrusel />
          </div>
        </div>
      </section>
    </>
  )
}
