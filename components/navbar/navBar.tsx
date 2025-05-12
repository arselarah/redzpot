import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/400.css'

export default function NavBar() {
  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' }
  ]
  const redes = [
    { clase: 'facebook', href: '/' },
    { clase: 'instagram', href: '#nosotros' },
    { clase: 'linkedin', href: '#servicios' },
    { clase: 'x', href: '#clientes' }
  ]
  return (
    <>
      <section className='absolute left-0 top-0 flex h-20 w-full items-center justify-between bg-transparent px-4 font-poppins'>
        <div className='mx-auto flex w-full max-w-[100rem] flex-row justify-between'>
          <div className='w-full max-w-32'>
            <Link href='' className='text-white'>
              <Image
                src='/assets/logo_redzpot.png'
                alt='Logo Redzpot'
                width={100}
                height={100}
                className='w-full object-contain'
              />
            </Link>
          </div>
          <section className='flex w-full max-w-[800px] grow items-center justify-end'>
            <nav className='hidden grow justify-between text-sm font-medium uppercase md:flex'>
              {links.map((link, id) => (
                <div key={id} className='flex'>
                  <Link
                    href={link.href}
                    className='p-2 font-medium tracking-wider text-white'
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              {/* <div className='relative flex justify-center'>
              <Link
                href={'#contacto'}
                className='rounded-full bg-white px-8 py-2 font-medium tracking-wider'
              >
                Contacto
              </Link>
            </div> */}
            </nav>
            {/* <div className='redes-header flex w-full max-w-48 items-center justify-between'>
            {redes.map((red, id) => (
              <div key={id} className='relative h-8 w-8'>
                <Link
                  href={red.href}
                  className={`absolute inset-0 left-0 top-0 text-white ${red.clase} bg-center bg-no-repeat`}
                >
                  
                </Link>
              </div>
            ))}
          </div> */}
            <div className='movile-menu flex md:hidden'>
              <div className='burger-icon relative flex h-8 w-8 flex-col items-center justify-center gap-2'>
                <span className='h-[2px] w-full bg-white'></span>
                <span className='h-[2px] w-full bg-white'></span>
                <span className='h-[2px] w-full bg-white'></span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
