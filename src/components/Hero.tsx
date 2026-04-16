import { constant } from '../constants'
import { specifications } from '../data'
import DoneIcon from '/done-icon.svg?url'

export default function Hero() {
  return (
    <div className='hero'>
      <img
        src={`${import.meta.env.BASE_URL}/services/autotowers.jpg`}
        alt=''
        className='backdrop-hero max-desktop:h-[800px]! max-[381px]:hidden'
      />

      <div className='max-desktop:flex-col max-desktop:mt-[140px] max-desktop:gap-6 flex w-full items-center justify-between p-4'>
        <div className='max-desktop:gap-4 max-desktop:w-full flex flex-col gap-8'>
          <div className='max-desktop:hidden flex gap-12 font-bold text-gray-500'>
            {specifications.map((specification, index) => (
              <div key={index} className='flex items-center gap-2'>
                <img src={DoneIcon} alt='Done' className='size-6' />
                <span>{specification}</span>
              </div>
            ))}
          </div>

          <span className='max-desktop:text-6xl text-8xl font-bold uppercase'>
            вышки <br /> про👷
          </span>

          <span className='max-desktop:max-w-1/2 text-lg font-bold'>
            Профессиональные услуги на высоте.
          </span>

          <div className='max-desktop:flex-col max-desktop:gap-2 flex gap-8'>
            <a href={`tel:${constant.NUMBER}`} className='accent-button'>
              Получить консультацию
            </a>
            <a className='link-button' href='#services'>
              Услуги
            </a>
          </div>
        </div>

        <div className='max-desktop:w-full min-desktop:text-right min-desktop:text-lg flex flex-col gap-0.5'>
          <h4>
            Автовышки <b>12–45</b> метров.
          </h4>

          <p>
            <b>Любые задачи:</b> от монтажа электролиний до уборки снега с крыш.
          </p>

          <p>Работаем с деревьями, рекламой и сложными объектами.</p>

          <p>
            Высоты не боимся! Берем все под <b>ключ</b>.
          </p>

          <p className='text-base text-gray-500'>
            Дополнительные услуги: промышленные альпинисты,
            <br />
            спил и вывоз деревьев (санитарная рубка, хмаловка),
            <br /> монтаж рекламы с изготовлением, очистка кровли от снега и
            сосулек.
          </p>
        </div>
      </div>
    </div>
  )
}
