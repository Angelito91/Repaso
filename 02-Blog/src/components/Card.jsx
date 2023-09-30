const textos = [
  {
    titulo: '10 consejos para mejorar tu productividad',
    contenido:
      'En este artículo te compartimos 10 consejos prácticos para aumentar tu productividad en el trabajo. ¡No te los pierdas!'
  },
  {
    titulo: 'Las mejores recetas de postres para sorprender a tus invitados',
    contenido:
      'Descubre nuestras deliciosas recetas de postres que impresionarán a tus invitados. Desde tartas hasta helados, tenemos opciones para todos los gustos.'
  },
  {
    titulo: 'Cómo elegir el mejor destino para tus vacaciones',
    contenido:
      'Si estás planeando tus próximas vacaciones, te damos algunos consejos para ayudarte a elegir el destino perfecto. Considera tus intereses, presupuesto y preferencias para tomar la mejor decisión.'
  },
  {
    titulo: 'Consejos para mantener una vida saludable',
    contenido:
      'En este artículo te brindamos consejos prácticos sobre cómo llevar un estilo de vida saludable. Desde la alimentación balanceada hasta la actividad física, descubre cómo cuidar tu bienestar.'
  },
  {
    titulo: 'Los mejores destinos para los amantes de la naturaleza',
    contenido:
      'Si eres un apasionado de la naturaleza, te presentamos algunos destinos impresionantes que debes visitar. Desde montañas hasta playas paradisíacas, estos lugares te dejarán sin aliento.'
  },
  {
    titulo: 'Consejos para decorar tu hogar con estilo',
    contenido:
      'Si quieres darle un toque especial a tu hogar, te ofrecemos consejos de decoración para crear ambientes acogedores y elegantes. Descubre cómo jugar con los colores, los muebles y los accesorios.'
  }
]

export function Card () {
  return (
    <article className='grid sm:grid-cols-3 grid-cols-1 gap-10 m-5'>
    {
        textos.map((texto,index) => (
            <div className='flex flex-col items-center gap-3 bg-slate-50 rounded-lg shadow-md p-4 transition hover:-translate-y-2 hover:cursor-pointer hover:z-10'>
            <img
              src={`https://random.imagecdn.app/300/20${index}`}
              alt='card-img'
              className='w-full'
            />
            <h3 className='text-2xl font-bold'>{texto.titulo}</h3>
            <p className='text-justify text-gray-600'>{texto.contenido}</p>
          </div>
        ))
    }
  </article>
    
  )
}
