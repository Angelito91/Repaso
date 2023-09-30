import img from '../assets/hacker-5471975_640.png'

export function Soy () {
  return (
    <>
      <section id='soy' className='flex items-center h-[90vh] gap-10 p-10'>
        <div className='p-5'>
          <img className='rounded-xl w-full' src={img} alt='asd' />
        </div>
        <ul className='p-5 w-full text-center'>
          <li className='text-3xl text-white mb-5'>Soy un joven</li>
          <li className='text-lg text-gray-400 mb-5'>Tengo 16 años</li>
          <li className='text-lg text-gray-400 mb-5'>
            Actualmente estoy en la fase de estudio y aprendizaje
          </li>
          <li className='text-lg text-gray-400 mb-5'>
            Quiero ingresar a la carrera de{' '}
            <span className='text-white'>Ciencias de la Computacion</span>
          </li>
          <li className='text-lg text-gray-400 mb-5'>
            Me gusta la musica y el futbol
          </li>
          <li className='text-lg text-gray-400 mb-5'>
            Deseo crear grandes cosas en mi vida profesional
          </li>
        </ul>
      </section>

      <div className='flex flex-col gap-1 justify-center items-center bg-gradient-to-r from-sky-900 h-[10vh]'>
        <a
          href='#skills'
          className='text-3xl text-white font-bold animate-bounce font-sans'
        >
          Skills
        </a>
      </div>
    </>
  )
}
