import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ListItem from './list/ListItem'
import BottomSamples from './components/BottomSamples'
import Usage from './pages/usage'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import Setting from './pages/Setting'
import Products from './pages/Products'
import Reducer from './pages/Reducer'
import ReduxCounter from './pages/ReduxCounter'
import ReduxThunk from './pages/ReduxThunk'

function App() {

  const [currentPage, setPage] = useState('home')

  const selectedPage = (page) => {
    setPage(page)
  }
  const renderContent = (type) => {
    switch (type) {
      case "Setting": return <Setting />;
      case "Products": return <Products />
      case "Reducer": return <Reducer />
      case "Redux": return <ReduxCounter />
      case "ReduxThunk": return <ReduxThunk />
      default: return <HomePage />;
    }
  };
  return (
    <>
      <Header selectedPage={selectedPage} />
      {renderContent(currentPage)}

      {/* <BottomSamples /> */}
      {/* <Usage/> */}
      <Footer />
    </>
  )
}

export default App