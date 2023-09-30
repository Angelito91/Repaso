export function Hero () {
  return (
    <section className='flex justify-end items-center transition hover:scale-110  hover:cursor-pointer hover:z-10'>
      <img
        src='https://random.imagecdn.app/1000/400'
        alt='hero'
        className='w-full h-[400px]'
      />
      <div className='absolute right-20 w-60  bg-slate-50 rounded-lg shadow-md opacity-80 p-2'>
        <h3 className='text-center text-2xl font-bold m-2'>
          Los mejores consejos para ahorrar dinero
        </h3>
        <p className='text-justify text-gray-600'>
          Si quieres mejorar tus finanzas personales, te compartimos consejos
          prácticos para ahorrar dinero en tu día a día. Desde reducir gastos
          innecesarios hasta establecer metas financieras, aprende a administrar
          mejor tus recursos.
        </p>
      </div>
    </section>
  )
}
