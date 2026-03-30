import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import State_Section from './components/Banner/State_Section/State_Section'
import Started_Section from './components/Banner/State_Section/Started_Section/Started_Section'
import Pricing_Section from './components/Pricing_Section/Pricing_Section'
import Ready_Section from './components/Ready_Section/Ready_Section'

function App() {
  

  return (
    <>
     <div className='max-w-400 mx-auto'>
        {/* navbar */}
        <div className='lg:w-[85%] mx-auto'>
          <Navbar></Navbar>
        </div>

        {/* banner */}
        <div className='lg:w-[85%] mx-auto'>
          <Banner></Banner>
        </div>

        {/* state section */}
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
        <State_Section></State_Section>
        </div>

        {/* started section */}
        <div className='lg:w-[85%] mx-auto'>
          <Started_Section></Started_Section>
        </div>

        {/* pricing section */}
        <div className='lg:w-[85%] mx-auto'>
          <Pricing_Section></Pricing_Section>
        </div>

        {/* ready section */}
        <div className='mt-7 lg:mt-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
          <Ready_Section></Ready_Section>
        </div>

        {/* footer section */}
        <Footer></Footer>
     </div>
    </>
  )
}

export default App
