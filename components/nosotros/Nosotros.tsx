import React from 'react'
import Image from 'next/image'

export default function Nosotros() {
  return (
    <>
      <section className='relative w-full bg-white font-poppins'>
        <div className='raya-roja absolute -top-8 left-1/2 h-16 w-[2px] -translate-x-1/2 bg-primary_red'></div>
        <div className='mx-auto flex h-auto w-full max-w-[100rem] flex-col items-start justify-start gap-4 px-4 py-12 md:px-8 md:py-16 lg:py-32'>
          <div className='flex w-full flex-col items-start gap-8 md:flex-row md:items-center'>
            <div className='contenedor-titulos grow flex flex-col gap-4'>
              <div className='red-bar-titles'></div>
              <div className='relative flex h-auto w-full flex-col gap-4'>
                <h2 className='text-fluid-xl font-light leading-tight text-black'>
                  Nosotros
                </h2>
              </div>
              <div className='relative flex h-auto w-full flex-col gap-4'>
                <h3 className='text-fluid-sm font-light uppercase text-primary_red'>
                  We work with you, not for you
                </h3>
              </div>
            </div>
            <div className='contenedor-boton max-w-[40rem]'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse volutpat felis et magna euismod, vel commodo metus
                sagittis. Aliquam lobortis laoreet eros, quis posuere dui
                aliquet id.
              </p>
            </div>
          </div>
        </div>
        <article className='contenedor-grid mx-auto flex h-auto w-full max-w-[100rem] flex-col items-start justify-start gap-4 px-4 pb-12 md:px-8 md:pb-16 lg:pb-32'>
          <div className='relative grid h-auto w-full grid-cols-2 grid-rows-3 gap-4 md:grid-rows-2 md:gap-8 lg:max-h-[50rem] lg:grid-cols-3 lg:grid-rows-4'>
            <div className='barras-rojas-2 group relative col-span-2 row-span-1 md:row-span-2 lg:row-span-4'>
              <div className='relative h-full w-full overflow-hidden'>
                <Image
                  src='/assets/slider/7.webp'
                  alt='Imagen de nosotros'
                  width={500}
                  height={500}
                  className='h-full w-full object-cover'
                />
                <div className='absolute inset-0 left-0 top-0 flex flex-col items-end justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent'>
                  <div className='max-w-80 -translate-x-24 p-10 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
                    <h4 className='text-fluid-md font-light text-white'>
                      Lorem ipsum dolor sit amet.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='barras-rojas-3 group relative col-span-2 row-span-1 lg:col-span-1 lg:row-span-2'>
              <div className='relative h-full w-full overflow-hidden'>
                <Image
                  src='/assets/slider/5.webp'
                  alt='Imagen de nosotros'
                  width={500}
                  height={500}
                  className='h-full w-full object-cover'
                />
                <div className='absolute inset-0 left-0 top-0 flex flex-col items-end justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent'>
                  <div className='max-w-80 -translate-x-24 p-10 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
                    <h4 className='text-fluid-md font-light text-white'>
                      Lorem ipsum dolor sit amet.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='barras-rojas-4 group relative col-span-2 row-span-1 lg:col-span-1 lg:row-span-2'>
              <div className='relative h-full w-full overflow-hidden'>
                <Image
                  src='/assets/slider/2.webp'
                  alt='Imagen de nosotros'
                  width={500}
                  height={500}
                  className='h-full w-full object-cover'
                />
                <div className='absolute inset-0 left-0 top-0 flex flex-col items-end justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent'>
                  <div className='max-w-80 -translate-x-24 p-10 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
                    <h4 className='text-fluid-md font-light text-white'>
                      Lorem ipsum dolor sit amet.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
