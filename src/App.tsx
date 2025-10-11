import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const [count, setCount] = useState(0)
  const [t, i18n] = useTranslation()

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          {t('count-text')} {count}
        </button>
        <p>
          {t('text.edit')} <code>src/App.tsx</code> {t('text.save_hmt')}
        </p>
      </div>
      <p className='read-the-docs'>{t('footer')}</p>
    </>
  )
}

export default App
