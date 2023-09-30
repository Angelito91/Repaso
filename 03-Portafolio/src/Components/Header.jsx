export function Header () {
  return (
    <header className='fixed flex z-10 justify-between bg-gradient-to-r from-slate-900 items-center w-full p-7'>
      <a href='/' className='text-4xl text-sky-500 font-serif'>
        Portafilo
      </a>
      <nav>
        <a
          href='#inicio'
          className='text-slate-500 transition hover:text-white text-md font-bold font-mono m-4'
        >
          Inicio
        </a>
        <a
          href='#soy'
          className='text-slate-500 transition hover:text-white text-md font-bold font-mono m-4'
        >
          Quien soy?
        </a>
        <a
          href='#skills'
          className='text-slate-500  transition hover:text-white text-md font-bold font-mono m-4'
        >
          Skills
        </a>
        <a
          href='#contacto'
          className='text-slate-500 transition hover:text-white text-md font-bold font-mono m-4'
        >
          Contacto
        </a>
      </nav>
    </header>
  )
}
