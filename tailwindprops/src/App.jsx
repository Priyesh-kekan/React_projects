import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 rounded-xl mb-4'>Hello World</h1>
      <Card username="hitesh" />
      <Card username='priyesh' />
      <Card />
    </>
  )
}

export default App
