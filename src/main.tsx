import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <div className="min-h-screen bg-dark"> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </div> */}
    </Provider>
  </StrictMode>,
)
