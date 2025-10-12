import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/Main'

function App() {
  return (
    <div id='main-container'>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
