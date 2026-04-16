import { reviews } from '../data'
import PersonIcon from '/person-icon.svg'

export default function Reviews() {
  return (
    <section id='reviews'>
      <h1>Отзывы</h1>
      <div className='min-tablet:grid-cols-2 max-desktop:gap-4 grid gap-10'>
        {reviews.map(({ author, text }, index) => (
          <div key={index} className='flex items-center gap-6'>
            <div className='max-desktop:hidden flex aspect-square size-20 items-center justify-center rounded-2xl bg-gray-500/20'>
              <img src={PersonIcon} alt='Person' className='size-[60%]' />
            </div>
            <div className='flex flex-col gap-0.5'>
              <span className='max-desktop:text-xl font-bold'>{author}</span>
              <span className=''>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
