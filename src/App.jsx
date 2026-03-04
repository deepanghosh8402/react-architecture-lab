import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ListItem from './list/ListItem'
import BottomSamples from './components/BottomSamples'
import List from './list/List'
import Usage from './pages/usage'

function App() {

  return (
    <>
      <Header />
      <List />
      {/* <BottomSamples /> */}
      {/* <Usage/> */}
      <Footer />
    </>
  )
}

export default App