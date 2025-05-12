import React from 'react'

export default function Hero() {
  return (
    <>
      <div className='flex min-h-screen w-full bg-black'>
        <div className='mx-auto flex w-full max-w-[100rem] flex-col items-start justify-between'>
          <div className='w-[40vh]'></div>
          <div>
            <div>
              <h1 className='text-white'>Impulso en Imagen</h1>
            </div>
            <div>
              <button className='text-white'>Contáctanos</button>
            </div>
          </div>
          <div className='cajas w-full'>
            <div className='flex w-full flex-col gap-8 md:flex-row'>
              <div className='caja flex aspect-square flex-col justify-between bg-red-600 p-8 md:w-1/3'>
                <div className='caja_icono'></div>
                <div className='caja_titulo text-white'>
                  <h3>Servicios 1</h3>
                </div>
                <div className='caja_texto text-white'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className='caja flex aspect-square flex-col justify-between bg-slate-900 p-8 md:w-1/3'>
                <div className='caja_icono'></div>
                <div className='caja_titulo text-white'>
                  <h3>Servicios 2</h3>
                </div>
                <div className='caja_texto text-white'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className='caja flex aspect-square flex-col justify-between bg-slate-900 p-8 md:w-1/3'>
                <div className='caja_icono'></div>
                <div className='caja_titulo text-white'>
                  <h3>Servicios 3</h3>
                </div>
                <div className='caja_texto text-white'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
