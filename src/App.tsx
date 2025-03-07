import TobBar from './components/TopBar'
import { RuteApp } from './routes'

import { GlobalStyle } from './styles/GlobalStyle'

export function App() {

  return (
    <>
      <GlobalStyle />
      <TobBar />
      <RuteApp />
    </>
  )
}