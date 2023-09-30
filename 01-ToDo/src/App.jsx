import { useState } from 'react'
import { Header } from './components/Header'
import { Article } from './components/Article'
import { Section } from './components/Section'

function App () {
  const [todos, setTodos] = useState(() => {
    const todosLocal = window.localStorage.getItem('todos')
    if (todosLocal) {
      return JSON.parse(todosLocal)
    } else {
      return []
    }
  })
  const [titulo, setTitulo] = useState('')
  const [contenido, setContenido] = useState('')
  const [error, setError] = useState('')

  const handleAdd = event => {
    event.preventDefault()
    if (titulo.trim() !== '' && contenido.trim() !== '') {
      const todo = { id: crypto.randomUUID(), titulo, contenido }
      const newTodos = [...todos, todo]
      window.localStorage.setItem('todos', JSON.stringify(newTodos))
      setTodos(newTodos)
      setTitulo('')
      setContenido('')
      setError('')
    } else {
      setError('Por favor introduzca un titulo y un contenido')
    }
  }

  const handleDelete = id => {
    const newTodos = todos.filter(todo => todo.id !== id)
    window.localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
    setError('')
  }

  const handleUpdate = index => {
    const newTodos = [...todos]
    if (titulo.trim() !== '' || contenido.trim() !== '') {
      newTodos[index].titulo = titulo !== '' ? titulo : newTodos[index].titulo
      newTodos[index].contenido =
        contenido !== '' ? contenido : newTodos[index].contenido
      window.localStorage.setItem('todos', JSON.stringify(newTodos))
      setTodos(newTodos)
      setTitulo('')
      setContenido('')
      setError('')
    } else {
      setError('Por favor introduzca un titulo o un contenido para actualizar')
    }
  }

  return (
    <>
      <Header />
      <main>
      <Article
        titulo={titulo}
        contenido={contenido}
        setTitulo={setTitulo}
        setContenido={setContenido}
        error={error}
        handleAdd={handleAdd}
      />
      <Section
        todos={todos}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      </main>
    </>
    
  )
}

export default App
