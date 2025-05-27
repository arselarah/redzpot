import React from 'react'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/100.css'

export default function Hero() {
  return (
    <>
      <div className='flex min-h-screen w-full bg-black'>
        <div className='mx-auto flex w-full max-w-[100rem] flex-col items-start justify-between gap-8'>
          <div className='h-1/4 min-h-80 w-full'></div>
          <div className='flex flex-col gap-4 px-4'>
            <div>
              <h1 className='text-clamp_cover leading-tight text-white'>
                REDZPOT
              </h1>
              <h1 className='text-clamp_cover leading-tight text-white'>
                Impulso en Imagen
              </h1>
            </div>
            <div>
              <button className='border-redzpot border-2 px-12 py-3 text-sm text-white'>
                Contáctanos
              </button>
            </div>
          </div>
          <div className='cajas w-full font-poppins'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              <div className='caja bg-redzpot flex aspect-square flex-col justify-between p-8'>
                <div className='caja_icono min-h-[40%]'></div>
                <div className='caja_titulo'>
                  <h3 className='text-clamp_subtitles font-light text-white'>
                    Pantalla Vial
                  </h3>
                </div>
                <div className='caja_texto text-white'>
                  <p className='text-clamp_textoImportante'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vitae lorem dapibus, euismod est ut, egestas lacus.
                  </p>
                </div>
              </div>
              <div className='caja bg-secondaryDark flex aspect-square flex-col justify-between p-8'>
                <div className='caja_icono min-h-[40%]'></div>
                <div className='caja_titulo'>
                  <h3 className='text-clamp_subtitles font-light text-white'>
                    Espectaculares
                  </h3>
                </div>
                <div className='caja_texto text-white'>
                  <p className='text-clamp_textoImportante'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vitae lorem dapibus, euismod est ut, egestas lacus.
                  </p>
                </div>
              </div>
              <div className='caja bg-secondaryDark barras-rojas relative flex aspect-square flex-col justify-between p-8 md:col-span-2 md:aspect-video lg:col-span-1 lg:aspect-square'>
                <div className='caja_icono min-h-[40%]'></div>
                <div className='caja_titulo'>
                  <h3 className='text-clamp_subtitles font-light text-white'>
                    Comunicación Interna
                  </h3>
                </div>
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
