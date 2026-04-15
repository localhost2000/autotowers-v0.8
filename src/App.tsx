import Banner from './components/Banner'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Services from './components/Services'

export default function App() {
  return (
    <div className='flex flex-col justify-between'>
      <Header />

      <Hero />

      <Services />

      {/* <Works /> */}

      <Banner />

      <Reviews />

      <Contacts />

      {/* <Towers /> */}

      {/* <LinkButton /> */}

      <Footer />
    </div>
  )
}
