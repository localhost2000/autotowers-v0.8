import { useEffect, useState } from 'react'
import { ReactTyped } from 'react-typed'
import { constant } from '../constants'
import { headlines, sections } from '../data'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`${isScrolled ? 'bg-white shadow-lg shadow-black/10' : ''}`}
    >
      <div className='min-desktop:w-[1500px] min-desktop:px-4 mx-auto flex items-center justify-between gap-4'>
        <ReactTyped
          strings={headlines}
          typeSpeed={120}
          backSpeed={80}
          loop
          className='min-desktop:text-2xl font-bold'
        />

        <nav className='max-desktop:hidden absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-15'>
          {sections.map(({ title, href }, index) => (
            <a key={index} className='link' href={href}>
              {title}
            </a>
          ))}
        </nav>

        <div className='max-desktop:hidden flex items-center gap-6 text-sm font-bold text-gray-500'>
          <a href={`tel:${constant.NUMBER}`} className='link'>
            {constant.NUMBER}
          </a>
          <a href={`tel:${constant.NUMBER}`} className='accent-button'>
            Заказать
          </a>
        </div>

        <a
          href={`tel:${constant.NUMBER}`}
          className='accent-button min-desktop:hidden text-sm'
        >
          Заказать
        </a>
      </div>
    </header>
  )
}
