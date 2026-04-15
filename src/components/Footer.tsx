import { constant } from '../constants'

export default function Footer() {
  return (
    <footer>
      <div className='mx-auto flex w-[1500px] items-center justify-between p-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold uppercase'>
            вышки <br /> про👷
          </h1>
          <span>Профессиональные услуги на высоте.</span>
        </div>

        <div className='flex flex-col items-end gap-4'>
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
