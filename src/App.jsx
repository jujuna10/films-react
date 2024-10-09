import { useState } from 'react'
import Header from './components/Header'
import NewFilmsContainer from './components/newfilms/NewFilmsContainer'
import NewSerialsContainer from './components/newSerials/NewSerialsContainer'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Header />
      <NewFilmsContainer/>
      <NewSerialsContainer />
      <Footer/>
    </div>
  )
}

export default App
