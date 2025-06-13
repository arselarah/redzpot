import React, { useState } from 'react'
import { motion } from 'framer-motion'
import imagenes from '../slider/Imagenes'
import Image from 'next/image'
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight
} from 'react-icons/hi2'
import { BsDot } from 'react-icons/bs'

export default function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? imagenes.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === imagenes.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <motion.div
        className='flex gap-4 md:gap-8'
        initial={{ x: 0 }}
        animate={{ x: -currentIndex * 320 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 0.5
        }}
      >
        {imagenes.map((imagen, index) => (
          <motion.div
            className='aspect-square h-[30rem] min-w-[20rem]'
            key={index}
          >
            <Image
              src={imagen}
              alt={`Imagen ${index + 1}`}
              width={500}
              height={500}
              className='h-full w-full object-cover'
            />
          </motion.div>
        ))}
      </motion.div>
      <div className='flex w-full flex-row justify-between py-8'>
        <button
          onClick={prevSlide}
          className='rounded-full bg-white p-3 transition-all hover:opacity-70'
        >
          <HiOutlineArrowSmallLeft />
        </button>
        <div className='flex items-center gap-2'>
          {imagenes.map((_, index) => (
            <BsDot
              className={`cursor-pointer text-2xl ${index === currentIndex ? 'text-primary_red' : 'text-white'}`}
              key={index}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className='rounded-full bg-white p-3 transition-all hover:opacity-70'
        >
          <HiOutlineArrowSmallRight />
        </button>
      </div>
    </>
  )
}
