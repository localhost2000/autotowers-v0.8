import { ReactTyped } from 'react-typed'

export default function Header() {
  return (
    <header>
      {/* <div className='text-2xl font-bold'>Логотип</div> */}
      <ReactTyped
        strings={['.автовышки', '.сруб_деревьев', '.альпинисты']}
        typeSpeed={120}
        backSpeed={80}
        loop
        className='text-3xl font-bold'
      />
      <div className='absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-20'>
        <button className='text-button'>Компания</button>
        <button className='text-button'>Работы</button>
        <button className='text-button'>Отзывы</button>
        <button className='text-button'>Контакты</button>
      </div>
      <button className='rounded-button'>Заказать</button>
    </header>
  )
}
