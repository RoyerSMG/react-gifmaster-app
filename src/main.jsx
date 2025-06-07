import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifMasterApp } from './GifMasterApp'
import './style.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifMasterApp />
  </StrictMode>
)
