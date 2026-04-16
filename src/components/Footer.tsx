import { constant } from '../constants'

export default function Footer() {
  return (
    <footer>
      <div className='min-desktop:mx-auto min-desktop:w-[1500px] max-desktop:flex-col min-desktop:items-center max-desktop:gap-6 flex justify-between p-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold uppercase'>
            вышки <br /> про👷
          </h1>
          <span className='max-desktop:max-w-1/2'>
            Профессиональные услуги на высоте.
          </span>
        </div>

        <div className='min-desktop:items-end flex flex-col gap-4'>
          <span className=''>{constant.NUMBER}</span>
          <span>{constant.EMAIL}</span>
          <span className='text-sm font-bold text-gray-500'>
            Ежедневно с 8:00 до 20:00
          </span>
        </div>
      </div>
    </footer>
  )
}
