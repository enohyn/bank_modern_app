import React from 'react'
import {
  Billing, Business, CardDeal, Clients,
  CTA, Footer, Hero, Navbar, Stats, Testimonials
} from './components'
import styles from './style'
const App = () => {
  return (
    <div className='bg-secondary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
        <div className={`bg-secondary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero/>
          </div>
        </div>
        <div className={`bg-secondary ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business/>
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
    </div>
  )
}

export default App
//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
    
//     </div>
//   )
// }

// export default App
