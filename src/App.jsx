import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import State_Section from './components/Banner/State_Section/State_Section'
import Started_Section from './components/Banner/State_Section/Started_Section/Started_Section'

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

        {/* footer section */}
        <Footer></Footer>
     </div>
    </>
  )
}

export default App
