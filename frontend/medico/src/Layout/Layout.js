import React from 'react'
import Header from '../Component/Header/Header.js'
import Footer from '../Component/Footer/Footer.js'
import Routers from '../Routers.js/Router'

export default function Layout() {
  return (
    <div>
        <Header/>
        <main>
            <Routers/>
        </main>
        <Footer/>
      
    </div>
  )
}
