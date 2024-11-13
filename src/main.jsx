import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './MainPage'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './state/store'; // Ensure this path is correct

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
        <Main/>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)