import React from 'react'
import SliderTestimonios from './SliderTestimonios'
import Image from 'next/image'

export default function Testimonios() {
  return (
    <>
      <section className='bg-claro relative min-h-screen w-full font-poppins'>
        <div className='raya-roja absolute -top-8 left-1/2 h-16 w-[2px] -translate-x-1/2 bg-primary_red'></div>
        {/* <div className='mx-auto flex h-auto w-full max-w-[100rem] flex-col items-start justify-start gap-4 px-4 py-12 md:px-8 md:py-16 lg:py-32'>
          <div className='flex w-full flex-col items-start gap-8 md:flex-row md:items-center'>
            <div className='contenedor-titulos grow'>
              <div className='red-bar-titles'></div>
              <div className='relative flex h-auto w-full flex-col gap-4'>
                <h2 className='text-fluid-xl font-light text-black'>
                  Lo que dicen nuestros clientes
                </h2>
              </div>
              <div className='relative flex h-auto w-full flex-col gap-4'>
                <h3 className='text-fluid-sm font-light uppercase text-primary_red'>
                  We work with you, not for you
                </h3>
              </div>
            </div>
          </div>
        </div> */}
        <article className='relative mx-auto flex h-auto w-full max-w-[100rem] flex-col items-start justify-start gap-4 px-4 py-12 md:px-8 md:py-16 lg:py-32'>
          <div className='relative flex w-full flex-col-reverse lg:flex-row'>
            <div className='w-full grow lg:w-1/2'>
              <div></div>
            </div>
            <div className='flex w-full grow flex-col gap-4 lg:w-1/2'>
              <div className='red-bar-titles'></div>
              <div className='relative flex h-auto w-full flex-col gap-4'>
                <h2 className='text-fluid-xl font-light leading-tight text-black'>
                  Lo que dicen <br />
                  nuestros clientes
                </h2>
              </div>
              <div className='relative flex h-auto w-full flex-col gap-4'>
                <h3 className='text-fluid-sm font-light uppercase text-primary_red'>
                  We work with you, not for you
                </h3>
              </div>
            </div>
          </div>
          <div className='contenedor-slider-testimonios lg:flex-rowitems-center relative flex w-full flex-col justify-center gap-8 py-8 md:py-16'>
            <SliderTestimonios />
          </div>
        </article>
      </section>
    </>
  )
}
