import { ToastContainer } from 'react-toastify';
import TobBar from './components/TopBar'
import { RuteApp } from './routes'

import { GlobalStyle } from './styles/GlobalStyle'

import "react-toastify/dist/ReactToastify.css";

export function App() {

  return (
    <>
      <GlobalStyle />
      <TobBar />
      <RuteApp />
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  )
}