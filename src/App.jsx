import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <>
     <div className='max-w-400 lg:w-[85%] mx-auto'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Footer></Footer>
     </div>
    </>
  )
}

export default App
