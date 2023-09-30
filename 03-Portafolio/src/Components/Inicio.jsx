import img from '../assets/game-developer-chalk-white-icon-2238095.jpg'
import { Github, Twitter } from './Icons.jsx'

export function Inicio () {
  return (
    <>
      <section
        id='inicio'
        className='flex flex-col items-center h-[90vh] gap-10 p-10'
      >
        <div className='p-5 w-full'>
          <h1 className='text-4xl font-bold text-white mb-5'>
            ¡Hola! Mi nombre es{' '}
            <span className='text-sky-400 animate-pulse'>Angel</span>
          </h1>
          <p className='text-lg text-gray-400 mb-5'>
            Soy un gran apasionado del mundo del desarrollo de sofware, y
            disfruto mucho aprender y crear soluciones
          </p>
          <div className='flex items-center gap-10'>
            <a href='#contacto' className='bg-sky-400 font-bold rounded-md p-2'>
              Contactame
            </a>
            <Github />
            <Twitter />
          </div>
        </div>
        <div className='p-5 sm:flex hidden justify-center items-center w-full  '>
          <img className='rounded-full' src={img} alt='img' />
        </div>
      </section>

      <div className='flex flex-col gap-1 justify-center items-center bg-gradient-to-r from-slate-900 h-[10vh]'>
        <a
          href='#soy'
          className='text-3xl text-white font-bold animate-bounce font-sans'
        >
          Quien soy?
        </a>
      </div>
    </>
  )
}
