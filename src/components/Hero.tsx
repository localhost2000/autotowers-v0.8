import { specifications } from '../data'
import DoneIcon from '/public/done-icon.svg'

export default function Hero() {
  return (
    <div className='hero'>
      <img
        src={`${import.meta.env.BASE_URL}/services/autotowers.jpg`}
        alt=''
        className='backdrop-hero'
      />

      <div className='flex flex-col gap-8'>
        <div className='flex gap-12 font-bold text-gray-500'>
          {specifications.map((specification) => (
            <div className='flex items-center gap-2'>
              <img src={DoneIcon} alt='Done' className='size-6' />
              <span>{specification}</span>
            </div>
          ))}
        </div>

        <h1 className='text-8xl font-bold uppercase'>
          вышки <br /> про👷
        </h1>

        <span className='text-lg font-bold'>
          Профессиональные услуги на высоте.
        </span>

        <div className='flex gap-8'>
          <button className='rounded-button'>Получить консультацию</button>
          <button className='secondary-button'>Услуги</button>
        </div>
      </div>

      <div className='flex flex-col gap-0.5 text-right text-lg'>
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
  )
}
