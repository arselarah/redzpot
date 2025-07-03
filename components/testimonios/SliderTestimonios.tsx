import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Image from 'next/image'

const slides = [
  {
    title: 'Algodoneros de Unión Laguna',
    text: 'Envía mensajes masivos desde WhatsApp a todos tus prospectos.',
    image: '/assets/slider/4.webp'
  },
  {
    title: 'Grupo VALMUR',
    text: 'Lleva toda tu gestión de manera digital con eficiencia y seguridad.',
    image: '/assets/slider/2.webp'
  },
  {
    title: 'AUTOLASA',
    text: 'Obtén en tiempo real reportes detallados de marketing, ventas y finanzas.',
    image: '/assets/slider/3.webp'
  }
]

export default function SliderTestimonios() {
  return (
    <>
      <div className='relative px-4 py-8'>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect='fade' // 👈 esta línea activa el efecto
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          spaceBetween={0}
          loop
          speed={1000} // 👈 duración de la transición en milisegundos (1000ms = 1 segundo)
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='relative flex w-full flex-col items-start justify-center gap-24 bg-slate-700 text-white lg:flex-row'>
                <div className='relative flex h-full w-full -translate-y-[18rem] justify-end bg-white lg:w-1/2'>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={500}
                    height={500}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='relative flex h-full w-full flex-col justify-end lg:w-1/2'>
                  <p className='mb-4 text-left text-sm'>{slide.text}</p>
                  <h3 className='mb-2 whitespace-pre-line text-left text-lg font-bold'>
                    {slide.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
