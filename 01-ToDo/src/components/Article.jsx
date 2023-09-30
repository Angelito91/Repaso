export function Article ({
  titulo,
  setTitulo,
  contenido,
  setContenido,
  error,
  handleAdd
}) {
  return (
    <div className='m-5'>
      <form className='flex justify-center items-center'>
        <input
          id='titulo'
          className='rounded-full bg-transparent text-red-400 border border-sky-400 shadow-md shadow-sky-400 m-4 p-3'
          placeholder='titulo'
          type='text'
          value={titulo}
          maxLength={20}
          onChange={e => setTitulo(e.target.value)}
        />
        <input
          id='contenido'
          className='rounded-full bg-transparent text-red-400 border border-sky-400 shadow-md shadow-sky-400 w-full m-4 p-3'
          placeholder='contenido'
          type='text'
          value={contenido}
          maxLength={50}
          onChange={e => setContenido(e.target.value)}
        />
        <button aria-label="hola"
          className='border border-sky-400 rounded-full hover:bg-sky-400 hover:text-black hover:scale-125'
          onClick={handleAdd}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            fill='currentColor'
            class='bi bi-plus'
            viewBox='0 0 16 16'
          >
            <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
          </svg>
        </button>
      </form>
      <p className='text-center text-red-400'>{error}</p>
    </div>
  )
}
