import { Github, Twitter } from './Icons.jsx'

export function Footer () {
  return (
    <footer
      id='contacto'
      className='flex gap-1 justify-between items-center bg-gradient-to-r from-sky-900 p-5 text-white'
    >
      <p>@Angelito 2023</p>
      <div className='flex items-center gap-10'>
        <Github />
        <Twitter />
      </div>
    </footer>
  )
}
