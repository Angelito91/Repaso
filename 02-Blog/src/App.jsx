import { Card } from './components/Card'
import { Hero } from './components/Hero'
import { Navabar } from './components/Navbar'

function App () {
  return (
    <div className='min-h-screen bg-slate-200'>
      <Navabar />
      <main>
        <Hero />
        <Card />
      </main>
      <footer className='flex justify-evenly sm:justify-between items-center p-6 bg-sky-100'>
        @Angelito
      </footer>
    </div>
  )
}

export default App
