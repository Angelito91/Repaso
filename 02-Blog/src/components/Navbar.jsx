export function Navabar () {
  return (
    <header className='flex justify-evenly sm:justify-between items-center p-6 bg-sky-100'>
      <a
        href='#'
        className='text-lg sm:text-4xl  bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-violet-500 font-serif font-bold mr-10 sm:m-0'
      >
        Blog
      </a>
      <nav>
        <a
          href='#'
          className='text-sm sm:text-lg font-serif  text-black m-2 sm:m-4'
        >
          Inicio
        </a>
        <a
          href='#'
          className='text-sm sm:text-lg font-serif  bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-violet-500 hover:text-black m-2 sm:m-4'
        >
          Tendencias
        </a>
        <a
          href='#'
          className='text-sm sm:text-lg font-serif  bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-violet-500 text-sky-800 hover:text-black m-2 sm:m-4'
        >
          Categorias
        </a>
        <a
          href='#'
          className='text-sm sm:text-lg font-serif  bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-violet-500 text-sky-800 hover:text-black m-2 sm:m-4'
        >
          Contactos
        </a>
      </nav>
    </header>
  )
}
