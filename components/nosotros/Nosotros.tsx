import React from 'react'

export default function Nosotros() {
  return (
    <>
      <section className='relative w-full bg-white font-poppins'>
        <div className='raya-roja absolute -top-8 left-1/2 h-16 w-[2px] -translate-x-1/2 bg-primary_red'></div>
        <div className='mx-auto flex h-auto w-full max-w-[100rem] flex-col items-start justify-start gap-4 px-4 py-12 md:px-8 md:py-16 lg:py-32'>
          <div className='flex w-full flex-col items-start gap-8 md:flex-row md:items-center'>
            <div className='contenedor-titulos grow'>
              <div className='red-bar-titles'></div>
              <div className='relative flex h-auto w-full flex-col gap-4'>
                <h2 className='text-fluid-xl font-light text-black'>
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
          <div className='relative grid min-h-[50vh] w-full grid-cols-2 grid-rows-3 gap-4 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-4'>
            <div className='barras-rojas-2 relative col-span-2 row-span-1 aspect-square bg-slate-400 md:row-span-2 lg:row-span-4'></div>
            <div className='barras-rojas-3 relative col-span-2 row-span-1 aspect-square bg-slate-500 lg:col-span-1 lg:row-span-2'></div>
            <div className='barras-rojas-4 relative col-span-2 row-span-1 aspect-square bg-slate-600 lg:col-span-1 lg:row-span-2'></div>
          </div>
        </article>
      </section>
    </>
  )
}
