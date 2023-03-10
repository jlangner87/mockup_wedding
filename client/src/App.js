import './styles/App.css'
import Header from './components/header'
import OurStory from './components/OurStory'
import WeddingParty from './components/WeddingParty'
import Venue from './components/Venue'
import TravelLodging from './components/TravelLodging'
import Registry from './components/Registry'
import RSVP from './components/Rsvp'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <OurStory />
      <WeddingParty />
      <Venue />
      <TravelLodging />
      <Registry />
      <RSVP />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
