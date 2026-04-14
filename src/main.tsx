import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Block from './components/Block'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Towers from './components/Towers'
import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex flex-col justify-between'>
      <Header />

      <Hero />

      <Towers />

      <Block imageAlt='' imageSrc='' heading='Heading'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum iusto
        assumenda facere quidem impedit, dolore non ea corrupti aliquam dolor
        nobis aut autem pariatur voluptate quisquam reprehenderit ullam deserunt
        earum. Quidem necessitatibus facere provident mollitia numquam sunt sit?
        Adipisci, culpa aperiam? Voluptatibus quisquam ex laborum eligendi porro
        vero, nihil, reiciendis nemo suscipit assumenda ratione totam
        repellendus aperiam vitae praesentium fugiat.
      </Block>

      <Block imageAlt='' imageSrc='' heading='Heading' imagePosition='right'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum iusto
        assumenda facere quidem impedit, dolore non ea corrupti aliquam dolor
        nobis aut autem pariatur voluptate quisquam reprehenderit ullam deserunt
        earum. Quidem necessitatibus facere provident mollitia numquam sunt sit?
        Adipisci, culpa aperiam? Voluptatibus quisquam ex laborum eligendi porro
        vero, nihil, reiciendis nemo suscipit assumenda ratione totam
        repellendus aperiam vitae praesentium fugiat.
      </Block>

      <Block imageAlt='' imageSrc='' heading='Heading'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum iusto
        assumenda facere quidem impedit, dolore non ea corrupti aliquam dolor
        nobis aut autem pariatur voluptate quisquam reprehenderit ullam deserunt
        earum. Quidem necessitatibus facere provident mollitia numquam sunt sit?
        Adipisci, culpa aperiam? Voluptatibus quisquam ex laborum eligendi porro
        vero, nihil, reiciendis nemo suscipit assumenda ratione totam
        repellendus aperiam vitae praesentium fugiat.
      </Block>

      <div className='flex h-[1000px] items-center justify-center bg-black p-8 text-white'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
        laudantium nihil? Nihil, eveniet dignissimos? Aliquid placeat nostrum
        alias error pariatur aperiam officia, unde ea explicabo nisi
        voluptatibus minus aliquam architecto! Dignissimos ipsum quasi esse
        culpa commodi qui autem ut itaque reiciendis veniam corrupti expedita
        nulla, repellat unde ratione adipisci rerum aperiam optio voluptate?
        Fuga modi non hic laborum excepturi sit. Ullam perferendis iste fugit
        earum laudantium est saepe alias, expedita suscipit asperiores laborum
        ut cum quaerat, iusto officia repellendus sunt consequuntur magni
        facilis atque error nihil, voluptatem culpa labore. Temporibus? Fuga
        eligendi neque blanditiis odit earum exercitationem perspiciatis, animi
        facere optio, sunt dolores mollitia repudiandae nemo natus! A, nulla.
        Unde molestiae expedita facere officia at nesciunt dolores iusto totam
        quaerat?
      </div>

      <button className='animation fixed right-6 bottom-6 z-10 rounded-full bg-[#f36d4f] p-6 font-bold text-white shadow-lg shadow-black/40'>
        Связаться
      </button>

      <Footer />
    </div>
  </StrictMode>
)
