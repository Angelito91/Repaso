import { Email, Flecha } from './Icons.jsx'

export function Contacto () {
  return (
    <section id='contacto' className='flex items-center h-[90vh] gap-10 p-10'>
      <div className='p-5 w-full'>
        <h2 className='text-3xl font-bold text-white mb-5'>
          Me pueden escribir a mi correo electronico.
        </h2>
        <p className='text-lg text-gray-400 mb-5'>
          Prometo responder lo mas rapido posible
        </p>
        <Flecha />
      </div>
      <div className='p-5 flex justify-center w-full'>
        <Email />
      </div>
    </section>
  )
}
