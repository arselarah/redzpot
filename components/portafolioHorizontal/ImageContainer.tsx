import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface ImageContainerProps {
  imageSource: string | StaticImageData
}

export default function ImageContainer({ imageSource }: ImageContainerProps) {
  return (
    <div className='image-container'>
      <Image width={500} height={500} src={imageSource} alt='imagen' />
    </div>
  )
}
