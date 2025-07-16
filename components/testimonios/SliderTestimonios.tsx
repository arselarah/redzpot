import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import Image from 'next/image'
import QuoteIcon from '../iconos/Quote'

const slides = [
  {
    title: 'Algodoneros de Unión Laguna',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nisi, maximus a rhoncus nec, ultricies nec sapien. Pellentesque in tristique velit. Duis dui lorem, fermentum non dui vitae, luctus rhoncus orci. In dignissim eros ligula, quis congue nulla ultricies eu. Etiam mattis tortor at lacus pharetra tincidunt."',
    image: '/assets/slider/4.webp'
  },
  {
    title: 'Grupo VALMUR',
    text: '"Aenean sollicitudin fringilla vehicula. Duis nec arcu quis orci venenatis feugiat sit amet quis felis. Nunc mauris eros, aliquet sagittis ligula et, condimentum facilisis felis. Integer quis orci posuere, pretium ante sit amet, auctor ex. Phasellus vestibulum augue vitae gravida bibendum."',
    image: '/assets/slider/2.webp'
  },
  {
    title: 'AUTOLASA',
    text: '"Suspendisse aliquam interdum nisi in venenatis. Suspendisse nec imperdiet erat, et fringilla turpis. Proin et viverra orci. Suspendisse eu quam a neque pellentesque luctus. In porta scelerisque sollicitudin. Nullam vestibulum dui enim, porta lobortis magna gravida sit amet. Donec ut ex eget eros feugiat dapibus."',
    image: '/assets/slider/3.webp'
  }
]

export default function SliderTestimonios() {
  return (
    <>
      <div className='relative px-4 pb-12 pt-0'>
        <div className='quote absolute right-8 top-2/3 z-0 h-48 w-48 -translate-y-1/2'>
          <QuoteIcon />
        </div>
        <Swiper
          modules={[Navigation, EffectFade]}
          effect='fade' // 👈 esta línea activa el efecto
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          spaceBetween={0}
          loop
          speed={1000} // 👈 duración de la transición en milisegundos (1000ms = 1 segundo)
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next'
          }}
          //pagination={{ clickable: true }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className='pt-16 md:pt-0'>
              <div className='relative flex w-full flex-col-reverse items-end justify-center gap-8 text-black md:gap-24 lg:flex-row'>
                <div className='relative flex h-full w-full items-end justify-end lg:w-1/2'>
                  <div className='relative flex h-full w-full flex-col items-end justify-end'>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={500}
                      height={500}
                      className='h-full w-[calc(100%-1rem)] object-cover lg:w-[calc(80%-1rem)]'
                    />
                    <div className='h-4 w-48 bg-[#df002f] lg:h-8'></div>
                  </div>
                  <div className='h-48 w-4 bg-[#df002f] lg:w-8'></div>
                </div>
                <div className='relative flex h-full w-full flex-col lg:w-1/2'>
                  <p className='mb-4 text-left text-clamp_textoImportante font-light text-gray-500'>
                    {slide.text}
                  </p>
                  <h3 className='mb-2 whitespace-pre-line text-left text-lg font-light'>
                    {slide.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className='custom-prev absolute left-0 top-0 z-10 flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-300 text-4xl transition-colors duration-500 hover:bg-[#df002f] lg:-bottom-8 lg:top-auto'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </div>
          <div className='custom-next absolute right-0 top-0 z-10 flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-300 text-4xl transition-colors duration-500 hover:bg-[#df002f] lg:-bottom-8 lg:top-auto'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </div>
        </Swiper>
      </div>
    </>
  )
}
