import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import svelte from '../assets/svelte.png'
import sql from '../assets/sql.png'
import node from '../assets/node.png'

export function Skills () {
  return (
    <>
      <section
        id='skills'
        className='flex flex-col justify-center items-center h-[90vh] gap-5 p-10'
      >
        <div>
          <h2 className='text-3xl font-bold font-serif text-white '>
            Algunas de las tecnologias que he aprendido en todo este tiempo
          </h2>
        </div>
        <ul className='grid grid-cols-3 gap-10'>
          <li >
            <img className='rounded-xl w-32' src={html} alt='html' />
          </li>
          <li >
            <img className='rounded-xl w-32' src={css} alt='css' />
          </li>
          <li >
            <img className='rounded-xl w-32' src={javascript} alt='javascript' />
          </li>
          <li >
            <img className='rounded-xl w-32' src={node} alt='node' />
          </li>
          <li >
            <img className='rounded-xl w-32' src={react} alt='react' />
          </li>
          <li >
            <img className='rounded-xl w-32' src={svelte} alt='svelte' />
          </li>
          <li >
            <img className='rounded-xl w-32' src={sql} alt='sql' />
          </li>
        </ul>
      </section>

      <div className='flex flex-col gap-1 justify-center items-center bg-gradient-to-r from-slate-900 h-[10vh]'>
        <a
          href='#contacto'
          className='text-3xl text-white font-bold animate-bounce font-sans'
        >
          Contacto
        </a>
      </div>
    </>
  )
}
