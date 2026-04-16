import { useEffect, useState } from 'react'
import { ReactTyped } from 'react-typed'
import { constant } from '../constants'
import { headlines } from '../data'

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

        <div className='max-desktop:hidden absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-15'>
          <button className='text-button'>Услуги</button>
          <button className='text-button'>Работы</button>
          <button className='text-button'>Отзывы</button>
          <button className='text-button'>Контакты</button>
        </div>

        <div className='max-desktop:hidden flex items-center gap-6 text-sm font-bold text-gray-500'>
          <span>{constant.NUMBER}</span>
          <button className='rounded-button'>Заказать</button>
        </div>

        <button className='rounded-button min-desktop:hidden text-sm'>
          Заказать
        </button>
      </div>
    </header>
  )
}
