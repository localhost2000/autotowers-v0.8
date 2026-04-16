import { constant } from '../constants'
import MiniBanner from './MiniBanner'
import MailIcon from '/mail-icon.svg'
import PhoneIcon from '/phone-icon.svg'
import WorkScheduleIcon from '/time-icon.svg'

export default function Contacts() {
  return (
    <section className='mb-10' id='contacts'>
      <h1>Свяжитесь с нами</h1>
      <div className='max-desktop:flex-col max-desktop:gap-8 max-desktop:w-full flex justify-center gap-20'>
        <MiniBanner />

        <div className='flex flex-col gap-8'>
          <h4 className='max-desktop:text-xl text-2xl font-bold'>
            Контактная информация
          </h4>

          <div className='max-desktop:gap-4 flex flex-col gap-6'>
            <div className='flex items-center gap-6'>
              <img src={PhoneIcon} alt='Phone' className='size-7' />
              <div className='flex flex-col gap-0.5'>
                <span className='text-sm'>Телефон</span>
                <a href={`tel:${constant.NUMBER}`} className='link'>
                  {constant.NUMBER}
                </a>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <img src={MailIcon} alt='Email' className='size-7' />
              <div className='flex flex-col gap-0.5'>
                <span className='text-sm'>Электронная почта</span>
                <a href={`mailto:${constant.MAIL}`} className='link'>
                  {constant.MAIL}
                </a>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <img src={WorkScheduleIcon} alt='Schedule' className='size-7' />
              <div className='flex flex-col gap-0.5'>
                <span className='text-sm'>Время работы</span>
                <span className='font-bold'>{constant.WORK_SCHEDULE}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
