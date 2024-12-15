import FileForm from './components/FileForm.jsx'
import imgUrl from './assets/caja_verde.png'
import './App.css'

function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={imgUrl} className="logo" alt="RPC green" />
      </div>
      <h1 className="text-5xl">Program Maintenance</h1>
      <FileForm/>
    </>
  )
}

export default App
