import { constant } from '../constants'
import EmailIcon from '/mail-icon.svg'
import PhoneIcon from '/phone-icon.svg'
import ScheduleIcon from '/time-icon.svg'

export default function Contacts() {
  return (
    <div className='section mb-10'>
      <h1 className='heading'>Свяжитесь с нами</h1>
      <div className='max-desktop:flex-col max-desktop:gap-8 max-desktop:w-full flex justify-center gap-20'>
        <div className='min-desktop:w-[600px] relative flex h-[300px] flex-col justify-end overflow-hidden rounded-2xl shadow-lg shadow-black/15'>
          <img
            src={`${import.meta.env.BASE_URL}/services/autotowers.jpg`}
            alt=''
            className='absolute left-0 -z-10 size-full object-cover'
          />

          <div className='min-desktop:gap-0.5 m-6 flex flex-col'>
            <h4 className='text-xl font-bold'>Профессионально</h4>
            <span>Работаем на высоте</span>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          <h4 className='max-desktop:text-xl text-2xl font-bold'>
            Контактная информация
          </h4>

          <div className='max-desktop:gap-4 flex flex-col gap-6'>
            <div className='flex items-center gap-6'>
              <img src={PhoneIcon} alt='Phone' className='size-7' />
              <div className='flex flex-col gap-0.5'>
                <span className='text-sm'>Телефон</span>
                <span className='font-bold'>{constant.NUMBER}</span>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <img src={EmailIcon} alt='Email' className='size-7' />
              <div className='flex flex-col gap-0.5'>
                <span className='text-sm'>Электронная почта</span>
                <span className='font-bold'>{constant.EMAIL}</span>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <img src={ScheduleIcon} alt='Schedule' className='size-7' />
              <div className='flex flex-col gap-0.5'>
                <span className='text-sm'>Время работы</span>
                <span className='font-bold'>{constant.SCHEDULE}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
